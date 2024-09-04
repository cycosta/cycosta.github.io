import styled, { css, keyframes } from 'styled-components';

import { colors, devices, spacing } from '../../tokens';

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

export const StyledList = styled.ul`
  margin: 0;
  width: 100%;
  list-style: none;
`;

export const StyledListItem = styled.li<{
  $light: boolean;
  $index: number;
  $inView: boolean;
}>`
  position: relative;
  padding: ${spacing.medium} 0;
  border-bottom: ${({ $light }) =>
    `1px solid ${$light ? `rgba(255, 255, 255, 0.2)` : `rgba(1, 1, 1, 0.1)`}`};
  opacity: 0;
  animation: ${({ $inView }) =>
    $inView &&
    css`
      ${fadeIn} 0.3s ease-in forwards
    `};
  animation-delay: ${({ $index }) => $index * 0.1}s;

  &:last-child {
    border-bottom: none;
  }
`;

export const StyledLink = styled.a<{ $light: boolean }>`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: ${spacing.small};
  align-items: center;
  text-decoration: none;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  line-height: 18px;
  color: ${({ $light }) =>
    $light ? colors.neutral.offWhite : colors.primary.green.dark};

  @media ${devices.xl} {
    grid-gap: ${spacing.xsmall};
    font-size: 32px;
    line-height: 42px;
  }
`;

export const StyledTitle = styled.h3``;
