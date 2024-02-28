import { render, screen } from '@testing-library/react';
import App from './App';
import { ApplicationContextProvider } from '@adserve/application-context';

test('renders learn react link', () => {
  render(<ApplicationContextProvider><App /></ApplicationContextProvider>);
  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});
