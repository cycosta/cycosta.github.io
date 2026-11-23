import styled from 'styled-components';

import { colors, spacing, devices } from '../../tokens';

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

/* Keyboard alternative to the hover-only marquee: visually hidden until one
   of its buttons is focused, then shown as a row of company buttons. */
export const StyledCompanyList = styled.ul`
  position: absolute;
  top: 160px;
  left: ${spacing.xxlarge};
  right: ${spacing.xxlarge};
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.hxxsmall};
  margin: 0;
  padding: 0;
  list-style: none;

  &:not(:focus-within) {
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

export const StyledCompanyButton = styled.button`
  padding: ${spacing.hxxsmall} ${spacing.xxsmall};
  border: 1px solid ${colors.neutral.white};
  border-radius: 60px;
  background: transparent;
  color: ${colors.neutral.white};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  cursor: pointer;

  &:focus-visible {
    background-color: ${colors.neutral.white};
    color: ${colors.neutral.black};
  }
`;
