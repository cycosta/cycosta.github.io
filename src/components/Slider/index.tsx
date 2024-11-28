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

export const Slider = ({
  items,
  startSlider,
  setBackgroundColor,
  setContent,
}: SliderProps) => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number>(0);
  const [next, setNext] = useState<number>(0);

  const carouselLoop = () => {
    if (current === items.length - 1) return setCurrent(0);
    if (startSlider) setCurrent(current + 1);

    return;
  };

  useEffect(() => {
    const interval = setInterval(() => carouselLoop(), 8000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    setBackgroundColor(items[current].brandColor);
    setContent(items[current]);
    setPrevious(current - 1);
    setNext(current + 1);
  }, [current]);

  const handleItemClick = (direction: 'previous' | 'next') => {
    direction === 'previous'
      ? setCurrent(current - 1)
      : setCurrent(current + 1);
  };

  return items.map((item, index) => {
    const { name } = item;

    return (
      <>
        <StyledCarouselItem
          key={index}
          $current={current}
          $active={current === index}
        >
          <StyledCarouselTitle $active={current === index}>
            <StyledButton onClick={() => handleItemClick('previous')}>
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
            <StyledButton onClick={() => handleItemClick('next')}>
              <Typography
                level={TypographyLevel.HEADING_LARGE}
                color={colors.neutral.white}
              >
                {items[next]?.name}
              </Typography>
            </StyledButton>
          </StyledCarouselTitle>
        </StyledCarouselItem>
        <StyledProgressContainer>
          <ProgressBar
            numberOfItems={items.length}
            active={startSlider}
            activeItem={current}
            animationDuration={8}
          />
        </StyledProgressContainer>
      </>
    );
  });
};
