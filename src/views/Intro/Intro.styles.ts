import styled, { keyframes } from 'styled-components';

import { devices, spacing } from '../../tokens';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

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

export const StyledImageContainer = styled.div`
  justify-self: end;
  opacity: 0;
  animation: 1s ${fadeIn} 1s ease forwards;

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
  opacity: 0;
  animation: 1s ${fadeIn} 1s ease forwards;

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
  opacity: 0;
  animation: 1s ${fadeIn} 1s ease forwards;
`;
