export interface SliderProps {
  items: any[];
  startSlider: boolean;
  /** Stop auto-advancing (e.g. motion paused by the user). */
  paused?: boolean;
  setBackgroundColor: (color: string) => void;
  setContent: (content: {
    date?: string;
    role?: string;
    description?: string;
  }) => void;
}
