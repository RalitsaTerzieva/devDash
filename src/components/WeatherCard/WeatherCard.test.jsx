import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { WeatherCard } from './WeatherCard';
import '@testing-library/jest-dom';


// Mock global fetch
beforeEach(() => {
  vi.restoreAllMocks(); // Reset fetch mocks before each test
});

describe('GithubCard', () => {});