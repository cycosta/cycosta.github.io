import { StyledContainer } from './Container.styles';
import { ContainerProps } from './Container.types';

export const Container = ({
  width,
  height,
  backgroundColor,
  fullScreen,
  children,
}: ContainerProps) => {
  return (
    <StyledContainer
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      $fullScreen={fullScreen}
    >
      {children}
    </StyledContainer>
  );
};
