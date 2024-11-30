import { createContext } from 'react';

import { ThemeContextProps } from './ThemeContext.types';

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => '',
});
