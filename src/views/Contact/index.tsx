import { useEffect, useState } from 'react';
import { Container, Typography, List } from '../../components';
import { TypographyLevel } from '../../components/Typography/Typography.types';
import { colors } from '../../tokens';

import {
  StyledWrapper,
  StyledHeadline,
  StyledImageContainer,
  StyledImage,
  StyledListContainer,
} from './Contact.styles';
import { contactData } from '../../data';

export const Contact = () => {
  const images = [
    { src: 'src/assets/images/photography/cycosta-1.jpg' },
    { src: 'src/assets/images/photography/cycosta-2.jpg' },
    { src: 'src/assets/images/photography/cycosta-3.jpg' },
    { src: 'src/assets/images/photography/cycosta-4.jpg' },
    { src: 'src/assets/images/photography/cycosta-5.jpg' },
    { src: 'src/assets/images/photography/cycosta-6.jpg' },
    { src: 'src/assets/images/photography/cycosta-7.jpg' },
    { src: 'src/assets/images/photography/cycosta-8.jpg' },
    { src: 'src/assets/images/photography/cycosta-9.jpg' },
    { src: 'src/assets/images/photography/cycosta-10.jpg' },
    { src: 'src/assets/images/photography/cycosta-11.jpg' },
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
    <Container id="contact" backgroundColor={colors.primary.green.dark}>
      <StyledWrapper>
        <StyledHeadline>
          <Typography
            level={TypographyLevel.HEADLINE}
            color={colors.neutral.offWhite}
          >
            Let's talk
          </Typography>
        </StyledHeadline>
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
