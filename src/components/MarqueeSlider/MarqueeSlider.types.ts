export interface MarqueeSliderProps {
  items: any[];
  startSlider: boolean;
  /** Stop scrolling (reduced motion, or a company has keyboard focus). */
  paused?: boolean;
  setBackgroundColor: (color: string) => void;
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
  setContent: (content: {
    date?: string;
    role?: string;
    description?: string;
  }) => void;
}
