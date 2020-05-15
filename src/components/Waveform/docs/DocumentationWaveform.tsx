import React, { useState } from "react";

import Waveform from "../Waveform";
import useComponentDidMount from "../../Utils/hooks/componentDidMount";

export default function DocumentationWaveform(props: any) {
	const [data, setData] = useState(new Float32Array());

	useComponentDidMount(() => {
		const audioContext = new AudioContext();

		fetch("/mp3/sample.mp3")
			.then((response) => response.arrayBuffer())
			.then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
			.then((audioBuffer: AudioBuffer) => {
				const buffer = audioBuffer.getChannelData(0);

				setData(buffer);
			});
	});

	return <Waveform channelData={data} {...props} />;
}
