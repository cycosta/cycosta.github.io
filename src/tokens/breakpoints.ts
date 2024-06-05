export const sizes = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const breakpoints = {
  xs: `${sizes.xs}px`,
  sm: `${sizes.sm}px`,
  md: `${sizes.md}px`,
  lg: `${sizes.lg}px`,
  xl: `${sizes.xl}px`,
};

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
};
