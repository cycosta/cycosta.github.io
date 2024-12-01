import { screen } from '@testing-library/react';

import { renderWithProvider } from '../../../utils';

import { Intro } from '..';

describe('<Intro />', () => {
  const renderComponent = () => renderWithProvider(<Intro />);

  it('should render component with default content', () => {
    renderComponent();

    screen.logTestingPlaygroundURL();

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
        /experienced frontend software engineer with a strong background in product and ui development\./i,
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
