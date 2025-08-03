/**
 * Truncates a string to a specified length and appends an ellipsis if the string exceeds the maximum length.
 * @param text - The input string to truncate.
 * @param maxLength - The maximum length of the output string, including the ellipsis.
 * @returns The truncated string with an ellipsis if applicable, or the original string if within maxLength.
 */
export function truncate(text: string, maxLength: number): string {
	// Return the original text if it's empty or within maxLength
	if (!text || text.length <= maxLength) return text;

	// Slice the text to maxLength and append ellipsis
	return text.slice(0, maxLength) + '...';
}

/**
 * Converts a text string to a URL-friendly format.
 * @param text - The input string to be converted.
 * @returns A URL-friendly string with lowercase letters, numbers, and hyphens.
 */
export function slugify(text?: string): string {
	// Guard clause
	if (!text) return '';

	// Convert to lowercase, replace non-alphanumeric with hyphens, remove leading/trailing hyphens
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-') // Replace special characters and spaces with a single hyphen
		.replace(/(^-|-$)/g, ''); // Remove leading or trailing hyphens
}

/**
 * Converts an ISO 8601 date string to a formatted date string.
 * @param isoString - The ISO 8601 date string (e.g., "2025-08-02T07:37:08Z").
 * @returns A formatted date string in the format "Month DD, YYYY" (e.g., "August 03, 2025").
 */
export function formatDate(isoString?: string): string {
	// Guard clause
	if (!isoString) return '';

	// Parse the ISO string and format it to "Month DD, YYYY" using en-US locale
	return new Date(isoString).toLocaleDateString('en-US', {
		month: 'long', // Full month name (e.g., August)
		day: '2-digit', // Two-digit day (e.g., 03)
		year: 'numeric', // Full year (e.g., 2025)
	});
}

/**
 * Creates a debounced version of a function that delays its execution until after a specified wait time.
 * Only the last call within the wait period is executed.
 * @param func The function to debounce, accepting string arguments.
 * @param wait The number of milliseconds to wait before executing the function.
 * @returns A debounced function that accepts string arguments.
 */
export function debounce<T extends (...args: string[]) => void>(
	func: T,
	wait: number
): (...args: string[]) => void {
	// Store the timeout ID for cancellation
	let timeout: NodeJS.Timeout;

	// Return a new function that handles debouncing
	return (...args: string[]) => {
		// Clear any existing timeout to reset the wait period
		clearTimeout(timeout);
		// Set a new timeout to execute the function after the wait period
		timeout = setTimeout(() => func(...args), wait);
	};
}
