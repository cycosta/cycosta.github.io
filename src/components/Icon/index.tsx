import { ReactNode } from 'react';
import { IconType, IconProps } from './Icon.types';

export const Icon = ({ type, color, width, height }: IconProps) => {
  const svgTypeMap: {
    [key in IconType]: {
      viewbox: string;
      path: ReactNode;
    };
  } = {
    [IconType.ARROW]: {
      viewbox: '0 0 16 12',
      path: (
        <path
          d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
          fill={color}
        />
      ),
    },
    [IconType.BOLT]: {
      viewbox: '0 0 70 118',
      path: (
        <path
          d="M70 0H34.1393L4.59016 58.855H25.5328L0 118L61.9672 48.1278H37.582L70 0Z"
          fill={color}
        />
      ),
    },
  };

  const { viewbox, path } = svgTypeMap[type];

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewbox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {path}
    </svg>
  );
};
