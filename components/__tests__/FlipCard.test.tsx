import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../../pages/index';

test('flip card reveals celebration message', async () => {
  const user = userEvent.setup();
  render(<Home />);

  const tile = screen.getByText('Biosecurity Byte');
  await user.click(tile);

  expect(screen.getByText('🎉 Biosecurity rocks!')).toBeInTheDocument();
});
