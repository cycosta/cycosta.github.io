import { render, screen } from '@testing-library/react';

import { Intro } from '..';

describe('<Intro />', () => {
  const renderComponent = () => render(<Intro />);

  it('should render component with default content', () => {
    renderComponent();

    expect(
      screen.getByRole('heading', {
        name: /cynthia/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /costa/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: /cynthia costa/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /experienced front-end software engineer with a strong background in product development\./i,
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
