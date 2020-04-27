import React, { useRef, useCallback, useEffect } from "react";
import useComponentDidMount from "../hooks/componentDidMount";

import "./Waveform.css";

import WaveformProps from "./WaveformProps";

function Waveform(props: WaveformProps) {
	const canvasReference = useRef<HTMLCanvasElement>(null);

	/**
	 *
	 */
	const paint = useCallback(() => {
		if (!canvasReference.current) {
			return;
		}

		const canvas = canvasReference.current;
		const context = canvas.getContext("2d");

		if (!context) {
			return;
		}

		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;

		const samples = props.samples! > props.channelData!.length ? props.channelData!.length : props.samples!;

		// Израчунавамо y координату на средини канваса.
		const middleY = canvas.height / 2;

		// Чистимо канвас и припремамо га за ново исцртавање.
		context.clearRect(0, 0, canvas.width, canvas.height);

		// Скалирање канваса.
		context.scale(1, 1);

		// Цртамо хоризонталну линију на средини канваса.
		context.fillRect(0, middleY, canvas.width, 1);

		const blockSize = Math.floor(props.channelData!.length / samples);

		// Низ вредности сваког сампле-а добијеним као просечна вредност вредности блоцк сајза.
		const sampledData = [];

		for (let index = 0; index < samples; index++) {
			const blockStart = blockSize * index;

			let sum = 0;

			for (let blockIndex = 0; blockIndex < blockSize; blockIndex++) {
				sum += Math.abs(props.channelData![blockStart + blockIndex]);
			}

			const average = sum / blockSize;

			sampledData.push(average > 1 ? 1 : average);
		}

		const renderData = scaleData(sampledData);

		// На основу броја примерака које желимо да прикажемо на екрану, одређијемо ширину сваког бара.
		const width = canvas.width / props.samples!;

		let x = 0;

		for (let index = 0; index < props.samples!; index++) {
			context.fillStyle = props.sampleColor!;

			if (x < props.progressX!) {
				context.fillStyle = props.progressColor!;
			}

			const height = renderData[index] * canvas.height;

			context.fillRect(x, middleY - height / 2, width, height);
			x += width;
		}
	}, [props.channelData, props.samples, props.progressX, props.sampleColor, props.progressColor]);

	/**
	 *
	 * @param data
	 */
	function scaleData(data: number[]) {
		const multiplier = Math.pow(Math.max(...data), -1);

		return data.map((n) => n * multiplier);
	}

	useComponentDidMount(() => {
		paint();
	});

	useEffect(
		function componentWillReceiveProps() {
			paint();
		},
		[props.channelData, props.samples, props.progressX, props.sampleColor, props.progressColor, paint]
	);

	return <canvas ref={canvasReference} className="Waveform" />;
}

Waveform.defaultProps = {
	data: [],
	samples: 700,
	progressX: 0,
	sampleColor: "#1f1003",
	progressColor: "#a16409",
};
Waveform.displayName = "Waveform";

export default Waveform;
