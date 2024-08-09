import { Link } from 'react-router-dom';
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: ${spacing.hxxsmall};
  margin-top: ${spacing.medium};
  padding: 0 ${spacing.xsmall} 0;
  overflow-x: hidden;

  @media ${devices.lg} {
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-top: 0;
    padding: ${spacing.huge} ${spacing.xxlarge} ${spacing.huge};
    height: 100vh;
  }
`;

export const StyledGalleryItem = styled(Link)<{
  $index: number;
  $current: number;
}>`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  transform: translateX(-${({ $current }) => $current * 100}%);
  background-color: ${({ $index }) =>
    backgroundColors[$index % backgroundColors.length]};
  width: calc(50vw - ${spacing.small});
  transition: transform 0.5s linear;

  @media ${devices.lg} {
    width: 32%;
    height: 90%;
    transition: transform 1s linear;
  }
`;

export const StyledGalleryImage = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
