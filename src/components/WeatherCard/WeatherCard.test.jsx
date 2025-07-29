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

    it('renders WebSocket messages', async () => {
        const mockWeather = {
          name: 'London',
          weather: [{ description: 'rain' }],
          main: { temp: 15 },
          wind: { speed: 5 },
        };
    
        vi.stubGlobal('fetch', vi.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(mockWeather) })
        ));
    
        const mockMessages = ['Message 1', 'Message 2'];
    
        render(
          <WebSocketContext.Provider value={{ messages: mockMessages }}>
            <WeatherCard />
          </WebSocketContext.Provider>
        );
    
        await waitFor(() => {
          expect(screen.getByText('London')).toBeInTheDocument();
        });
    
        mockMessages.forEach(msg => {
          expect(screen.getByText(msg)).toBeInTheDocument();
        });
    });

    it('fetches weather for default city when no city prop provided', async () => {
        const mockWeather = {
          name: 'London',
          weather: [{ description: 'cloudy' }],
          main: { temp: 20 },
          wind: { speed: 4 },
        };
    
        vi.stubGlobal('fetch', vi.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(mockWeather) })
        ));
    
        render(
          <WebSocketContext.Provider value={{ messages: [] }}>
            <WeatherCard />
          </WebSocketContext.Provider>
        );
    
        await waitFor(() => {
          expect(screen.getByText('London')).toBeInTheDocument();
        });
    });

    it('renders without crashing when weather data is incomplete', async () => {
        const incompleteWeather = {
          name: 'Mystery City',
          weather: [{}],
          main: {},
          wind: {},
        };
    
        vi.stubGlobal('fetch', vi.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(incompleteWeather) })
        ));
    
        render(
          <WebSocketContext.Provider value={{ messages: [] }}>
            <WeatherCard city="Mystery City" />
          </WebSocketContext.Provider>
        );
    
        await waitFor(() => {
          expect(screen.getByText('Mystery City')).toBeInTheDocument();
        });
    
        // Expect it to render with fallback or empty texts without throwing
        expect(screen.getByText(/Temp:/)).toBeInTheDocument();
        expect(screen.getByText(/Wind:/)).toBeInTheDocument();
    });
      
    it('handles fetch failure gracefully', async () => {
        vi.stubGlobal('fetch', vi.fn(() =>
          Promise.reject(new Error('Fetch failed'))
        ));
    
        // Mock console.error to avoid noisy test output
        const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    
        render(
          <WebSocketContext.Provider value={{ messages: [] }}>
            <WeatherCard city="Nowhere" />
          </WebSocketContext.Provider>
        );
    
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    
        await waitFor(() => {
          expect(consoleSpy).toHaveBeenCalledWith(
            'Failed to fetch weather',
            expect.any(Error)
          );
        });
    
        consoleSpy.mockRestore();
    });
});