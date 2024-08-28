import { Typography } from '../../components';
import { TypographyLevel } from '../../components/Typography/Typography.types';

import { colors } from '../../tokens';

import { StyledHeadline, StyledParagraph } from './Headline.styles';
import { HeadlineProps } from './Headline.types';

export const Headline = ({ paragraphs, light }: HeadlineProps) => (
  <StyledHeadline>
    {paragraphs.map((paragraph, index) => (
      <StyledParagraph key={index}>
        <Typography
          level={TypographyLevel.HEADLINE}
          color={light ? colors.neutral.offWhite : colors.primary.green.dark}
        >
          {paragraph}
        </Typography>
      </StyledParagraph>
    ))}
  </StyledHeadline>
);
