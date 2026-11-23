export interface ListProps {
  light?: boolean;
  items: ListItem[];
  onItemClick?: (item: string) => void;
  /** Index of an item whose link should receive focus (e.g. after loading more). */
  focusIndex?: number;
}

interface ListItem {
  title: string;
  url: string;
}
