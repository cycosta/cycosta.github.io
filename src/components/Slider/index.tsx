import { Fragment, useEffect, useState } from 'react';

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
  setBackgroundColor,
  setContent,
}: SliderProps) => {
  const [current, setCurrent] = useState(0);

  const total = items.length;
  const previous = (current - 1 + total) % total;
  const next = (current + 1) % total;

  useEffect(() => {
    if (!startSlider) return;

    const interval = setInterval(
      () => setCurrent((index) => (index + 1) % total),
      SLIDE_DURATION_SECONDS * 1000,
    );

    // Restarting the interval whenever `current` changes keeps a full
    // slide duration after manual navigation.
    return () => clearInterval(interval);
  }, [startSlider, total, current]);

  useEffect(() => {
    setBackgroundColor(items[current].brandColor);
    setContent(items[current]);
  }, [current]);

  return (
    <>
      {items.map((item, index) => {
        const { name } = item;

        return (
          <Fragment key={index}>
            <StyledCarouselItem $current={current} $active={current === index}>
              <StyledCarouselTitle $active={current === index}>
                <StyledButton onClick={() => setCurrent(previous)}>
                  <Typography
                    level={TypographyLevel.HEADING_LARGE}
                    color={colors.neutral.white}
                  >
                    {items[previous]?.name}
                  </Typography>
                </StyledButton>
                <Typography
                  level={TypographyLevel.HEADING_LARGE}
                  color={colors.neutral.white}
                >
                  {name}
                </Typography>
                <StyledButton onClick={() => setCurrent(next)}>
                  <Typography
                    level={TypographyLevel.HEADING_LARGE}
                    color={colors.neutral.white}
                  >
                    {items[next]?.name}
                  </Typography>
                </StyledButton>
              </StyledCarouselTitle>
            </StyledCarouselItem>
          </Fragment>
        );
      })}
      <StyledProgressContainer>
        <ProgressBar
          key={current}
          numberOfItems={total}
          active={startSlider}
          activeItem={current}
          animationDuration={SLIDE_DURATION_SECONDS}
        />
      </StyledProgressContainer>
    </>
  );
};
