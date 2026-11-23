import { useEffect, useState } from 'react';

import { useMediaQuery } from '../../hooks/useMediaQuery';

import { MotionContext } from './MotionContext';

export const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersReducedMotion = useMediaQuery(
    '(prefers-reduced-motion: reduce)',
  );
  const [motionPaused, setMotionPaused] = useState(prefersReducedMotion);

  // Follow the OS setting if it changes while the page is open.
  useEffect(() => {
    setMotionPaused(prefersReducedMotion);
  }, [prefersReducedMotion]);

  return (
    <MotionContext.Provider value={{ motionPaused, setMotionPaused }}>
      {children}
    </MotionContext.Provider>
  );
};
