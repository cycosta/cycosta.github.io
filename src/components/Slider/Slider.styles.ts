import styled from 'styled-components';

import { devices, spacing } from '../../tokens';

export const StyledCarouselItem = styled.div<{
  $current: number;
  $active: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(-${({ $current }) => $current * 100}%);
  padding-bottom: ${spacing.small};
  min-width: 100%;
  height: 100%;
  align-self: end;
  transition: transform 0.5s;
`;

export const StyledCarouselTitle = styled.div<{
  $active: boolean;
}>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: ${spacing.small} 1fr ${spacing.small};
  gap: ${spacing.hxxsmall};
  width: 100%;
  text-align: center;
  cursor: pointer;

  @media ${devices.lg} {
    grid-template-columns: ${spacing.large} 1fr ${spacing.large};
  }

  > * {
    white-space: nowrap;

    &:nth-child(1),
    &:nth-child(3) {
      display: ${({ $active }) => ($active ? 'block' : 'none')};
      opacity: 0.2;
    }

    &:nth-child(1) {
      justify-self: end;
    }

    &:nth-child(3) {
      justify-self: start;
    }
  }
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const StyledProgressContainer = styled.div`
  position: absolute;
  bottom: ${spacing.xsmall};
  padding: 0 ${spacing.xsmall};
  width: 100%;
`;
