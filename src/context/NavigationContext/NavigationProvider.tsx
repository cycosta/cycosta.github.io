import { useState } from 'react';

import { NavigationContext } from './NavigationContext';

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navigationHash, setNavigationHash] = useState<string>('');

  return (
    <NavigationContext.Provider value={{ navigationHash, setNavigationHash }}>
      {children}
    </NavigationContext.Provider>
  );
};
