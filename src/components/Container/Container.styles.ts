import styled from 'styled-components';

import { devices, spacing } from '../../tokens';

import { Padding } from './Container.types';

const setPadding = (padding: Padding) => {
  const paddingMap = {
    [Padding.NONE]: `
      padding: 0;
    `,
    [Padding.DEFAULT]: `
      padding-right: ${spacing.xsmall};
      padding-left: ${spacing.xsmall};
      padding-bottom: ${spacing.xlarge};

      @media ${devices.lg} {
        padding-right: ${spacing.xxlarge};
        padding-left: ${spacing.xxlarge};
        padding-bottom: ${spacing.xxlarge};
      }
    `,
    [Padding.FULL]: `
      padding-top: ${spacing.xlarge};
      padding-right: ${spacing.xsmall};
      padding-left: ${spacing.xsmall};
      padding-bottom: ${spacing.xlarge};

      @media ${devices.lg} {
        padding: ${spacing.xxlarge};
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
    [Padding.TOP]: `
      padding-top: ${spacing.xxlarge};
      padding-right: ${spacing.xsmall};
      padding-left: ${spacing.xsmall};

      @media ${devices.lg} {
        padding-right: ${spacing.xxlarge};
        padding-left: ${spacing.xxlarge};
      }
    `,
    [Padding.BOTTOM]: `
      padding-bottom: ${spacing.xxlarge};
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
  $padding?: Padding;
}>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  ${({ $padding }) =>
    $padding ? setPadding($padding) : setPadding(Padding.DEFAULT)};
  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || 'auto'};
  transition: background-color 0.3s ease;
`;
