import { fireEvent, screen } from '@testing-library/react';

import { renderWithProvider } from '../../../utils';
import { featuredData } from '../../../data';

import { Featured } from '..';

describe('<Featured />', () => {
  const renderComponent = () => renderWithProvider(<Featured />);

  it('should render component with initial featured list', () => {
    renderComponent();

    const visibleList = featuredData.slice(0, 5);

    visibleList.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('should move focus to the first newly loaded article', () => {
    renderComponent();

    fireEvent.click(screen.getByRole('button', { name: /load more/i }));

    expect(
      screen.getByRole('link', {
        name: `${featuredData[5].title} (opens in a new tab)`,
      }),
    ).toHaveFocus();
  });
});
