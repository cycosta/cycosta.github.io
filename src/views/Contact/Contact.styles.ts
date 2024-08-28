import styled from 'styled-components';

import { spacing, devices } from '../../tokens';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 260px max-content min-content;
  margin-top: ${spacing.medium};

  @media ${devices.lg} {
    grid-template-rows: auto;
    grid-template-columns: 1fr 2fr 1fr;
    gap: ${spacing.hxxsmall};
    align-items: end;
    margin-top: 0;
    height: calc(100vh - ${spacing.xxlarge});
  }
`;

export const StyledImageContainer = styled.div`
  justify-self: end;

  @media ${devices.lg} {
    justify-self: center;
  }
`;

export const StyledImage = styled.img`
  width: 240px;
  height: 350px;
  object-fit: cover;

  @media ${devices.lg} {
    width: 480px;
    height: 630px;
  }
`;

export const StyledListContainer = styled.div`
  width: 100%;
`;
