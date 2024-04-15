import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import H1 from './H1';

describe('<H1 />', () => {
  test('it should mount', () => {
    render(<H1 />);
    
    const h1 = screen.getByTestId('H1');

    expect(h1).toBeInTheDocument();
  });
});