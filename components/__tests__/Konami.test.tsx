import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from '../../pages/about';

beforeEach(() => {
  (window as any).AudioContext = jest.fn().mockImplementation(() => ({
    createOscillator: () => ({
      type: '',
      frequency: { value: 0 },
      connect: jest.fn(),
      start: jest.fn(),
      stop: jest.fn(),
    }),
    destination: null,
    currentTime: 0,
  }));
});

test('konami code reveals pixel art', async () => {
  const user = userEvent.setup();
  render(<About />);

  expect(screen.queryByText('🎉')).toBeNull();

  const keys = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];

  for (const key of keys) {
    if (key.startsWith('Arrow')) {
      await user.keyboard(`{${key}}`);
    } else {
      await user.keyboard(key);
    }
  }

  expect(await screen.findByText('🎉')).toBeInTheDocument();
});
