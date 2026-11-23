import { Fragment } from 'react';

import { Typography } from '../../components';
import { TypographyLevel } from '../../components/Typography/Typography.types';

import { colors } from '../../tokens';

import { StyledHeadline, StyledParagraph } from './Headline.styles';
import { HeadlineProps } from './Headline.types';

export const Headline = ({
  paragraphs,
  light,
  as = 'h1',
  id,
  decorative = false,
}: HeadlineProps) => (
  <StyledHeadline
    as={decorative ? 'div' : as}
    id={id}
    aria-hidden={decorative || undefined}
  >
    {paragraphs.map((paragraph, index) => (
      <Fragment key={index}>
        {/* Keeps words separate in the heading's accessible name. */}
        {index > 0 && ' '}
        <StyledParagraph>
          <Typography
            as="span"
            level={TypographyLevel.HEADLINE}
            color={light ? colors.neutral.offWhite : colors.primary.green.dark}
          >
            {paragraph}
          </Typography>
        </StyledParagraph>
      </Fragment>
    ))}
  </StyledHeadline>
);
