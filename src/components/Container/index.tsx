import { StyledContainer } from './Container.styles';
import { ContainerProps } from './Container.types';

export const Container = ({
  id,
  width,
  height,
  backgroundColor,
  fullScreen,
  children,
}: ContainerProps) => {
  return (
    <StyledContainer
      id={id}
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      $fullScreen={fullScreen}
    >
      {children}
    </StyledContainer>
  );
};
