import { render, screen } from '@testing-library/react';
import App from './App';

test('renders github workflow badge', () => {
  render(<App />);
  const badge = screen.getByAltText('timr-ci');
  expect(badge).toBeInTheDocument();
});
