import { useRef } from 'react';
import { VIDEO_URL, useVideoFadeLoop } from '../hooks/useVideoFadeLoop';

/**
 * Fixed full-viewport ambient video behind the entire site — clear, not
 * blurred. The clip is graded darker so black text stays readable; overlays
 * only fade to white at the top/bottom edges, with a soft radial glow
 * behind the content column for legibility.
 */
export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoFadeLoop(videoRef);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        loop={false}
        playsInline
        preload="auto"
        disablePictureInPicture
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: 'brightness(0.72) contrast(1.14) saturate(1.18)' }}
      />
      {/* Edge veils only: nav and footer keep their white ground, the rest of
          the frame stays fully clear video. */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background/90" />
      {/* Soft center glow so dark serif text reads on any scene, no blur. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_52%_at_50%_44%,rgba(255,255,255,0.42),transparent_72%)]" />
    </div>
  );
}
