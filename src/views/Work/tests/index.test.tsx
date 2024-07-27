import { render, screen } from '@testing-library/react';

import { Work } from '..';

describe('<Work />', () => {
  const renderComponent = () => render(<Work />);

  it('should render component with first content in view', () => {
    renderComponent();

    expect(
      screen.getByRole('heading', {
        name: /quintoandar/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/2021 — present/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /brazil's largest proptech, where i contribute to enhancing the entire visits experience within a team of over 15 people\./i,
      ),
    ).toBeInTheDocument();
  });
});
