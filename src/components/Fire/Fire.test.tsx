import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Fire from './Fire';

describe('<Fire />', () => {
  test('it should mount', () => {
    render(<Fire />);
    
    const fire = screen.getByTestId('Fire');

    expect(fire).toBeInTheDocument();
  });
});