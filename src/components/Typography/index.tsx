import { TypographyLevel, TypographyProps } from './Typography.types';
import { StyledTypography } from './Typography.styles';

const levelTags = {
  headline: 'h1',
  headingLarge: 'h2',
  headingMedium: 'h3',
  headingSmall: 'h4',
  bodyMedium: 'p',
  bodySmall: 'p',
};

const renderTag = (level: TypographyLevel) => levelTags[level];

export const Typography = ({
  level = TypographyLevel.BODY_MEDIUM,
  color,
  as,
  id,
  children,
}: TypographyProps) => {
  const typographyTag = as ?? renderTag(level);

  return (
    <StyledTypography
      as={typographyTag}
      id={id}
      className={`typography typography__${level}`}
      $color={color}
    >
      {children}
    </StyledTypography>
  );
};
