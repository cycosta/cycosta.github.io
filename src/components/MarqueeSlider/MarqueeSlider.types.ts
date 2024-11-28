export interface MarqueeSliderProps {
  items: any[];
  startSlider: boolean;
  setBackgroundColor: (color: string) => void;
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
  setContent: (content: {
    date?: string;
    role?: string;
    description?: string;
  }) => void;
}
