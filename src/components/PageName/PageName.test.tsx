import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageName from './PageName';

describe('<PageName />', () => {
  test('it should mount', () => {
    render(<PageName />);
    
    const pageName = screen.getByTestId('PageName');

    expect(pageName).toBeInTheDocument();
  });
});