import styled from 'styled-components';

import { colors, devices, spacing } from '../../tokens';

import { Padding } from './Container.types';

const setPadding = (padding: Padding) => {
  const paddingMap = {
    [Padding.NONE]: `
      padding: 0;
    `,
    [Padding.FULL]: `
      padding-top: ${spacing.xlarge};
      padding-right: ${spacing.xsmall};
      padding-left: ${spacing.xsmall};
      padding-bottom: ${spacing.xlarge};

      @media ${devices.lg} {
        padding-top: ${spacing.huge};
        padding-right: ${spacing.xxlarge};
        padding-left: ${spacing.xxlarge};
        padding-bottom: ${spacing.huge};
      }
    `,
    [Padding.VERTICAL]: `
      padding-top: ${spacing.xxlarge};
      padding-bottom: ${spacing.xxlarge};
    `,
    [Padding.HORIZONTAL]: `
      padding-right: ${spacing.xsmall};
      padding-left: ${spacing.xsmall};

      @media ${devices.lg} {
        padding-right: ${spacing.xxlarge};
        padding-left: ${spacing.xxlarge};
      }
    `,
  };

  return paddingMap[padding];
};

export const StyledContainer = styled.section<{
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
  $fullScreen?: boolean;
  $padding?: Padding;
}>`
  width: ${({ $width, $fullScreen }) =>
    $fullScreen ? '100vw' : $width || '100%'};
  height: ${({ $height, $fullScreen }) =>
    $fullScreen ? '100vh' : $height || '100%'};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || colors.neutral.offWhite};
  ${({ $padding }) =>
    $padding ? setPadding($padding) : setPadding(Padding.FULL)};
`;
