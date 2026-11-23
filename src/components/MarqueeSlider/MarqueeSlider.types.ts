export interface MarqueeSliderProps {
  items: any[];
  startSlider: boolean;
  /** Stop scrolling (motion paused, or a company has keyboard focus). */
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
