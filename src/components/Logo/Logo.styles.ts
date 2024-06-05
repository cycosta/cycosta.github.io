import styled from 'styled-components';

export const StyledLogo = styled.a<{ $width: string; $height: string }>`
  line-height: 0;

  svg {
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
  }
`;
