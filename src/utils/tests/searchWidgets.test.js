import { describe, it, expect } from 'vitest';
import { searchWidgets } from '../search';
describe('searchWidgets', () => {
  const widgets = [
    { title: 'Weather' },
    { title: 'Calendar' },
    { title: 'News' },
    { title: 'Stock Market' },
  ];

  it('should return matching widgets for a query', () => {
    const result = searchWidgets(widgets, 'news');
    expect(result).toEqual([{ title: 'News' }]);
  });

});