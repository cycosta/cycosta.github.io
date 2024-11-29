import { ThemeProvider, NavigationProvider } from './';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <NavigationProvider>{children}</NavigationProvider>
    </ThemeProvider>
  );
};
