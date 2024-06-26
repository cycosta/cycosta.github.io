import styled from 'styled-components';

import { colors, devices, spacing } from '../../tokens';

export const StyledContainer = styled.section<{
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
  $fullScreen?: boolean;
  $noPadding?: boolean;
}>`
  width: ${({ $width, $fullScreen }) =>
    $fullScreen ? '100vw' : $width || '100%'};
  height: ${({ $height, $fullScreen }) =>
    $fullScreen ? '100vh' : $height || '100%'};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || colors.neutral.offWhite};
  padding: ${({ $noPadding }) =>
    $noPadding
      ? 0
      : spacing.xsmall + ' ' + spacing.xsmall + ' ' + spacing.huge};
  transition: background-color 0.5s;

  @media ${devices.lg} {
    padding: ${({ $noPadding }) =>
      $noPadding
        ? 0
        : spacing.huge + ' ' + spacing.xxlarge + ' ' + spacing.huge};
  }
`;
