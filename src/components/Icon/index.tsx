import { IconType, IconProps } from './Icon.types';

const ICONS: Record<IconType, { viewBox: string; d: string }> = {
  [IconType.ARROW]: {
    viewBox: '0 0 16 12',
    d: 'M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z',
  },
  [IconType.BOLT]: {
    viewBox: '0 0 70 118',
    d: 'M70 0H34.1393L4.59016 58.855H25.5328L0 118L61.9672 48.1278H37.582L70 0Z',
  },
};

export const Icon = ({ type, color, width, height }: IconProps) => {
  const { viewBox, d } = ICONS[type];

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} fill={color} />
    </svg>
  );
};
