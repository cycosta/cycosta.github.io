export enum Padding {
  NONE = 'NONE',
  FULL = 'FULL',
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL',
}

export interface ContainerProps {
  id: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  fullScreen?: boolean;
  children: React.ReactNode;
  padding?: Padding;
}
