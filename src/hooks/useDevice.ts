import { useState, useEffect } from 'react';

import { sizes } from '../tokens/breakpoints';

export const useDevice = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleDeviceDetection = () => {
      setWidth(window.innerWidth);
    };

    handleDeviceDetection();
    window.addEventListener('resize', handleDeviceDetection);

    return () => {
      window.removeEventListener('resize', handleDeviceDetection);
    };
  }, []);

  const isMobile = width <= sizes.sm;
  const isTablet = width > sizes.sm && width <= sizes.md;
  const isDesktop = width > sizes.md;

  return { isMobile, isTablet, isDesktop };
};
