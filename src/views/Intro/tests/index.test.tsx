import { screen } from '@testing-library/react';

import { renderWithProvider } from '../../../utils';

import { Intro } from '..';

describe('<Intro />', () => {
  const renderComponent = () => renderWithProvider(<Intro />);

  it('should render component with default content', () => {
    renderComponent();

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Cynthia Costa',
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
