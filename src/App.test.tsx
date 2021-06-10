import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should render the name of the app', () => {
  render(<App />)
  expect(screen.getByText('Yet Another Quiz App')).toBeInTheDocument()
});


  
it('should give credit for the background image', () => {
  render(<App />)
  expect(screen.getByText(/Photo by /)).toBeInTheDocument()
})
