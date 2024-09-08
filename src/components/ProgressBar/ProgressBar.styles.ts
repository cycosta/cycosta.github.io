import styled, { keyframes, css } from 'styled-components';

import { colors, spacing } from '../../tokens';

const fill = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;

export const StyledProgressBar = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spacing.hxxsmall};
  width: 100%;
`;

export const StyledProgress = styled.div<{
  $numberOfItems: number;
  $active: boolean;
  $past?: boolean;
  $animationDuration?: number;
}>`
  background-color: rgba(255, 255, 255, 0.2);
  width: ${({ $numberOfItems }) => 100 / $numberOfItems}%;
  height: 2px;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${colors.neutral.white};
    transform: ${({ $past }) => ($past ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: left;
    animation: ${({ $active, $animationDuration }) =>
      $active &&
      css`
        ${$animationDuration}s linear forwards ${fill}
      `};
  }
`;
