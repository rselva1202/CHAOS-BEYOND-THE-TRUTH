import { useEffect, type RefObject } from 'react';

/**
 * Source URL for the ambient background loop.
 *
 * Self-hosted from /public for a guaranteed-good src, correct MIME type, and
 * Range support (Drive hotlinking is unreliable in <video> elements — it can
 * serve UA/consent interstitials that break media parsing). The file was
 * fetched from:
 * https://drive.google.com/file/d/1FE48vWZZeSGzHeA9gglBrMWAjOb2nvzu/view?t=4.668
 * Re-download anytime with: node scripts/fetch-video.mjs
 */
export const VIDEO_URL = 'aethera-loop.mp4';

/** Remote fallback in case the local file is missing (e.g. fresh clone). */
export const VIDEO_FALLBACK_URL =
  'https://drive.usercontent.google.com/download?id=1FE48vWZZeSGzHeA9gglBrMWAjOb2nvzu&export=download';

/* Fade timing, in seconds. */
const FADE_IN_S = 0.5; // fade 0 -> 1 across the first 0.5s of the clip
const FADE_OUT_S = 0.5; // fade 1 -> 0 across the final 0.5s before it ends
const RESTART_DELAY_MS = 100; // pause at opacity 0 between loops

/**
 * Seamlessly loops a video with 0.5s cross-fades:
 *  - requestAnimationFrame tracks `currentTime`/`duration` every frame
 *  - opacity ramps 0→1 at the start and 1→0 just before the end
 *  - on `ended`: opacity 0 → wait 100ms → rewind to 0 → play again
 */
export function useVideoFadeLoop(videoRef: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';
    let restartTimer: number | undefined;
    let rafId = 0;
    let disposed = false;
    let usedFallback = false;

    const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

    /* Opacity driven by playback position: 0→1 over the first 0.5s, 1→0 over
       the last 0.5s. */
    const updateOpacity = () => {
      const { currentTime, duration } = video;
      if (duration > 0 && Number.isFinite(duration)) {
        const fadeIn = clamp01(currentTime / FADE_IN_S);
        const fadeOut = clamp01((duration - currentTime) / FADE_OUT_S);
        video.style.opacity = String(Math.min(fadeIn, fadeOut));
      }
    };

    /* Per-frame opacity for the smoothest fade while the page is painting.
       (Background tabs starve rAF; the timeupdate listener below covers that.) */
    const tick = () => {
      updateOpacity();
      rafId = requestAnimationFrame(tick);
    };

    /* ~4Hz safety net so fades still land when rAF is throttled. */
    const handleTimeUpdate = () => updateOpacity();

    const startPlayback = () => {
      if (disposed) return;
      void video.play().catch(() => {
        /* Autoplay can be blocked; the page-load gesture is normally enough
           for muted media. */
      });
      rafId = requestAnimationFrame(tick);
    };

    /* ended -> hold black for 100ms, rewind, replay. */
    const handleEnded = () => {
      video.style.opacity = '0';
      restartTimer = window.setTimeout(() => {
        if (disposed) return;
        video.currentTime = 0;
        startPlayback();
      }, RESTART_DELAY_MS);
    };

    /* Streaming sources can report 0/NaN duration until metadata arrives.
       loadedmetadata fires at readyState 1 — the play() call is what pulls
       playback (and the rAF opacity loop) forward from there. */
    const handleLoadedMetadata = () => {
      if (video.paused) startPlayback();
    };

    /* Safety net: if anything (e.g. an earlier stalled load) left the video
       paused with data available, start it as soon as it can play. */
    const handleCanPlay = () => {
      if (video.paused) startPlayback();
    };

    /* If the local file is missing (fresh clone), retry via the Drive URL. */
    const handleError = () => {
      if (disposed || usedFallback) return;
      usedFallback = true;
      video.style.opacity = '0';
      video.src = VIDEO_FALLBACK_URL;
      video.load();
    };

    if (video.readyState >= 1) startPlayback();
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.clearTimeout(restartTimer);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      video.pause();
    };
  }, [videoRef]);
}
