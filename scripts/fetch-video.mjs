/*
 * Fetches the ambient loop video from Google Drive and prepares it for use.
 *
 * The original /view link is: https://drive.google.com/file/d/<FILE_ID>/view
 * Drive serves hotlinked <video> requests unreliably (UA/consent interstitials),
 * so the file is self-hosted by Vite from /public for a guaranteed-good src,
 * correct MIME type, and Range support for seeking/streaming.
 *
 * Post-processing: the final 60s are trimmed off (per design), the audio
 * track is dropped, and the clip is re-encoded with +faststart so it can
 * start streaming immediately. Uses the ffmpeg-static dev dependency.
 *
 * Usage: node scripts/fetch-video.mjs
 */
import { createWriteStream, existsSync, statSync } from 'node:fs';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { execFileSync } from 'node:child_process';
import ffmpegPath from 'ffmpeg-static';

const FILE_ID = '1FE48vWZZeSGzHeA9gglBrMWAjOb2nvzu';
const DEST = new URL('../public/aethera-loop.mp4', import.meta.url);
/** Keep this many seconds; the last minute of the source is cut. */
const KEEP_SECONDS = '153.5';
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

const downloadUrl = `https://drive.usercontent.google.com/download?id=${FILE_ID}&export=download`;

if (existsSync(DEST) && statSync(DEST).size > 1_000_000) {
  console.log('[fetch-video] public/aethera-loop.mp4 already present — skipping.');
  process.exit(0);
}

console.log('[fetch-video] Downloading from Google Drive…');

const res = await fetch(downloadUrl, {
  headers: { 'User-Agent': UA, Accept: 'video/mp4,*/*' },
  redirect: 'follow',
});

if (!res.ok || !res.body) {
  console.error(`[fetch-video] Download failed: HTTP ${res.status} ${res.statusText}`);
  process.exit(1);
}

const contentType = res.headers.get('content-type') ?? '';
const declaredLength = Number(res.headers.get('content-length') ?? '0');

if (!contentType.includes('video/') && !contentType.includes('octet-stream')) {
  console.error(`[fetch-video] Expected video, got "${contentType}" — Drive interstitial?`);
  process.exit(1);
}

await pipeline(Readable.fromWeb(res.body), createWriteStream(DEST));

const received = statSync(DEST).size;
if (received < 1_000_000) {
  console.error(`[fetch-video] Suspiciously small file (${received} bytes) — aborting.`);
  process.exit(1);
}

console.log(
  `[fetch-video] Downloaded (${(received / 1_048_576).toFixed(1)} MB` +
    (declaredLength && received === declaredLength ? ', complete)' : ')'),
);

/* Trim the last minute, drop audio, re-encode for streaming. */
try {
  console.log('[fetch-video] Trimming to the first', KEEP_SECONDS, 'seconds…');
  const tmp = `${DEST.pathname}.tmp.mp4`;
  execFileSync(ffmpegPath, [
    '-y',
    '-hide_banner',
    '-loglevel', 'error',
    '-i', DEST.pathname,
    '-t', KEEP_SECONDS,
    '-an',
    '-c:v', 'libx264',
    '-crf', '26',
    '-preset', 'slow',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    tmp,
  ]);
  const { renameSync, unlinkSync } = await import('node:fs');
  unlinkSync(DEST.pathname);
  renameSync(tmp, DEST.pathname);
  console.log(
    `[fetch-video] Final asset: ${KEEP_SECONDS}s, ${(statSync(DEST).size / 1_048_576).toFixed(1)} MB, audio removed, +faststart.`,
  );
} catch (err) {
  console.warn(
    '[fetch-video] ffmpeg trim failed — keeping the full-length clip. Install/reinstall ffmpeg-static and rerun if you need the trimmed version.',
    err instanceof Error ? err.message : err,
  );
}
