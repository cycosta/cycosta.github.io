import styled from 'styled-components';

import { colors, devices, spacing } from '../../tokens';

export const StyledContainer = styled.section<{
  $width?: string;
  $height?: string;
  $backgroundColor?: string;
  $fullScreen?: boolean;
}>`
  width: ${({ $width, $fullScreen }) =>
    $fullScreen ? '100vw' : $width || '100%'};
  height: ${({ $height, $fullScreen }) =>
    $fullScreen ? '100vh' : $height || '100%'};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || colors.neutral.offWhite};
  padding: 0 ${spacing.xsmall};

  @media ${devices.md} {
    padding: 0 ${spacing.xxlarge};
  }
`;
