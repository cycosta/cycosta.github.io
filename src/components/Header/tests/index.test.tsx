import { render, screen } from '@testing-library/react';

import { Header } from '..';

describe('<Header />', () => {
  const renderComponent = () => render(<Header />);

  it('should render component with default content', () => {
    renderComponent();

    expect(
      screen.getByRole('link', {
        name: /hi, i'm/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /experience/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /code snippets/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /people are saying/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /let's talk/i,
      }),
    ).toBeInTheDocument();
  });
});
