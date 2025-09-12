import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; 


test('renders the Home component with the correct text and image', () => {
  render(<App />);
  
  // Test 1: Comprueba que el título principal esté presente
  const titleElement = screen.getByText(/Hello World Gio!/i);
  expect(titleElement).toBeInTheDocument();
  
  // Test 2: Comprueba que el subtítulo esté presente
  const subtitleElement = screen.getByText(/¡Bienvenido a mi aplicación React!/i);
  expect(subtitleElement).toBeInTheDocument();

  // Test 3: Comprueba que la imagen con el alt text correcto esté presente
  const gifElement = screen.getByAltText(/Hello Animation/i);
  expect(gifElement).toBeInTheDocument();
  expect(gifElement).toHaveAttribute('src', 'gif.gif');
});