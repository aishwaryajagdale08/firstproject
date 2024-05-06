import { render, screen } from '@testing-library/react';
import App from './App';
<h1>hello aish</h1>

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react angular/i);
  expect(linkElement).toBeInTheDocument();
});

