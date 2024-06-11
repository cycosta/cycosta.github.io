import { Container, Typography } from '../../components';
import { TypographyLevel } from '../../components/Typography/Typography.types';
import { colors } from '../../tokens';

import Bolt from '../../assets/images/bolt.svg';

import {
  StyledWrapper,
  StyledHeadline,
  StyledParagraph,
  StyledImageContainer,
  StyledImage,
  StyledContent,
  StyledList,
} from './Intro.styles';

export const Intro = () => {
  const skills = [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'TypeScript',
    'React',
    'Styled Components',
    'Jest',
    'Redux',
    'Angular',
    'UI/UX',
    'Git',
  ];

  return (
    <Container id="about">
      <StyledWrapper>
        <StyledHeadline>
          <StyledParagraph>
            <Typography
              level={TypographyLevel.HEADLINE}
              color={colors.primary.green.dark}
            >
              Cynthia
            </Typography>
          </StyledParagraph>
          <StyledParagraph>
            <Typography
              level={TypographyLevel.HEADLINE}
              color={colors.primary.green.dark}
            >
              Costa
            </Typography>
            <Bolt />
          </StyledParagraph>
        </StyledHeadline>
        <StyledImageContainer>
          <StyledImage
            src="src/assets/images/cycosta.jpg"
            alt="Cynthia Costa"
          />
        </StyledImageContainer>
        <StyledContent>
          <Typography
            level={TypographyLevel.BODY_MEDIUM}
            color={colors.primary.green.dark}
          >
            Front-end engineer passionate about design systems and product
            development.
          </Typography>
          <StyledList>
            {skills.map((skill, index) => (
              <Typography
                key={index}
                level={TypographyLevel.BODY_SMALL}
                color={colors.primary.green.dark}
              >
                {skill}
              </Typography>
            ))}
          </StyledList>
        </StyledContent>
      </StyledWrapper>
    </Container>
  );
};
