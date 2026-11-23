import { fireEvent, render, screen } from '@testing-library/react';

import { MotionProvider } from '../../../context';

import { Header } from '..';

describe('<Header />', () => {
  const renderComponent = () =>
    render(
      <MotionProvider>
        <Header />
      </MotionProvider>,
    );

  it('should render component with default content', () => {
    renderComponent();

    expect(
      screen.getByRole('link', {
        name: /hi, i'm/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /experience/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /code snippets/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /people are saying/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: /let's talk/i,
      }),
    ).toBeInTheDocument();
  });

  it('should open the menu from a labelled button and close it with Escape', () => {
    renderComponent();

    const toggle = screen.getByRole('button', { name: /^menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveFocus();

    fireEvent.keyDown(document.activeElement as Element, { key: 'Escape' });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();
  });

  it('should keep the closed overlay menu out of the tab order', () => {
    renderComponent();

    expect(document.getElementById('site-menu')).toHaveAttribute('inert');
  });

  it('should toggle autoplaying motion', () => {
    renderComponent();

    fireEvent.click(screen.getByRole('button', { name: /pause motion/i }));

    expect(
      screen.getByRole('button', { name: /play motion/i }),
    ).toBeInTheDocument();
  });
});
