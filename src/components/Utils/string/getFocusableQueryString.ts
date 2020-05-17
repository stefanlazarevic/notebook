export default function getFocusableQueryString(): string {
	return `
		input:not([disabled]):not([tabIndex="-1"]),
		select:not([disabled]):not([tabIndex="-1"]),
		textarea:not([disabled]):not([tabIndex="-1"]),
		button:not([disabled]):not([tabIndex="-1"]),
		object:not([disabled]):not([tabIndex="-1"]),
		a[href]:not([tabIndex="-1"]),
		area[href]:not([tabIndex="-1"]),
		[tabIndex]:not([tabIndex="-1"])
	`.trim();
}
