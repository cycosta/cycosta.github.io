export interface MarqueeSliderProps {
  items: any[];
  startSlider: boolean;
  setBackgroundColor: (color: string) => void;
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
  setContent: (content: any) => void;
}
