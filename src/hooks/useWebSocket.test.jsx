import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useWebSocket } from './useWebSocket';
import { WebSocketContext } from '../context/WebsocketContext';

function TestComponent() {
  const ws = useWebSocket();
  return <div data-testid="ws-value">{ws.message}</div>;
}

describe('useWebSocket hook', () => {
  it('should return value from WebSocketContext', () => {
   
    const mockValue = { message: 'hello from websocket' };

    render(
      <WebSocketContext.Provider value={mockValue}>
        <TestComponent />
      </WebSocketContext.Provider>
    );

    expect(screen.getByTestId('ws-value').textContent).toBe('hello from websocket');
  });
});
