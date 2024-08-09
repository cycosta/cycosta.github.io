import styled from 'styled-components';

import { devices, spacing } from '../../tokens';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 260px max-content;

  @media ${devices.lg} {
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

  @media ${devices.lg} {
    justify-self: center;
  }
`;

export const StyledImage = styled.img`
  width: 240px;
  height: 340px;
  object-fit: cover;

  @media ${devices.lg} {
    width: 100%;
    height: 530px;
  }

  @media ${devices.xl} {
    width: 480px;
    height: 630px;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.large};
  padding: ${spacing.xlarge} 0;

  @media ${devices.lg} {
    gap: 200px;
    padding: 0;
  }
`;

export const StyledSkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.hxxsmall} ${spacing.xxsmall};
  list-style-type: none;
`;
