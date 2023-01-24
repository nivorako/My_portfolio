import { render, screen, fireEvent } from '@testing-library/react';
import Home from './pages/Home.js';
//import Navbar from './components/Navbar.js';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello World !!/i);
  expect(linkElement).toBeInTheDocument();
});
