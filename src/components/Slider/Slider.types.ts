export interface SliderProps {
  items: any[];
  startSlider: boolean;
  setBackgroundColor: (color: string) => void;
  setContent: (content: {
    date?: string;
    role?: string;
    description?: string;
  }) => void;
}
