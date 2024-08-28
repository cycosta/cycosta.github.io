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

export const StyledParagraph = styled.div`
  position: relative;
  overflow: hidden;

  h1 {
    position: relative;
    padding-top: ${spacing.hxxsmall};
    transform: translateY(100%);
    transform-origin: bottom;
    animation: ${reveal} 1s ease forwards;
  }

  &:last-child {
    h1 {
      animation-delay: 0.5s;
    }
  }
`;
