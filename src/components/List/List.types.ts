export interface ListProps {
  light?: boolean;
  items: ListItem[];
  onItemClick?: (item: string) => void;
}

interface ListItem {
  title: string;
  url: string;
}
