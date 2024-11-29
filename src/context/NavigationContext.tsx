import { createContext, useContext, useState } from 'react';

const NavigationContext = createContext(
  {} as {
    navigationHash: string;
    setNavigationHash: (navigationHash: string) => void;
  },
);

const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [navigationHash, setNavigationHash] = useState<string>('');

  return (
    <NavigationContext.Provider value={{ navigationHash, setNavigationHash }}>
      {children}
    </NavigationContext.Provider>
  );
};

const useNavigation = () => {
  return useContext(NavigationContext);
};

export { NavigationProvider, useNavigation };
