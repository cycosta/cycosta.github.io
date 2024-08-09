import styled from 'styled-components';

import { colors, devices, spacing } from '../../tokens';

export const StyledList = styled.ul`
  margin: 0;
  width: 100%;
  list-style: none;
`;

export const StyledListItem = styled.li<{ $light: boolean }>`
  position: relative;
  padding: ${spacing.medium} 0;
  border-bottom: ${({ $light }) =>
    `1px solid ${$light ? colors.neutral.offWhite : colors.primary.green.dark}`};

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

  @media ${devices.lg} {
    grid-gap: ${spacing.xsmall};
    font-size: 32px;
    line-height: 42px;
  }
`;

export const StyledTitle = styled.h3``;
