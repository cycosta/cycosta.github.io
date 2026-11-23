import { MainProps } from './Main.types';

// tabIndex lets the skip link move keyboard focus here.
export const Main = ({ children }: MainProps) => (
  <main id="main" tabIndex={-1}>
    {children}
  </main>
);
