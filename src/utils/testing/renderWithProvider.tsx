import { render } from '@testing-library/react';

import { AppProvider } from '../../context';

export const renderWithProvider = (component: React.ReactNode) => {
  const renderComponent = () => render(<AppProvider>{component}</AppProvider>);

  return {
    ...renderComponent(),
  };
};
