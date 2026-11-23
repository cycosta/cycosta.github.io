export interface SliderProps {
  items: any[];
  startSlider: boolean;
  /** Stop auto-advancing (e.g. reduced motion requested). */
  paused?: boolean;
  setBackgroundColor: (color: string) => void;
  setContent: (content: {
    date?: string;
    role?: string;
    description?: string;
  }) => void;
}
