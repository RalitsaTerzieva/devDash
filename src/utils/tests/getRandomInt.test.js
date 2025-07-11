import { describe, it, expect } from 'vitest';
import { getRandomInt } from '../getRandomInt';

describe('getRandomInt', () => {
  it('returns an integer between min and max (inclusive)', () => {
    const min = 1;
    const max = 5;
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  
});
