import { render, screen } from '@testing-library/react';
import BentoTile from '../BentoTile';

test('BentoTile renders children and animation classes', () => {
  render(
    <BentoTile className="extra" animationClass="animate-test">
      <span>content</span>
    </BentoTile>
  );
  const tile = screen.getByText('content').parentElement as HTMLElement;
  expect(tile).toHaveClass('animate-test');
  expect(tile).toHaveClass('extra');
});
