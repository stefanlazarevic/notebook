import React, { useState, useRef } from "react";

import "./PictureSlider.css";
import useComponentDidMount from "../hooks/componentDidMount";
import { PictureSliderProps } from "./PictureSliderProps";

function PictureSlider(props: PictureSliderProps) {
	const [activeMouseMovement, setActiveMouseMovement] = useState(false);

	const containerReference = useRef<HTMLDivElement>(null);
	const imageReference = useRef<HTMLImageElement>(null);

	function updatePositions(event: React.MouseEvent) {
		if (containerReference.current && imageReference.current) {
			const container = containerReference.current;
			const image = imageReference.current;

			const x = event.nativeEvent.offsetX - container.offsetLeft + container.clientLeft;

			image.style.clip = `rect(0px, ${image.width}px, ${image.height}px, ${x}px)`;
		}
	}

	function setPosition(x: number) {
		if (imageReference.current) {
			const image = imageReference.current;
			imageReference.current.style.clip = `rect(0px, ${image.width}px, ${image.height}px, ${x}px)`;
		}
	}

	function onClick(event: React.MouseEvent) {
		updatePositions(event);
		setActiveMouseMovement(!activeMouseMovement);
	}

	function onMouseMove(event: React.MouseEvent) {
		updatePositions(event);
	}

	function onKeyDown(event: React.KeyboardEvent) {
		const { keyCode, ctrlKey } = event;
		const image = imageReference.current!;

		if (keyCode === 36) {
			event.preventDefault();
			setPosition(0);
		}

		if (keyCode === 35) {
			event.preventDefault();
			setPosition(image.width);
		}

		if (keyCode === 39) {
			event.preventDefault();
			const match = image.style.clip.match(/(\d+)px\)$/);
			if (match) {
				setPosition(Number(match[1]) + (ctrlKey ? 30 : 10));
			}
		}

		if (keyCode === 37) {
			event.preventDefault();
			const match = image.style.clip.match(/(\d+)px\)$/);
			if (match) {
				const x = Number(match[1]) - (ctrlKey ? 30 : 10);
				setPosition(x < 0 ? 0 : x);
			}
		}
	}

	useComponentDidMount(() => {
		if (imageReference.current) {
			const image = imageReference.current;
			setPosition(image.width / 2);
		}
	});

	return (
		<div
			ref={containerReference}
			tabIndex={0}
			className="PictureSlider"
			onClick={onClick}
			onMouseMove={activeMouseMovement ? onMouseMove : undefined}
			onKeyDown={!activeMouseMovement ? onKeyDown : undefined}
		>
			<img src={props.images[0]} alt={props.alts[0]} />
			<img ref={imageReference} src={props.images[1]} alt={props.alts[1]} />
		</div>
	);
}

PictureSlider.defaultProps = {};
PictureSlider.displayName = "PictureSlider";

export default PictureSlider;
