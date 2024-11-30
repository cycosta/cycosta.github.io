export interface ThemeContextProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}
