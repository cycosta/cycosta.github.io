import { useEffect, useRef, useState } from 'react';

import { Container, Headline, List } from '../../components';
import { Padding } from '../../components/Container/Container.types';

import { contactData } from '../../data';
import { useMotion } from '../../context';
import { useDevice, useInViewport } from '../../hooks';
import { colors } from '../../tokens';

import {
  StyledImage,
  StyledImageContainer,
  StyledListContainer,
  StyledWrapper,
} from './Contact.styles';

const IMAGES = Array.from(
  { length: 12 },
  (_, index) => `/images/photography/cycosta-${index + 1}.jpg`,
);

const SLIDE_INTERVAL_MS = 2000;

// Mirrors the StyledImage widths: 240px mobile, column width on lg, 480px xl.
const IMAGE_SIZES =
  '(min-width: 1280px) 480px, (min-width: 1024px) 30vw, 240px';

export const Contact = () => {
  const { isMobile } = useDevice();

  const targetRef = useRef(null);

  const inViewport = useInViewport(targetRef, {
    threshold: 0,
  });

  const { motionPaused } = useMotion();

  const [image, setImage] = useState(0);
  const nextImage = (image + 1) % IMAGES.length;

  useEffect(() => {
    if (!inViewport || motionPaused) return;

    let interval: ReturnType<typeof setInterval> | undefined;

    const start = () => {
      clearInterval(interval);
      interval = setInterval(
        () => setImage((index) => (index + 1) % IMAGES.length),
        SLIDE_INTERVAL_MS,
      );
    };

    const handleVisibilityChange = () =>
      document.hidden ? clearInterval(interval) : start();

    if (!document.hidden) start();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [inViewport, motionPaused]);

  return (
    <Container
      id="contact"
      labelledBy="contact-heading"
      backgroundColor={colors.primary.green.dark}
      padding={isMobile ? Padding.FULL : Padding.BOTTOM}
    >
      <StyledWrapper ref={targetRef}>
        <h2 id="contact-heading" className="visually-hidden">
          Let&apos;s talk
        </h2>
        {/* Animated copy of the heading, mounted when scrolled into view. */}
        {inViewport && (
          <Headline paragraphs={[`Let's`, 'talk']} light decorative />
        )}
        <StyledImageContainer>
          <StyledImage
            key={IMAGES[image]}
            src={IMAGES[image]}
            alt=""
            sizes={IMAGE_SIZES}
            width={480}
            height={640}
          />
          {inViewport && (
            <StyledImage
              key={IMAGES[nextImage]}
              src={IMAGES[nextImage]}
              alt=""
              sizes={IMAGE_SIZES}
              width={480}
              height={640}
              loading="eager"
              aria-hidden
              $preload
            />
          )}
        </StyledImageContainer>
        <StyledListContainer>
          <List items={contactData} light />
        </StyledListContainer>
      </StyledWrapper>
    </Container>
  );
};
