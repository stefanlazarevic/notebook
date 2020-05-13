import React, { useState, useRef, useCallback, useEffect } from "react";
import ProgressBar from "../../ProgressBar";
import useComponentDidMount from "../../../Utils/hooks/componentDidMount";
import useComponentWillUnmount from "../../../Utils/hooks/componentWillUnmount";

export default function BasicExample() {
	const [progress, setProgress] = useState(0);
	const interval = useRef<NodeJS.Timeout>();

	const updateProgress = useCallback(() => {
		console.log("Progress is called");
		if (progress >= 100) {
			if (interval.current) {
				clearInterval(interval.current);
			}
		} else {
			setProgress(progress + 1);
		}
	}, [progress]);

	useComponentDidMount(() => {
		interval.current = setInterval(updateProgress, 500);
	});

	useEffect(() => {
		if (interval.current) {
			clearInterval(interval.current);
		}

		interval.current = setInterval(updateProgress, 500);
	}, [updateProgress]);

	useComponentWillUnmount(() => {
		console.log("Component is unmounting");
		if (interval.current) {
			clearInterval(interval.current);
		}
	});

	return <ProgressBar value={progress} />;
}
