import { useEffect, useState } from 'react';

import { Typography, ProgressBar } from '../../components';
import { TypographyLevel } from '../../components/Typography/Typography.types';
import { colors } from '../../tokens';

import { SliderProps } from './Slider.types';
import {
  StyledButton,
  StyledCarouselItem,
  StyledCarouselTitle,
  StyledProgressContainer,
} from './Slider.styles';

const SLIDE_DURATION_SECONDS = 8;

export const Slider = ({
  items,
  startSlider,
  paused = false,
  setBackgroundColor,
  setContent,
}: SliderProps) => {
  const [current, setCurrent] = useState(0);

  const total = items.length;
  const previous = (current - 1 + total) % total;
  const next = (current + 1) % total;
  const autoplay = startSlider && !paused;

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(
      () => setCurrent((index) => (index + 1) % total),
      SLIDE_DURATION_SECONDS * 1000,
    );

    // Restarting the interval whenever `current` changes keeps a full
    // slide duration after manual navigation.
    return () => clearInterval(interval);
  }, [autoplay, total, current]);

  useEffect(() => {
    setBackgroundColor(items[current].brandColor);
    setContent(items[current]);
  }, [current, items, setBackgroundColor, setContent]);

  return (
    <>
      {items.map((item, index) => {
        const { name } = item;
        const isActive = current === index;

        return (
          <StyledCarouselItem
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${total}`}
            $current={current}
            $active={isActive}
            // Off-screen slides must not be focusable. (React 18 needs the
            // raw attribute.)
            {...(isActive ? {} : { inert: '' })}
          >
            <StyledCarouselTitle $active={isActive}>
              <StyledButton
                type="button"
                aria-label={`Previous: ${items[previous]?.name}`}
                onClick={() => setCurrent(previous)}
              >
                <Typography
                  as="span"
                  level={TypographyLevel.HEADING_LARGE}
                  color={colors.neutral.white}
                >
                  {items[previous]?.name}
                </Typography>
              </StyledButton>
              <Typography
                as="h3"
                level={TypographyLevel.HEADING_LARGE}
                color={colors.neutral.white}
              >
                {name}
              </Typography>
              <StyledButton
                type="button"
                aria-label={`Next: ${items[next]?.name}`}
                onClick={() => setCurrent(next)}
              >
                <Typography
                  as="span"
                  level={TypographyLevel.HEADING_LARGE}
                  color={colors.neutral.white}
                >
                  {items[next]?.name}
                </Typography>
              </StyledButton>
            </StyledCarouselTitle>
          </StyledCarouselItem>
        );
      })}
      <StyledProgressContainer aria-hidden="true">
        <ProgressBar
          key={current}
          numberOfItems={total}
          active={autoplay}
          activeItem={current}
          animationDuration={SLIDE_DURATION_SECONDS}
        />
      </StyledProgressContainer>
    </>
  );
};
