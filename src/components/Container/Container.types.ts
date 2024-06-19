export interface ContainerProps {
  id: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  fullScreen?: boolean;
  children: React.ReactNode;
  noPadding?: boolean;
}
