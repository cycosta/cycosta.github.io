import { render, screen } from '@testing-library/react';

import { featuredData } from '../../../data';

import { Featured } from '..';

describe('<Featured />', () => {
  const renderComponent = () => render(<Featured />);

  it('should render component with featured list', () => {
    renderComponent();

    featuredData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
