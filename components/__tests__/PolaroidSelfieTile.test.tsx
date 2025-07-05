import { render, screen } from '@testing-library/react';
import PolaroidSelfieTile from '../PolaroidSelfieTile';

it('renders the Polaroid selfie with caption', () => {
  render(<PolaroidSelfieTile />);
  const tile = screen.getByRole('img', { name: /photograph of rohan/i });
  expect(tile).toBeInTheDocument();
  expect(screen.getByText(/Uzma • Med→Tech/)).toHaveAttribute(
    'aria-live',
    'polite',
  );
});
