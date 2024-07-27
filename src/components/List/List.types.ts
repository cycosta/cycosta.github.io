export interface ListProps {
  light?: boolean;
  items: ListItem[];
  label?: string;
}

interface ListItem {
  title: string;
  url: string;
}
