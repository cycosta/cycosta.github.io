import { Container, Typography } from '../../components';
import { TypographyLevel } from '../../components/Typography/Typography.types';
import { skillsData } from '../../data/skillsData';
import { colors } from '../../tokens';

import {
  StyledWrapper,
  StyledHeadline,
  StyledImageContainer,
  StyledImage,
  StyledContent,
  StyledSkillsList,
} from './Intro.styles';

export const Intro = () => (
  <Container id="about">
    <StyledWrapper>
      <StyledHeadline>
        <Typography
          level={TypographyLevel.HEADLINE}
          color={colors.primary.green.dark}
        >
          Cynthia Costa
        </Typography>
      </StyledHeadline>
      <StyledImageContainer>
        <StyledImage src="src/assets/images/cycosta.jpg" alt="Cynthia Costa" />
      </StyledImageContainer>
      <StyledContent>
        <Typography
          level={TypographyLevel.BODY_MEDIUM}
          color={colors.primary.green.dark}
        >
          Front-end engineer passionate about design systems and product
          development.
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
