import { render, screen } from '@testing-library/react';

import { useState, useEffect } from 'react';
import { vi, describe, it, beforeEach, expect } from 'vitest';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : JSON.parse(initialValue);
    } catch {
      return JSON.parse(initialValue);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// Helper test component to use the hook and display value
function TestComponent({ storageKey, initialValue }) {
  const [value, setValue] = useLocalStorage(storageKey, initialValue);

  return (
    <div>
      <span data-testid="value">{value}</span>
      <button onClick={() => setValue('newValue')}>Set New Value</button>
    </div>
  );
}

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should initialize with initial value', () => {
    render(<TestComponent storageKey="key" initialValue={JSON.stringify('initial')} />);
    expect(screen.getByTestId('value').textContent).toBe('initial');
  });

  it('should read existing localStorage value', () => {
    localStorage.setItem('key', JSON.stringify('stored'));
    render(<TestComponent storageKey="key" initialValue={JSON.stringify('initial')} />);
    expect(screen.getByTestId('value').textContent).toBe('stored');
  });
 
});
