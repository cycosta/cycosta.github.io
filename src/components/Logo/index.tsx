import { LogoProps } from './Logo.types';
import { StyledLogo } from './Logo.styles';

import LogoImage from '../../assets/images/logo.svg';

/** Decorative logo mark; wrap it in a labelled control to make it interactive. */
export const Logo = ({
  width = '24px',
  height = '24px',
  light = false,
}: LogoProps) => (
  <StyledLogo aria-hidden="true" $width={width} $height={height} $light={light}>
    <LogoImage />
  </StyledLogo>
);
