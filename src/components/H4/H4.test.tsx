import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import H4 from './H4';

describe('<H4 />', () => {
  test('it should mount', () => {
    render(<H4 />);
    
    const h4 = screen.getByTestId('H4');

    expect(h4).toBeInTheDocument();
  });
});