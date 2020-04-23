/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export default function useComponentWillUnmount(callback: () => any) {
	useEffect(() => {
		return function componentWillUnmount() {
			callback();
		};
	}, []);
}
