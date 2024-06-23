jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useNavigate: jest.fn(() => jest.fn()),
    useLocation: jest.fn(() => jest.fn()),
  };
});

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
