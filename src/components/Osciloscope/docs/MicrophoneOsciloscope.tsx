import React, { useState } from "react";

import Osciloscope from "../Osciloscope";
import useAudioContext from "../../Utils/hooks/audioContext";
import useComponentDidMount from "../../Utils/hooks/componentDidMount";
import useComponentWillUnmount from "../../Utils/hooks/componentWillUnmount";

export default function MicrophoneOsciloscope() {
	const [microphone, setMicrophone] = useState<
		MediaStreamAudioSourceNode | MediaElementAudioSourceNode | OscillatorNode
	>();

	const audioContext = useAudioContext();

	useComponentDidMount(() => {
		navigator.mediaDevices
			.getUserMedia({ audio: true, video: false })
			.then(function handleAccessedMicrophone(microphoneStream: MediaStream) {
				setMicrophone(audioContext.createMediaStreamSource(microphoneStream));
			})
			.catch((error) => {
				console.error(error);
			});
	});

	useComponentWillUnmount(() => {
		audioContext.close();
	});

	return <Osciloscope audioSource={microphone} />;
}
