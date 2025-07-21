import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { GithubCard } from './GithubCard';
import '@testing-library/jest-dom';


// Mock global fetch
beforeEach(() => {
  vi.restoreAllMocks(); // Reset fetch mocks before each test
});

describe('GithubCard', () => {
  it('should display loading initially', () => {
    render(<GithubCard username="octocat" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

 

});
