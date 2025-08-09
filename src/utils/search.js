/**
 * Filters an array of widgets based on a search query.
 * 
 * - Creates a case-insensitive regular expression from the query.
 * - Checks if each widget's `title` matches the query.
 * - Returns only the widgets whose titles match.
 * 
 * @param {Array} widgets - Array of widget objects, each having a `title` property.
 * @param {string} query - The search term to match against widget titles.
 * @returns {Array} - A filtered array of matching widgets.
 */
export const searchWidgets = (widgets, query) => {
    const regex = new RegExp(query, 'i');
    return widgets.filter(widget => regex.test(widget.title));
}