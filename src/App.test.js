import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders github workflow badge', async () => {
  render(<App />);

  await waitFor(() => {
    const loadingScreen = screen.queryByText('Wait a moment while we load your app.');
    expect(loadingScreen).not.toBeInTheDocument();
  }, { timeout: 2000 });

  const badge = screen.getByAltText('Timr Continuous Integration Badge');
  expect(badge).toBeInTheDocument();
});