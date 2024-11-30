import { createContext } from 'react';

import { NavigationContextProps } from './NavigationContext.types';

export const NavigationContext = createContext<NavigationContextProps>({
  navigationHash: '',
  setNavigationHash: () => '',
});
