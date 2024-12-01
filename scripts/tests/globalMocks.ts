jest.mock('../../src/hooks/useDevice.ts', () => ({
  useDevice: jest.fn(() => ({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLargeDesktop: false,
  })),
}));

jest.mock('../../src/hooks/useInViewport.ts', () => ({
  useInViewport: jest.fn(() => ({
    inViewport: true,
  })),
}));
