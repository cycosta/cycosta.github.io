import styled, { keyframes } from 'styled-components';

import { colors, devices, spacing } from '../../tokens';

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing.xxlarge};
  padding: ${spacing.medium} ${spacing.xsmall} 0;
  background-color: transparent;
  width: 100%;
  z-index: 2;

  @media ${devices.lg} {
    margin-bottom: ${spacing.xxlarge};
    padding: ${spacing.xxlarge} ${spacing.xxlarge} 0;
  }
`;

export const StyledToggle = styled.button<{ $light: boolean }>`
  display: flex;
  align-items: center;
  gap: ${spacing.xxsmall};
  padding: 0;
  border: none;
  background: none;
  color: ${({ $light }) =>
    $light ? colors.neutral.white : colors.primary.green.darkest};
  cursor: pointer;

  @media ${devices.lg} {
    display: none;
  }
`;

export const StyledMenu = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.neutral.offWhite};
  padding: ${spacing.medium} ${spacing.xsmall} 0;
  width: 100vw;
  height: ${({ $visible }) => ($visible ? '100vh' : 0)};
  z-index: 2;
  transform: scaleY(${({ $visible }) => ($visible ? 1 : 0)});
  transform-origin: top;
  transition: all 0.3s ease-in-out;

  @media ${devices.lg} {
    position: static;
    background-color: transparent;
    padding: 0;
    transform: scaleY(1);
    height: auto;
  }
`;

export const StyledNav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 24px;

  @media ${devices.lg} {
    height: auto;
  }
`;

export const StyledCloseButton = styled.button<{ $visible: boolean }>`
  position: relative;
  /* 44px tap target; the X itself stays 18px wide. */
  width: 44px;
  height: 44px;
  margin-left: -13px;
  padding: 0;
  border: none;
  background: none;
  color: ${colors.primary.green.dark};
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s 0.3s ease-in-out;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    width: 18px;
    height: 2px;
    background-color: currentColor;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:focus-visible {
    outline-offset: 0;
  }

  @media ${devices.lg} {
    display: none;
  }
`;

export const StyledList = styled.ul`
  position: absolute;
  top: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;

  @media ${devices.lg} {
    position: static;
    display: flex;
    gap: ${spacing.small};
  }
`;

export const StyledListItem = styled.li<{ $index: number }>`
  position: relative;
  padding: ${spacing.medium} 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  font-family: 'Helvetica Neue';
  font-size: 12px;

  &:last-child {
    border-bottom: none;
  }

  @media ${devices.lg} {
    padding: 0;
    border-bottom: none;
    font-family: 'FleuronRegular';
    font-size: 16px;
    opacity: 0;
    animation: ${fadeIn} 0.3s ease-in forwards;
    animation-delay: ${({ $index }) => $index * 0.1}s;
  }
`;

export const StyledLink = styled.a<{ $light?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${colors.primary.green.dark};

  @media ${devices.lg} {
    transition: color 0.3s ease;
    /* Inactive links: at least 4.5:1 against light and dark sections. On
       dark sections only full white passes on every brand background. */
    color: ${({ $light }) =>
      $light ? colors.neutral.white : colors.primary.green.muted};

    &:hover {
      color: ${({ $light }) =>
        $light ? colors.neutral.white : colors.primary.green.default};
    }

    /* Underline marks the current section without relying on colour. */
    &.active {
      color: ${({ $light }) =>
        $light ? colors.neutral.white : colors.primary.green.dark};
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 6px;
    }
  }
`;
