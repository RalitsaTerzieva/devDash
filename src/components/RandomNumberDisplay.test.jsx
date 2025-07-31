import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import RandomNumberDisplay from './RandomNumberDisplay';
import '@testing-library/jest-dom';

// Mock the getRandomInt function
vi.mock('../utils/getRandomInt', () => ({
  getRandomInt: vi.fn(),
}));

import { getRandomInt } from '../utils/getRandomInt';

describe('RandomNumberDisplay', () => {
  it('displays the mocked random number', () => {
    getRandomInt.mockReturnValue(42);

    render(<RandomNumberDisplay />);

    expect(screen.getByText(/Your Lucky Number:/)).toHaveTextContent('Your Lucky Number: 42');
  });
});
