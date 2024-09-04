import { ButtonProps, ButtonVariant, ButtonSize } from './Button.types';
import { StyledButton } from './Button.styles';

export const Button = ({
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.LARGE,
  light = false,
  fullWidth = false,
  disabled = false,
  onClick,
  children,
}: ButtonProps) => (
  <StyledButton
    $variant={variant}
    as={variant === ButtonVariant.LINK ? 'a' : 'button'}
    $size={size}
    $light={light}
    $fullWidth={fullWidth}
    disabled={disabled}
    onClick={onClick}
    className={disabled && variant === ButtonVariant.LINK ? 'disabled' : ''}
  >
    {children}
  </StyledButton>
);
