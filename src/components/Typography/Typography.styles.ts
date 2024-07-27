import styled from 'styled-components';

import { colors, devices } from '../../tokens';

export const StyledTypography = styled.div<{ $color?: string }>`
  &.typography {
    color: ${({ $color }) => ($color ? $color : colors.neutral.black)};

    &__headline {
      font-family: 'Tusker Grotesk';
      text-transform: uppercase;
      font-size: 160px;
      line-height: 164px;

      @media ${devices.xl} {
        font-size: 200px;
        line-height: 200px;
        letter-spacing: -1px;
      }
    }

    &__headingLarge {
      font-family: 'Helvetica Neue';
      letter-spacing: -1px;
      font-size: 56px;
      line-height: 60px;

      @media ${devices.xl} {
        font-size: 180px;
        line-height: 230px;
      }
    }

    &__headingMedium {
      font-family: 'Helvetica Neue';
      font-size: 48px;
      line-height: 58px;
      letter-spacing: -1px;
    }

    &__headingSmall {
      font-family: 'Helvetica Neue';
      font-size: 33px;
      line-height: 41px;
    }

    &__bodyMedium {
      font-family: 'Helvetica Neue';
      font-size: 24px;
      line-height: 32px;

      @media ${devices.xl} {
        font-size: 24px;
        line-height: 29px;
      }
    }

    &__bodySmall {
      font-family: 'Helvetica Neue';
      font-size: 12px;
      line-height: 16px;

      @media ${devices.xl} {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
`;
