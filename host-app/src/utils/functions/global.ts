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
