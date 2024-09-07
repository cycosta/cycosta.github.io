jest.mock('../../src/hooks/useDevice.ts', () => ({
  useDevice: jest.fn(() => ({
    isMobile: false,
    isMediumUp: true,
    isDesktop: true,
  })),
}));

jest.mock('../../src/hooks/useInViewport.ts', () => ({
  useInViewport: jest.fn(() => ({
    inViewport: true,
  })),
}));
