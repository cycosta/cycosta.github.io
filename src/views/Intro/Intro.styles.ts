import styled from 'styled-components';

import { devices, spacing } from '../../tokens';

export const StyledAnimatedHeadline = styled.div`
  position: absolute;
  left: ${spacing.xsmall};
  transform-origin: top left;
`;

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr max-content;
  grid-gap: ${spacing.xlarge};

  @media ${devices.md} {
    grid-template-rows: 1fr;
    grid-template-columns: max-content 1fr 1fr;
    gap: ${spacing.xsmall};
  }

  @media ${devices.xl} {
    grid-template-rows: 1fr;
    grid-template-columns: max-content 2fr 1fr;
    gap: ${spacing.xlarge};
  }
`;

export const StyledHeadline = styled.div`
  @media ${devices.xl} {
    align-self: end;
    margin-bottom: -${spacing.xxsmall};
  }
`;

export const StyledParagraph = styled.div`
  position: relative;

  svg {
    display: none;

    @media ${devices.xl} {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: end;

  @media ${devices.xl} {
    justify-content: center;
  }
`;

export const StyledImage = styled.img`
  width: 240px;
  height: 340px;
  object-fit: cover;

  @media ${devices.md} {
    width: 100%;
    height: 530px;
  }

  @media ${devices.xl} {
    width: 580px;
    height: 830px;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.large};

  @media ${devices.md} {
    gap: 0;
    justify-content: space-between;
  }

  @media ${devices.xl} {
    justify-content: space-between;
    align-self: end;
    height: 570px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.hxxsmall} ${spacing.xxsmall};
  list-style-type: none;
`;
