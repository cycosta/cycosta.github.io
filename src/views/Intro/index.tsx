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

export const Intro = () => (
  <Container id="about">
    <StyledWrapper>
      <Headline paragraphs={['Cynthia', 'Costa']} />
      <StyledImageContainer>
        <StyledImage
          src="./src/assets/images/cycosta.jpg"
          alt="Cynthia Costa"
        />
      </StyledImageContainer>
      <StyledContent>
        <Typography
          level={TypographyLevel.BODY_MEDIUM}
          color={colors.primary.green.dark}
        >
          Experienced front-end software engineer with a strong background in
          product development.
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
