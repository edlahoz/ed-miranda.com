import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import P from './P';

describe('<P />', () => {
  test('it should mount', () => {
    render(<P />);
    
    const p = screen.getByTestId('P');

    expect(p).toBeInTheDocument();
  });
});