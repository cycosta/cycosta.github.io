import { useEffect, useRef } from 'react';

import { useInViewport } from '../../hooks';

import { StyledContainer } from './Container.styles';
import { ContainerProps } from './Container.types';

export const Container = ({
  id,
  width,
  height,
  backgroundColor,
  children,
  padding,
}: ContainerProps) => {
  const targetRef = useRef(null);

  const inViewport = useInViewport(targetRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewport) {
      window.location.hash = id;
    }
  }, [inViewport]);

  return (
    <StyledContainer
      id={id}
      ref={targetRef}
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      $padding={padding}
    >
      {children}
    </StyledContainer>
  );
};
