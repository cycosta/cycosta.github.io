import { useEffect, useRef, useState } from 'react';

import { Container, Typography } from '../../components';
import { TypographyLevel } from '../../components/Typography/Typography.types';
import { Padding } from '../../components/Container/Container.types';
import { MarqueeSlider } from '../../components/MarqueeSlider';
import { Slider } from '../../components/Slider';

import { colors } from '../../tokens';
import { useDevice, useInViewport } from '../../hooks';
import { experienceData } from '../../data';

import {
  StyledExperienceContainer,
  StyledDescription,
} from './Experience.styles';

export const Experience = () => {
  const { isMobile, isTablet } = useDevice();

  const isTouchDevice = isMobile || isTablet;

  const targetRef = useRef(null);
  const inViewport = useInViewport(targetRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewport) {
      setStartSlider(true);
    }
  }, [inViewport]);

  const [startSlider, setStartSlider] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    colors.neutral.offWhite,
  );
  const [content, setContent] = useState<{
    date?: string;
    role?: string;
    description?: string;
  }>({});

  return (
    <Container
      id="experience"
      padding={Padding.NONE}
      backgroundColor={backgroundColor}
    >
      <StyledExperienceContainer ref={targetRef}>
        {isTouchDevice ? (
          <Slider
            items={experienceData}
            startSlider={startSlider}
            setBackgroundColor={setBackgroundColor}
            setContent={setContent}
          />
        ) : (
          <MarqueeSlider
            items={experienceData}
            startSlider={startSlider}
            setBackgroundColor={setBackgroundColor}
            hovered={hovered}
            setHovered={setHovered}
            setContent={setContent}
          />
        )}
        <StyledDescription $visible={content.date !== null}>
          <Typography
            level={TypographyLevel.BODY_SMALL}
            color={colors.neutral.white}
          >
            {content.date}
          </Typography>
          <Typography
            level={TypographyLevel.BODY_SMALL}
            color={colors.neutral.white}
          >
            {content.role}
          </Typography>
          <Typography
            level={TypographyLevel.BODY_SMALL}
            color={colors.neutral.white}
          >
            {content.description}
          </Typography>
        </StyledDescription>
      </StyledExperienceContainer>
    </Container>
  );
};
