/**
 * Utility function to format currency
 */
export function formatCurrency(amount: number, currency = 'EUR', locale = 'en-US'): string {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency
	}).format(amount);
}

/**
 * Utility function to format dates
 */
export function formatDate(date: Date | string, locale = 'en-US'): string {
	const dateObj = typeof date === 'string' ? new Date(date) : date;
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(dateObj);
}

/**
 * Utility function to truncate text
 */
export function truncateText(text: string, maxLength: number): string {
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength) + '...';
}

/**
 * Utility function to generate a unique ID
 */
export function generateId(): string {
	return Math.random().toString(36).substr(2, 9);
}

/**
 * Utility function to debounce function calls
 */
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number
): (...args: Parameters<T>) => void {
	let timeout: NodeJS.Timeout;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
}
