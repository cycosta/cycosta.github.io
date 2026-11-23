import styled, { keyframes } from 'styled-components';

import { spacing } from '../../tokens';

const reveal = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

export const StyledHeadline = styled.div`
  justify-self: baseline;
  z-index: 1;
`;

export const StyledParagraph = styled.span`
  position: relative;
  display: block;
  overflow: hidden;

  > * {
    position: relative;
    display: block;
    padding-top: ${spacing.hxxsmall};
    transform: translateY(100%);
    transform-origin: bottom;
    animation: ${reveal} 1s ease forwards;
  }

  &:last-child {
    > * {
      animation-delay: 0.5s;
    }
  }
`;
