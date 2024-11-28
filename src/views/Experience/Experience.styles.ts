import styled from 'styled-components';

import { spacing, devices } from '../../tokens';

export const StyledExperienceContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
`;

export const StyledDescription = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: ${spacing.large};
  display: flex;
  flex-direction: column;
  gap: ${spacing.hxxsmall};
  justify-content: space-between;
  padding: ${spacing.small} ${spacing.xsmall} 0;
  transition: opacity 0.3s ease;

  @media ${devices.lg} {
    padding: ${spacing.small} ${spacing.xxlarge} 0;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  }
`;
