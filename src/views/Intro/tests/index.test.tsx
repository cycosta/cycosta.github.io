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
        /front-end engineer passionate about design systems and product development\./i,
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
