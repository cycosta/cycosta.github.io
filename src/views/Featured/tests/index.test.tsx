import { render, screen } from '@testing-library/react';

import { featuredData } from '../../../data';

import { Featured } from '..';

describe('<Featured />', () => {
  const renderComponent = () => render(<Featured />);

  it('should render component with initial featured list', () => {
    renderComponent();

    const visibleList = featuredData.slice(0, 5);

    visibleList.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
