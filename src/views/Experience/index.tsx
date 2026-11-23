import { useEffect, useRef, useState } from 'react';

import { Container, Typography } from '../../components';
import { TypographyLevel } from '../../components/Typography/Typography.types';
import { Padding } from '../../components/Container/Container.types';
import { MarqueeSlider } from '../../components/MarqueeSlider';
import { Slider } from '../../components/Slider';

import { colors } from '../../tokens';
import { useMotion } from '../../context';
import { useDevice, useInViewport } from '../../hooks';
import { experienceData } from '../../data';

import {
  StyledExperienceContainer,
  StyledDescription,
  StyledCompanyList,
  StyledCompanyButton,
} from './Experience.styles';

type Experience = (typeof experienceData)[number];

export const Experience = () => {
  const { isMobile, isTablet } = useDevice();
  const { motionPaused } = useMotion();

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
  const [keyboardActive, setKeyboardActive] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    colors.neutral.offWhite,
  );
  const [content, setContent] = useState<{
    date?: string;
    role?: string;
    description?: string;
  }>({});

  // Same effect as hovering a company in the marquee, for keyboard users.
  const showCompany = ({ brandColor, date, role, description }: Experience) => {
    setKeyboardActive(true);
    setBackgroundColor(brandColor);
    setHovered(true);
    setContent({ date, role, description });
  };

  const hideCompany = (event: React.FocusEvent<HTMLUListElement>) => {
    // Only reset once focus leaves the whole list.
    if (event.currentTarget.contains(event.relatedTarget)) return;

    setKeyboardActive(false);
    setBackgroundColor(colors.neutral.offWhite);
    setHovered(false);
    setContent({});
  };

  // Announce details when someone picks a company; stay quiet while the
  // mobile slider is rotating on its own.
  const isAutoRotating = isTouchDevice && startSlider && !motionPaused;

  return (
    <Container
      id="experience"
      labelledBy="experience-heading"
      padding={Padding.NONE}
      backgroundColor={backgroundColor}
    >
      <h2 id="experience-heading" className="visually-hidden">
        Experience
      </h2>
      <StyledExperienceContainer ref={targetRef}>
        {isTouchDevice ? (
          <Slider
            items={experienceData}
            startSlider={startSlider}
            paused={motionPaused}
            setBackgroundColor={setBackgroundColor}
            setContent={setContent}
          />
        ) : (
          <>
            <MarqueeSlider
              items={experienceData}
              startSlider={startSlider}
              paused={motionPaused || keyboardActive}
              setBackgroundColor={setBackgroundColor}
              hovered={hovered}
              setHovered={setHovered}
              setContent={setContent}
            />
            {/* Hidden until it receives keyboard focus. */}
            <StyledCompanyList onBlur={hideCompany}>
              {experienceData.map((item) => (
                <li key={item.name}>
                  <StyledCompanyButton
                    type="button"
                    onFocus={() => showCompany(item)}
                    onClick={() => showCompany(item)}
                  >
                    {item.name}
                  </StyledCompanyButton>
                </li>
              ))}
            </StyledCompanyList>
          </>
        )}
        <StyledDescription
          $visible={Boolean(content.date)}
          aria-live={isAutoRotating ? 'off' : 'polite'}
        >
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
