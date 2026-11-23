import { useMediaQuery } from '../../hooks/useMediaQuery';

import { MotionContext } from './MotionContext';

/** Pauses autoplaying motion when the OS asks for reduced motion. */
export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  const motionPaused = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <MotionContext.Provider value={{ motionPaused }}>
      {children}
    </MotionContext.Provider>
  );
};
