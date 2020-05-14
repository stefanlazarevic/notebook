/**
 *
 */
export default function useClassNames(...classNames: (string | undefined)[]): string {
	return classNames.join(" ").trim();
}
