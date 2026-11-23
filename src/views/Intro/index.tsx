import { Container, Headline, Typography } from '../../components';
import { TypographyLevel } from '../../components/Typography/Typography.types';

import { skillsData } from '../../data';
import { colors } from '../../tokens';

import {
  StyledWrapper,
  StyledImageContainer,
  StyledImage,
  StyledContent,
  StyledSkillsList,
} from './Intro.styles';

// Mirrors the StyledImage widths: 240px mobile, column width on lg, 480px xl.
const IMAGE_SIZES =
  '(min-width: 1280px) 480px, (min-width: 1024px) 30vw, 240px';

export const Intro = () => (
  <Container id="about">
    <StyledWrapper>
      <Headline paragraphs={['Cynthia', 'Costa']} />
      <StyledImageContainer>
        <StyledImage
          src="/images/cycosta.jpg"
          alt="Cynthia Costa"
          sizes={IMAGE_SIZES}
          width={480}
          height={630}
          priority
        />
      </StyledImageContainer>
      <StyledContent>
        <Typography
          level={TypographyLevel.BODY_MEDIUM}
          color={colors.primary.green.dark}
        >
          Experienced frontend software engineer with a strong background in
          product and UI development.
        </Typography>
        <StyledSkillsList>
          {skillsData.map((skill, index) => (
            <Typography
              key={index}
              level={TypographyLevel.BODY_SMALL}
              color={colors.primary.green.dark}
            >
              {skill}
            </Typography>
          ))}
        </StyledSkillsList>
      </StyledContent>
    </StyledWrapper>
  </Container>
);
