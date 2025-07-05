import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BentoPageTransition, {
  useBentoTransition,
} from '../BentoPageTransition';
import { EventEmitter } from 'events';

const events = new EventEmitter();
const router = { pathname: '/', push: jest.fn(), events } as any;

jest.mock('next/router', () => ({
  useRouter: () => router,
}));

function TestComponent() {
  const { startTransition } = useBentoTransition();
  return <button onClick={() => startTransition('/projects')}>start</button>;
}

describe('BentoPageTransition', () => {
  beforeEach(() => {
    router.pathname = '/';
    router.push.mockReset();
  });

  it('mounts overlay only during transitions and restores focus', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(
      <BentoPageTransition>
        <main tabIndex={-1}>main</main>
        <TestComponent />
      </BentoPageTransition>,
    );

    const main = screen.getByRole('main');

    const overlay = document.getElementById('bento-overlay') as HTMLElement;
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveStyle('visibility: hidden');

    await user.click(screen.getByText('start'));
    expect(overlay).toHaveStyle('visibility: visible');

    act(() => {
      jest.runOnlyPendingTimers();
    });
    act(() => {
      events.emit('routeChangeComplete');
      jest.runOnlyPendingTimers();
      jest.runOnlyPendingTimers();
    });

    expect(overlay).toHaveStyle('visibility: hidden');

    expect(document.activeElement).toBe(main);
  });
});
