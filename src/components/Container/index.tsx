import { useEffect, useRef } from 'react';
import { StyledContainer } from './Container.styles';
import { ContainerProps } from './Container.types';
import { useInViewport } from '../../hooks';

export const Container = ({
  id,
  width,
  height,
  backgroundColor,
  children,
  padding,
}: ContainerProps) => {
  const containerRef = useRef(null);
  const inViewport = useInViewport(containerRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewport) {
      history.pushState(null, '', `#${id}`);

      const stateEvent = new PopStateEvent('popstate');
      window.dispatchEvent(stateEvent);
    }
  }, [inViewport]);

  return (
    <StyledContainer
      id={id}
      ref={containerRef}
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      $padding={padding}
    >
      {children}
    </StyledContainer>
  );
};
