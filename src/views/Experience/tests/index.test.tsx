import { render, screen } from '@testing-library/react';

import { Experience } from '..';

describe('<Experience />', () => {
  const renderComponent = () => render(<Experience />);

  it('should render component with first content in view', () => {
    renderComponent();

    expect(
      screen.getByRole('heading', {
        name: /quintoandar/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/2021 — present/i)).toBeInTheDocument();
    expect(
      screen.getByText(/front-end software engineer/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /quintoandar is the top of mind proptech in latam, where i contribute to maintaining and enhancing the entire property visits experience within a team of over 15 people\./i,
      ),
    ).toBeInTheDocument();
  });
});
