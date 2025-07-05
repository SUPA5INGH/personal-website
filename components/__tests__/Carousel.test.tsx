import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Projects from '../../pages/projects';

test('carousel dot click changes slide', async () => {
  const user = userEvent.setup();
  const { container } = render(<Projects />);

  expect(screen.getByAltText('Open Source Dashboard')).toBeInTheDocument();

  const dotsContainer = container.querySelector('.cursor-grab') as HTMLElement;
  const dots = within(dotsContainer).getAllByRole('button');
  await user.click(dots[1]);

  expect(screen.getByAltText('Telehealth Toolkit')).toBeInTheDocument();
});
