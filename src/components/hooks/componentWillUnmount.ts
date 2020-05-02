/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export default function useComponentWillUnmount(callback: () => void) {
	useEffect(() => {
		return function componentWillUnmount() {
			callback();
		};
	}, []);
}
