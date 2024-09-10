import { useEffect, useRef, useState } from 'react';

import { Container, Typography, ProgressBar } from '../../components';
import { TypographyLevel } from '../../components/Typography/Typography.types';
import { Padding } from '../../components/Container/Container.types';

import { colors } from '../../tokens';
import { useDevice, useInViewport } from '../../hooks';
import { workData } from '../../data';
import { trackWorkItemClicked } from '../../utils/eventTracking';

import {
  StyledCarouselContainer,
  StyledCarouselItem,
  StyledCarouselTitle,
  StyledButton,
  StyledCarouselContent,
  StyledProgressContainer,
} from './Work.styles';

export const Work = () => {
  const { isMobile, isDesktop } = useDevice();

  const targetRef = useRef(null);
  const inViewport = useInViewport(targetRef, {
    threshold: 0.5,
  });

  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number>(0);
  const [next, setNext] = useState<number>(0);
  const [paused, setPaused] = useState(true);

  const carouselLoop = () => {
    if (current === workData.length - 1) return setCurrent(0);

    return setCurrent(current + 1);
  };

  useEffect(() => {
    if (inViewport) {
      setPaused(false);
    }
  }, [inViewport]);

  useEffect(() => {
    const interval = setInterval(() => {
      paused ? null : carouselLoop();
    }, 4000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    setPrevious(current - 1);
    setNext(current + 1);
  }, [current]);

  const handleItemClick = (direction: 'previous' | 'next', item: string) => {
    direction === 'previous'
      ? setCurrent(current - 1)
      : setCurrent(current + 1);

    trackWorkItemClicked(item);
  };

  return (
    <Container
      id="work"
      backgroundColor={workData[current].brandColor}
      padding={Padding.NONE}
    >
      <StyledCarouselContainer ref={targetRef}>
        {workData.map((job, index) => {
          const { name, date, description } = job;

          return (
            <StyledCarouselItem
              key={index}
              $current={current}
              $active={current === index}
            >
              <StyledCarouselTitle
                $active={current === index}
                onMouseEnter={() => isDesktop && setPaused(true)}
                onMouseLeave={() => isDesktop && setPaused(false)}
              >
                <StyledButton
                  onClick={() =>
                    handleItemClick('previous', workData[previous].name)
                  }
                >
                  <Typography
                    level={TypographyLevel.HEADING_LARGE}
                    color={colors.neutral.white}
                  >
                    {workData[previous]?.name}
                  </Typography>
                </StyledButton>
                <Typography
                  level={TypographyLevel.HEADING_LARGE}
                  color={colors.neutral.white}
                >
                  {name}
                </Typography>
                <StyledButton
                  onClick={() => handleItemClick('next', workData[next].name)}
                >
                  <Typography
                    level={TypographyLevel.HEADING_LARGE}
                    color={colors.neutral.white}
                  >
                    {workData[next]?.name}
                  </Typography>
                </StyledButton>
              </StyledCarouselTitle>
              <StyledCarouselContent>
                <Typography
                  level={TypographyLevel.BODY_SMALL}
                  color={colors.neutral.white}
                >
                  {date}
                </Typography>
                <Typography
                  level={TypographyLevel.BODY_SMALL}
                  color={colors.neutral.white}
                >
                  {description}
                </Typography>
              </StyledCarouselContent>
            </StyledCarouselItem>
          );
        })}
        {isMobile && (
          <StyledProgressContainer>
            <ProgressBar
              numberOfItems={workData.length}
              activeItem={current}
              animationDuration={4}
            />
          </StyledProgressContainer>
        )}
      </StyledCarouselContainer>
    </Container>
  );
};
