import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

it('renders navigation without crashing', () => {
  render(<Layout><div>content</div></Layout>);
  expect(screen.getByText('Home')).toBeInTheDocument();
});
