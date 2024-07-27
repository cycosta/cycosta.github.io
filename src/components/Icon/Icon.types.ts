export enum IconType {
  ARROW = 'arrow',
  BOLT = 'bolt',
}

export interface IconProps {
  type: IconType;
  color: string;
  width?: string;
  height?: string;
}
