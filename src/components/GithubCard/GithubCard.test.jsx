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

  it('should display user info after fetch', async () => {
    const mockData = {
      login: 'octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
      name: 'The Octocat',
      public_repos: 10,
      followers: 100,
      html_url: 'https://github.com/octocat',
    };

    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    ));

    render(<GithubCard username="octocat" />);

    await waitFor(() => {
        expect(screen.getByText(/The Octocat/)).toBeInTheDocument();
      });
      
    expect(screen.getByText((_, node) =>
        node?.textContent === 'Repos: 10')).toBeInTheDocument();
      
    expect(screen.getByText((_, node) =>
        node?.textContent === 'Followers: 100')).toBeInTheDocument();
      
    expect(screen.getByRole('link', { name: /view profile/i })).toHaveAttribute('href', mockData.html_url);
      
      
  });


});
