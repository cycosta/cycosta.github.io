import { useEffect, useRef, useState } from 'react';
import { Container, Headline, List } from '../../components';
import { Padding } from '../../components/Container/Container.types';
import { contactData } from '../../data';
import { useDevice, useInViewport } from '../../hooks';
import { colors } from '../../tokens';

import {
  StyledImage,
  StyledImageContainer,
  StyledListContainer,
  StyledWrapper,
} from './Contact.styles';

export const Contact = () => {
  const { isMobile } = useDevice();

  const targetRef = useRef(null);

  const inViewport = useInViewport(targetRef, {
    threshold: 0,
  });

  const images = [
    { src: 'images/photography/cycosta-1.jpg' },
    { src: 'images/photography/cycosta-2.jpg' },
    { src: 'images/photography/cycosta-3.jpg' },
    { src: 'images/photography/cycosta-4.jpg' },
    { src: 'images/photography/cycosta-5.jpg' },
    { src: 'images/photography/cycosta-6.jpg' },
    { src: 'images/photography/cycosta-7.jpg' },
    { src: 'images/photography/cycosta-8.jpg' },
    { src: 'images/photography/cycosta-9.jpg' },
    { src: 'images/photography/cycosta-10.jpg' },
  ];

  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (image === images.length - 1) return setImage(0);

      return setImage(image + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [image]);

  return (
    <Container
      id="contact"
      backgroundColor={colors.primary.green.dark}
      padding={isMobile ? Padding.FULL : Padding.BOTTOM}
    >
      <StyledWrapper ref={targetRef}>
        {inViewport && <Headline paragraphs={[`Let's`, 'talk']} light />}
        <StyledImageContainer>
          <StyledImage src={images[image].src} />
        </StyledImageContainer>
        <StyledListContainer>
          <List items={contactData} light />
        </StyledListContainer>
      </StyledWrapper>
    </Container>
  );
};
