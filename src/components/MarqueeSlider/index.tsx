import Marquee from 'react-fast-marquee';

import { Typography } from '..';
import { TypographyLevel } from '../Typography/Typography.types';
import { colors } from '../../tokens';
import { useDevice } from '../../hooks';

import {
  StyledMarqueeContainer,
  StyledMarqueeItem,
} from './MarqueeSlider.styles';
import { MarqueeSliderProps } from './MarqueeSlider.types';

export const MarqueeSlider = ({
  items,
  startSlider,
  setBackgroundColor,
  hovered,
  setHovered,
  setContent,
}: MarqueeSliderProps) => {
  const { isLargeDesktop } = useDevice();

  console.log(isLargeDesktop);

  return (
    <StyledMarqueeContainer>
      <Marquee
        play={startSlider}
        pauseOnHover
        speed={isLargeDesktop ? 400 : 300}
      >
        {items.map((item, index) => {
          const { name, date, role, description, brandColor } = item;

          return (
            <StyledMarqueeItem
              key={index}
              onMouseOver={() => {
                setBackgroundColor(brandColor);
                setHovered(true);
                setContent({ date, role, description });
              }}
              onMouseLeave={() => {
                setBackgroundColor(colors.neutral.offWhite);
                setHovered(false);
                setContent({});
              }}
            >
              <Typography
                level={TypographyLevel.HEADING_LARGE}
                color={
                  hovered ? colors.neutral.offWhite : colors.primary.green.dark
                }
              >
                {name}
              </Typography>
            </StyledMarqueeItem>
          );
        })}
      </Marquee>
    </StyledMarqueeContainer>
  );
};
