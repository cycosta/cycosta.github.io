import { useEffect, useRef } from 'react';

import { StyledContainer } from './Container.styles';
import { ContainerProps } from './Container.types';

import { useTheme, useNavigation } from '../../context';
import { useInViewport } from '../../hooks';
import { colors } from '../../tokens';

export const Container = ({
  id,
  width,
  height,
  backgroundColor = colors.neutral.offWhite,
  children,
  padding,
}: ContainerProps) => {
  const { setTheme } = useTheme();
  const { setNavigationHash } = useNavigation();

  const containerRef = useRef<HTMLDivElement>(null);
  const inViewport = useInViewport(containerRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewport) {
      setNavigationHash(id);
    }
  }, [inViewport]);

  useEffect(() => {
    if (inViewport) {
      backgroundColor === colors.neutral.offWhite
        ? setTheme('light')
        : setTheme('dark');
    }
  }, [inViewport, backgroundColor]);

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
