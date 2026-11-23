import styled from 'styled-components';

import { Picture } from '../../components/Picture';

import { spacing, devices } from '../../tokens';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 260px max-content min-content;
  margin-top: ${spacing.medium};

  @media ${devices.lg} {
    grid-template-rows: auto;
    grid-template-columns: max-content 2fr 1fr;
    gap: ${spacing.xxsmall};
    align-items: end;
    margin-top: 0;
    height: calc(100vh - ${spacing.xxlarge});
  }

  @media ${devices.xl} {
    grid-template-columns: 1fr 2fr 1fr;
    gap: ${spacing.hxxsmall};
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  justify-self: end;

  @media ${devices.lg} {
    justify-self: center;
  }
`;

export const StyledImage = styled(Picture)<{ $preload?: boolean }>`
  width: 240px;
  height: 350px;
  object-fit: cover;

  @media ${devices.lg} {
    width: 100%;
    height: 540px;
  }

  @media ${devices.xl} {
    width: 480px;
    height: 640px;
  }

  /* Rendered off-screen so the browser fetches the next slide in advance. */
  ${({ $preload }) =>
    $preload &&
    `
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;
  `}
`;

export const StyledListContainer = styled.div`
  width: 100%;
`;
