import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useInViewport } from '../../hooks';

import { StyledContainer } from './Container.styles';
import { ContainerProps } from './Container.types';
import { spacing } from '../../tokens';

export const Container = ({
  id,
  width,
  height,
  backgroundColor,
  children,
  padding,
}: ContainerProps) => {
  const navigate = useNavigate();

  const targetRef = useRef(null);
  const inViewport = useInViewport(targetRef, {
    threshold: 0.5,
    rootMargin: spacing.xxlarge,
  });

  useEffect(() => {
    if (inViewport) {
      navigate(`#${id}`);
    }
  }, [inViewport, id, navigate]);

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
