import styled from 'styled-components';

import { colors, devices, spacing } from '../../tokens';
import { renderArrowSvg } from '../../utils';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacing.xsmall};
  width: 100%;
  height: 80px;

  svg {
    width: 24px;
    height: 24px;

    @media ${devices.lg} {
      display: none;
    }
  }

  @media ${devices.lg} {
    padding: ${spacing.medium} ${spacing.xxlarge};
    height: auto;
  }
`;

export const StyledIntro = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.small};

  @media ${devices.lg} {
    display: none;
  }
`;

export const StyledMenu = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.neutral.offWhite};
  padding: 0 ${spacing.small};
  width: 100vw;
  height: ${({ $visible }) => ($visible ? '100vh' : 0)};
  z-index: 1;
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
  height: 80px;
`;

export const StyledToggle = styled.button<{ $visible: boolean }>`
  position: relative;
  width: 18px;
  height: 2px;
  background-color: ${colors.primary.green.dark};
  border: none;
  transform: rotate(45deg);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s 0.3s ease-in-out;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 18px;
    height: 2px;
    background-color: ${colors.primary.green.dark};
    transform: rotate(-90deg);
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

export const StyledListItem = styled.li`
  position: relative;
  padding: ${spacing.medium} 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  font-family: 'Helvetica Neue';
  font-size: 12px;

  &:last-child {
    border-bottom: none;
  }

  &::after {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    content: url('data:image/svg+xml;charset=UTF-8, ${encodeURIComponent(
      renderArrowSvg(colors.primary.green.dark),
    )}');

    @media ${devices.lg} {
      display: none;
    }
  }

  @media ${devices.lg} {
    border-bottom: none;
    font-family: 'FleuronRegular';
    font-size: 18px;
  }
`;

export const StyledLink = styled.a<{ $light: boolean }>`
  text-decoration: none;
  color: ${colors.primary.green.dark};

  @media ${devices.lg} {
    transition: color 0.3s ease;
    color: ${({ $light }) =>
      $light ? colors.neutral.white : colors.neutral.gray.default};
    opacity: ${({ $light }) => ($light ? 0.2 : 1)};

    &:active {
      color: ${({ $light }) =>
        $light ? colors.neutral.white : colors.primary.green.dark};
      opacity: 1;
    }

    &:hover {
      color: ${({ $light }) =>
        $light ? colors.neutral.white : colors.primary.green.default};
      opacity: 1;
    }
  }
`;
