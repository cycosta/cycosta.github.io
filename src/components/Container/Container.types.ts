export enum Padding {
  NONE = 'NONE',
  DEFAULT = 'DEFAULT',
  FULL = 'FULL',
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL',
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

export interface ContainerProps {
  id: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  padding?: Padding;
}
