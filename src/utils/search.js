
export const searchWidgets = (widgets, query) => {
    const regex = new RegExp(query, 'i');
    return widgets.filter(widget => regex.test(widget.title));
}