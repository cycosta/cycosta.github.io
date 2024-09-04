export interface ListProps {
  light?: boolean;
  items: ListItem[];
}

interface ListItem {
  title: string;
  url: string;
}
