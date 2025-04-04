export function slugify(text: any): string {
    if (typeof text !== 'string') {
        if (typeof text === 'number' || typeof text === 'boolean') {
            text = String(text); // Convert numbers and booleans to strings
        } else {
            return ''; // Return an empty string for other non-string types
        }
    }

    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .replace(/-{2,}/g, '-');
}

export function formatDate(dateToFormat: string) {
    return new Date(dateToFormat).toLocaleDateString("en-US", { timeZone: "UTC" })
}