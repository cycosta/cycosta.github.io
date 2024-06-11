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
  padding: ${spacing.huge} ${spacing.xsmall} ${spacing.xxlarge};

  @media ${devices.lg} {
    padding: ${spacing.huge} ${spacing.xxlarge};
  }
`;
