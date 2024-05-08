export enum TypographyLevel {
  HEADLINE = 'headline',
  HEADING_LARGE = 'headingLarge',
  HEADING_MEDIUM = 'headingMedium',
  HEADING_SMALL = 'headingSmall',
  BODY_MEDIUM = 'bodyMedium',
  BODY_SMALL = 'bodySmall',
}

export interface TypographyProps {
  level?: TypographyLevel;
  color?: string;
  children: React.ReactNode;
}
