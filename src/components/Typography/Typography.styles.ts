import styled from 'styled-components';

import { colors } from '../../tokens';

export const StyledTypography = styled.div<{ $color?: string }>`
  &.typography {
    color: ${({ $color }) => ($color ? $color : colors.neutral.black)};

    &__headline {
      font-family: 'Tusker Grotesk';
      font-size: 300px;
      line-height: 300px;
      letter-spacing: -1px;
      text-transform: uppercase;
    }

    &__headingLarge {
      font-family: 'Helvetica Neue';
      font-size: 200px;
      line-height: 230px;
      letter-spacing: -1px;
    }

    &__headingMedium {
      font-family: 'Helvetica Neue';
      font-size: 48pxpx;
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
      line-height: 29px;
    }

    &__bodySmall {
      font-family: 'Helvetica Neue';
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
