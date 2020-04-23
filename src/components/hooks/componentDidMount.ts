/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export default function useComponentDidMount(callback: () => any) {
	useEffect(function componentDidMount() {
		callback();
	}, []);
}
