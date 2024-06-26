import styled from 'styled-components';

import { colors, devices, spacing } from '../../tokens';
import { renderArrowSvg } from '../../utils';

export const StyledList = styled.ul`
  margin: 0;
  width: 100%;
  list-style: none;
`;

export const StyledListItem = styled.li`
  position: relative;
  padding: ${spacing.medium} 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

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

    @media ${devices.md} {
      display: none;
    }
  }
`;

export const StyledLink = styled.a<{ $light: boolean }>`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: ${spacing.small};
  text-decoration: none;
  font-family: 'Helvetica Neue';
  font-size: 12px;
  line-height: 18px;
  color: ${({ $light }) =>
    $light ? colors.neutral.offWhite : colors.primary.green.dark};

  @media ${devices.md} {
    grid-gap: ${spacing.xsmall};
    font-size: 32px;
    line-height: 42px;
  }
`;

export const StyledTitle = styled.h3``;
