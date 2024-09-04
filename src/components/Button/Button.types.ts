export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  light?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LINK = 'link',
}

export enum ButtonSize {
  SMALL = 'small',
  LARGE = 'large',
}
