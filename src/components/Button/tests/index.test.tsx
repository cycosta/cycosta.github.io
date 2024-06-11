import { render, screen } from '@testing-library/react';

import { Button } from '..';

const defaultProps = {
  onClick: jest.fn(),
  children: 'Button label',
};

describe('<Button />', () => {
  const renderComponent = () =>
    render(<Button {...defaultProps}>{defaultProps.children}</Button>);

  it('should render button component with correct label', () => {
    renderComponent();

    expect(
      screen.getByRole('button', {
        name: /button label/i,
      }),
    ).toBeInTheDocument();
  });

  it('should dispatch correct method upon button click', () => {
    renderComponent();

    screen
      .getByRole('button', {
        name: /button label/i,
      })
      .click();

    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
