/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export default function useComponentDidMount(callback: () => void) {
	useEffect(function componentDidMount() {
		callback();
	}, []);
}
