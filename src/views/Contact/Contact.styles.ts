import styled from 'styled-components';

import { spacing, devices } from '../../tokens';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 260px max-content;

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
  z-index: 1;
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
    width: 100%;
    height: 530px;
  }
`;

export const StyledListContainer = styled.div`
  width: 100%;
`;
