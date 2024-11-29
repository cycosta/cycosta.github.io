import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(
  {} as {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
  },
);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
