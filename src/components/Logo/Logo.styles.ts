import styled from 'styled-components';

import { colors } from '../../tokens';

export const StyledLogo = styled.a<{
  $width: string;
  $height: string;
  $light: boolean;
}>`
  line-height: 0;

  svg {
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};

    path {
      fill: ${({ $light }) =>
        $light ? colors.neutral.offWhite : colors.primary.green.dark};
    }
  }
`;
