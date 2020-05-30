import React, { useRef, useEffect, useCallback } from "react";

import "./Osciloscope.css";

import useComponentDidMount from "../Utils/hooks/componentDidMount";
import OsciloscopeProps from "./OsciloscopeProps";
import useComponentWillUnmount from "../Utils/hooks/componentWillUnmount";

function Osciloscope(props: OsciloscopeProps) {
	const canvasReference = useRef<HTMLCanvasElement>(null);

	const analyser = useRef<AnalyserNode>();

	const audioSourceData = useRef<Uint8Array>(new Uint8Array(0));

	const drawRequest = useRef<number>(0);

	const draw = useCallback(() => {
		if (!canvasReference.current) {
			return;
		}

		const canvas = canvasReference.current;
		const context = canvas.getContext("2d");

		if (!context) {
			return;
		}

		if (analyser.current) {
			analyser.current.getByteTimeDomainData(audioSourceData.current);
		}

		context.scale(1, 1);
		context.clearRect(0, 0, canvas.width, canvas.height);

		context.lineWidth = 2;
		context.strokeStyle = "rgb(0, 0, 0)";

		context.moveTo(0, canvas.height / 2);

		context.beginPath();

		const audioData = analyser.current ? audioSourceData.current : props.audioData;

		const width = (canvas.width * 1.0) / audioData!.length;

		let x = 0;

		if (audioData!.length === 0) {
			context.lineTo(x, canvas.height / 2);
		}

		for (let index = 0; index < audioData!.length; index++) {
			const point = audioData![index] / 128.0;

			const y = (point * canvas.height) / 2;

			context.lineTo(x, y);

			x += width;
		}

		context.lineTo(canvas.width, canvas.height / 2);
		context.stroke();

		if (analyser.current) {
			drawRequest.current = requestAnimationFrame(draw);
		}
	}, [props.audioData]);

	useComponentDidMount(() => {
		if (canvasReference.current) {
			const canvas = canvasReference.current;
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		}
	});

	useComponentWillUnmount(() => {
		if (drawRequest.current) {
			cancelAnimationFrame(drawRequest.current);
		}

		if (analyser.current) {
			analyser.current.disconnect();
		}
	});

	useEffect(() => {
		if (props.audioSource) {
			analyser.current = props.audioSource.context.createAnalyser();
			props.audioSource.connect(analyser.current);
			analyser.current.fftSize = 2048;
			audioSourceData.current = new Uint8Array(analyser.current.frequencyBinCount);
			drawRequest.current = requestAnimationFrame(draw);
		} else {
			draw();
		}
	}, [props.audioSource, draw]);

	return <canvas ref={canvasReference} className="Osciloscope" />;
}

Osciloscope.defaultProps = {
	audioData: [],
};
Osciloscope.displayName = "Osciloscope";

export default Osciloscope;
