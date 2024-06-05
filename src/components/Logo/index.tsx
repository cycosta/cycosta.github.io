import { LogoProps } from './Logo.types';
import { StyledLogo } from './Logo.styles';

import LogoImage from '../../assets/images/bolt.svg';

export const Logo = ({
  width = '24px',
  height = '24px',
  light = false,
  onClick,
}: LogoProps) => {
  return (
    <StyledLogo
      onClick={onClick}
      $width={width}
      $height={height}
      $light={light}
    >
      <LogoImage />
    </StyledLogo>
  );
};
