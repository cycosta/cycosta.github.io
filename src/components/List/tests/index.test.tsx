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
  const renderComponent = (props = defaultProps) => render(<List {...props} />);

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

  it('should open web links in a new tab safely and say so', () => {
    renderComponent({
      items: [
        { title: 'GitHub', url: 'https://github.com/cycosta' },
        { title: 'Send Hi', url: 'mailto:hello@example.com' },
      ],
    });

    const external = screen.getByRole('link', {
      name: 'GitHub (opens in a new tab)',
    });
    expect(external).toHaveAttribute('target', '_blank');
    expect(external).toHaveAttribute('rel', 'noopener noreferrer');

    const mail = screen.getByRole('link', { name: 'Send Hi' });
    expect(mail).not.toHaveAttribute('target');
  });
});
