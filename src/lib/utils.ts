/**
 * Format a date string into a human-readable format.
 *
 * @param date - The date string to format.
 * @param dateStyle - The style of the formatted date string. Defaults to 'medium'.
 * @param timeStyle - The style of the formatted time string. Defaults to undefined.
 * @param locales - The locale for formatting. Defaults to 'en'.
 * @returns The formatted date string.
 */
type DateStyle = Intl.DateTimeFormatOptions['dateStyle']
type TimeStyle = Intl.DateTimeFormatOptions['timeStyle']

export function formatDate(
	date: string | null,
	dateStyle: DateStyle = 'medium',
	timeStyle?: TimeStyle,
	locales = 'en'
): string {
	if (!date) {
		return 'Invalid Date'
	}
	const options: Intl.DateTimeFormatOptions = { dateStyle }
	if (timeStyle) {
		options.timeStyle = timeStyle
	}
	return new Intl.DateTimeFormat(locales, options).format(new Date(date))
}
