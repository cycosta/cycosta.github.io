import { MotionProvider, ThemeProvider, NavigationProvider } from './';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionProvider>
      <ThemeProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </ThemeProvider>
    </MotionProvider>
  );
};
