export interface HeadlineProps {
  paragraphs: string[];
  light?: boolean;
  /** Heading element for the whole headline; each paragraph is one line. */
  as?: 'h1' | 'h2';
  id?: string;
  /** Visual only: hidden from assistive tech (a real heading exists elsewhere). */
  decorative?: boolean;
}
