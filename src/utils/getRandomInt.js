/**
 * Generates a random integer between two values, inclusive.
 * 
 * - Uses `Math.random()` to generate a random decimal between 0 and 1.
 * - Scales it to the specified range (min to max).
 * - Applies `Math.floor()` to ensure the result is an integer.
 * 
 * @param {number} min - The minimum integer value (inclusive).
 * @param {number} max - The maximum integer value (inclusive).
 * @returns {number} - A random integer between min and max.
 */
export const getRandomInt = (min, max) => 
    Math.floor(Math.random() * (max - min + 1)) + min;
  