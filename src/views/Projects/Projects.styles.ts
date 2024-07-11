import styled from 'styled-components';

import { colors, devices, spacing } from '../../tokens';

const backgroundColors = [
  colors.secondary.rose.light,
  colors.secondary.rose.default,
  colors.primary.green.default,
  colors.secondary.caramel.default,
  colors.secondary.purple,
  colors.primary.green.lightest,
];

export const StyledGalleryContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 ${spacing.xsmall} 0;
  overflow-x: hidden;

  @media ${devices.lg} {
    gap: ${spacing.hxxsmall};
    padding: ${spacing.huge} ${spacing.xxlarge} ${spacing.huge};
  }
`;

export const StyledGalleryItem = styled.div<{
  $index: number;
  $current: number;
  $clickable: boolean;
}>`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  transform: translateX(-${({ $current }) => $current * 100}%);
  background-color: ${({ $index }) =>
    backgroundColors[$index % backgroundColors.length]};
  width: calc(100vw - ${spacing.medium});
  height: 500px;
  transition: transform 0.5s linear;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};

  @media ${devices.lg} {
    width: 32%;
    height: 100%;
    transition: transform 1s linear;
  }
`;

export const StyledGalleryImage = styled.img`
  max-width: 70%;
  max-height: 70%;
  object-fit: contain;
`;
