import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import WeatherCard from './WeatherCard';
import '@testing-library/jest-dom';
import { WebSocketContext } from '../../context/WebsocketContext';


// Mock global fetch
beforeEach(() => {
  vi.restoreAllMocks(); // Reset fetch mocks before each test
});

describe('GithubCard', () => {
    it('displays weather data after fetch', async () => {
        const mockWeather = {
          name: 'Paris',
          weather: [{ description: 'clear sky' }],
          main: { temp: 25 },
          wind: { speed: 3 },
        };
      
        vi.stubGlobal('fetch', vi.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(mockWeather) })
        ));
      
        const mockWebSocket = { messages: [] };
      
        render(
          <WebSocketContext.Provider value={mockWebSocket}>
            <WeatherCard city="Paris" />
          </WebSocketContext.Provider>
        );
      
        await waitFor(() => {
          expect(screen.getByText('Paris')).toBeInTheDocument();
        });
      
        expect(screen.getByText(/clear sky/i)).toBeInTheDocument();
        expect(screen.getByText(/Temp: 25°C/)).toBeInTheDocument();
        expect(screen.getByText(/Wind: 3 m\/s/)).toBeInTheDocument();
      });
      
});