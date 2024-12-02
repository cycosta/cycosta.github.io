import styled from 'styled-components';

import { colors, devices, spacing } from '../../tokens';

const backgroundColors = [
  colors.video.mobile.rose.light,
  colors.video.mobile.rose.default,
  colors.video.mobile.green.default,
  colors.video.mobile.caramel.default,
  colors.video.mobile.purple,
  colors.video.mobile.green.lightest,
];

const desktopBackgroundColors = [
  colors.video.desktop.rose.light,
  colors.video.desktop.rose.default,
  colors.video.desktop.green.default,
  colors.video.desktop.caramel.default,
  colors.video.desktop.purple,
  colors.video.desktop.green.lightest,
];

export const StyledGalleryContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing.hxxsmall};
  margin-top: ${spacing.medium};
  padding: 0 ${spacing.xsmall} 0;
  overflow-x: hidden;

  @media ${devices.lg} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-top: 0;
    padding: ${spacing.huge} ${spacing.xxlarge} ${spacing.huge};
    height: 100vh;
  }
`;

export const StyledGalleryItem = styled.a<{
  $index: number;
  $current: number;
}>`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ $index }) =>
    backgroundColors[$index % backgroundColors.length]};
  overflow: hidden;

  &:first-child {
    grid-row-start: 1;
    grid-row-end: 3;
    height: 100%;
  }

  &:nth-child(4) {
    grid-column-start: 1;
    grid-column-end: 3;
    height: 200px;
  }

  @media ${devices.lg} {
    border-radius: 0;
    background-color: ${({ $index }) =>
      desktopBackgroundColors[$index % backgroundColors.length]};
    overflow: visible;
    width: 32%;
    height: 90%;
    transform: translateX(-${({ $current }) => $current * 100}%);
    transition: transform 0.5s linear;

    &:first-child,
    &:nth-child(4) {
      height: 90%;
    }
  }
`;

export const StyledGalleryVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
