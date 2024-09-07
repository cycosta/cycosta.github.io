import { render, screen } from '@testing-library/react';

import { Header } from '..';

describe('<Header />', () => {
  const mockProps = {
    currentSection: 'about',
    setCurrentSection: jest.fn(),
  };

  const renderComponent = () => render(<Header {...mockProps} />);

  it('should render component with default content', () => {
    renderComponent();

    expect(
      screen.getByRole('link', {
        name: /hi, i'm/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /work/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /side projects/i,
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
