import { render, screen } from '@testing-library/react';

import { Work } from '..';

describe('<Work />', () => {
  const renderComponent = () => render(<Work />);

  it('should render component with default content', () => {
    renderComponent();

    expect(
      screen.getByRole('heading', {
        name: /quintoandar/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/2021 — present/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /i am part of the team responsible for the entire visits experience\./i,
      ),
    ).toBeInTheDocument();
  });
});
