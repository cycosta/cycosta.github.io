import { createContext } from 'react';

export interface MotionContextProps {
  /** True when autoplaying motion (carousels, marquee, videos) should stop. */
  motionPaused: boolean;
  setMotionPaused: (paused: boolean) => void;
}

export const MotionContext = createContext<MotionContextProps>({
  motionPaused: false,
  setMotionPaused: () => undefined,
});
