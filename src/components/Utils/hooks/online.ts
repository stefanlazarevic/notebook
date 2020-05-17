import { useState } from "react";
import useComponentDidMount from "./componentDidMount";
import useComponentWillUnmount from "./componentWillUnmount";

/**
 *
 */
export default function useOnline() {
	const [online, setOnline] = useState(window.navigator.onLine);

	function changeOnlineState(event: Event) {
		setOnline(event.type === "online");
	}

	useComponentDidMount(() => {
		if (window) {
			window.addEventListener("online", changeOnlineState);
			window.addEventListener("offline", changeOnlineState);
		}
	});

	useComponentWillUnmount(() => {
		if (window) {
			window.removeEventListener("online", changeOnlineState);
			window.removeEventListener("offline", changeOnlineState);
		}
	});

	return online;
}
