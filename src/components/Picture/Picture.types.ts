import { ImgHTMLAttributes } from 'react';

export interface PictureProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  /** Path to the source JPEG, e.g. `/images/photo.jpg`. */
  src: string;
  /** Rendered width at each breakpoint, used to pick the right variant. */
  sizes: string;
  /** Hint the browser to fetch this image before others (e.g. LCP image). */
  priority?: boolean;
}
