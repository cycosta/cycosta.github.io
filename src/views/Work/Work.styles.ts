import styled from 'styled-components';

import { devices, spacing } from '../../tokens';

export const StyledCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
`;

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

export const StyledCarouselContent = styled.div`
  position: absolute;
  bottom: ${spacing.large};
  display: flex;
  flex-direction: column;
  gap: ${spacing.hxxsmall};
  justify-content: space-between;
  padding: ${spacing.small} ${spacing.xsmall} 0;
`;

export const StyledProgressContainer = styled.div`
  position: absolute;
  bottom: ${spacing.xsmall};
  padding: 0 ${spacing.xsmall};
  width: 100%;
`;
