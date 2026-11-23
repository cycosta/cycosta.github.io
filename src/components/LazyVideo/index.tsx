import { useEffect, useRef } from 'react';

import { useMotion } from '../../context';
import { useInViewport } from '../../hooks';

import { LazyVideoProps } from './LazyVideo.types';

/**
 * A muted, looping video that downloads nothing but its poster until it
 * scrolls into view, and pauses again when it leaves the viewport or the
 * tab is hidden. Stays on its poster when reduced motion is requested.
 */
export const LazyVideo = ({
  src,
  className,
  ...videoProps
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inViewport = useInViewport(videoRef, { rootMargin: '200px 0px' });
  const { motionPaused } = useMotion();

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const sync = () => {
      if (inViewport && !motionPaused && !document.hidden) {
        // play() rejects if interrupted (e.g. scrolled away quickly); ignore.
        video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };

    sync();
    document.addEventListener('visibilitychange', sync);

    return () => document.removeEventListener('visibilitychange', sync);
  }, [inViewport, motionPaused]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={src.replace(/\.mp4$/, '.webp')}
      className={className}
      preload="none"
      muted
      loop
      playsInline
      {...videoProps}
    />
  );
};
