import { VideoHTMLAttributes } from 'react';

export interface LazyVideoProps
  extends Omit<
    VideoHTMLAttributes<HTMLVideoElement>,
    'autoPlay' | 'preload' | 'poster'
  > {
  /** Path to the MP4; a `.webp` poster with the same name must exist. */
  src: string;
}
