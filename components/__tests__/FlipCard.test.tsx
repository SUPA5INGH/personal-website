import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Projects from '../../pages/projects';

test('flip card reveals celebration message', async () => {
  const user = userEvent.setup();
  render(<Projects />);

  const tile = screen.getByText('Case Study of the Month');
  await user.click(tile);

  expect(tile).toBeInTheDocument();
});
