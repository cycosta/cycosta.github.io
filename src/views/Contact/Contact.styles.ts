import styled from 'styled-components';

import { spacing, devices } from '../../tokens';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 260px max-content;
  height: calc(100vh - 96px);

  @media ${devices.md} {
    grid-template-rows: auto;
    grid-template-columns: 1fr 2fr 1fr;
    gap: ${spacing.hxxsmall};
    align-items: end;
  }
`;

export const StyledHeadline = styled.div`
  max-width: 200px;
  justify-self: baseline;

  @media ${devices.md} {
    max-width: unset;
  }
`;

export const StyledImageContainer = styled.div`
  justify-self: end;

  @media ${devices.md} {
    justify-self: center;
  }
`;

export const StyledImage = styled.img`
  width: 240px;
  height: 350px;
  object-fit: cover;

  @media ${devices.md} {
    width: 480px;
    height: 630px;
  }
`;

export const StyledListContainer = styled.div`
  width: 100%;
`;
