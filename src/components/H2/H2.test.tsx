import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import H2 from './H2';

describe('<H2 />', () => {
  test('it should mount', () => {
    render(<H2 />);
    
    const h2 = screen.getByTestId('H2');

    expect(h2).toBeInTheDocument();
  });
});