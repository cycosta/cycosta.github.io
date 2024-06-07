import { render, screen } from '@testing-library/react';

import { List } from '..';

const defaultProps = {
  items: [
    {
      title: 'List item one',
      url: '/list-item-one',
    },
    {
      title: 'List item two',
      url: '/list-item-two',
    },
    {
      title: 'List item three',
      url: '/list-item-three',
    },
  ],
};

describe('<List />', () => {
  const renderComponent = () => render(<List {...defaultProps} />);

  it('should render component as a heading element', () => {
    renderComponent();

    expect(
      screen.getByRole('heading', {
        name: /list item one/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /list item two/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /list item three/i,
      }),
    ).toBeInTheDocument();
  });
});
