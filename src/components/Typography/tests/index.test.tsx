import { render, screen } from '@testing-library/react';

import { TypographyLevel } from '../Typography.types';

import { Typography } from '..';

describe('<Typography />', () => {
  const renderComponent = (props?: any) =>
    render(<Typography {...props}>Typography component test</Typography>);

  it('should render component as a heading element', () => {
    renderComponent({ level: TypographyLevel.HEADLINE });

    expect(
      screen.getByRole('heading', {
        name: /typography component test/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render component as a text element', () => {
    renderComponent({ level: TypographyLevel.BODY_MEDIUM });

    expect(screen.getByText(/typography component test/i)).toBeInTheDocument();
  });
});
