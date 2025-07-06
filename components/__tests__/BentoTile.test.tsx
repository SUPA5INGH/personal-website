import { render, screen } from '@testing-library/react';
import BentoTile from '../BentoTile';

test('BentoTile renders children and animation classes', () => {
  render(
    <BentoTile className="extra" animationClass="animate-test">
      <span>content</span>
    </BentoTile>
  );
  const inner = screen.getByText('content').parentElement as HTMLElement;
  const outer = inner.parentElement as HTMLElement;
  expect(inner).toHaveClass('animate-test');
  expect(outer).toHaveClass('extra');
});
