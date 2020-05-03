import React, { useState, useRef, useEffect } from "react";

import "./PictureSlider.css";
import { PictureSliderProps } from "./PictureSliderProps";

function PictureSlider(props: PictureSliderProps) {
	const [activeMouseMovement, setActiveMouseMovement] = useState(false);

	const containerReference = useRef<HTMLDivElement>(null);
	const imageReference = useRef<HTMLImageElement>(null);
	const dividerReference = useRef<HTMLDivElement>(null);

	/**
	 *
	 * @param event
	 */
	function updatePositions(event: React.MouseEvent) {
		if (containerReference.current && imageReference.current && dividerReference.current) {
			const container = containerReference.current;
			const image = imageReference.current;
			const divider = dividerReference.current;

			const coordinateX = event.nativeEvent.offsetX - container.offsetLeft + container.clientLeft;
			const x = convertCoordinatetoPercentage(coordinateX);

			image.style.clipPath = `polygon(${x}% 0, 100% 0, 100% 100%, ${x}% 100%)`;
			divider.style.left = `${x}%`;
		}
	}

	/**
	 *
	 */
	function setPosition(offsetLeft: number) {
		if (imageReference.current && dividerReference.current) {
			const image = imageReference.current;
			const divider = dividerReference.current;
			image.style.clipPath = `polygon(${offsetLeft}% 0, 100% 0, 100% 100%, ${offsetLeft}% 100%)`;
			divider.style.left = `${offsetLeft}%`;
		}
	}

	/**
	 *
	 * @param coordinateX
	 */
	function convertCoordinatetoPercentage(coordinateX: number) {
		if (containerReference.current) {
			const container = containerReference.current;

			return (coordinateX / container.scrollWidth) * 100;
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
		const { keyCode } = event;
		const image = imageReference.current!;

		if (keyCode === 36) {
			event.preventDefault();
			setPosition(0);
		}

		if (keyCode === 35) {
			event.preventDefault();
			setPosition(100);
		}

		if (keyCode === 39) {
			if (typeof props.onLeftArrow === "function") {
				const match = image.style.clipPath.match(/\((\d*\.?\d+)%/);
				if (match) {
					const offsetLeft = Number(match[1]);
					props.onLeftArrow(event, offsetLeft);
				}
			}
		}

		if (keyCode === 37) {
			if (typeof props.onRightArrow === "function") {
				const match = image.style.clipPath.match(/\((\d*\.?\d+)%/);
				if (match) {
					const offsetLeft = Number(match[1]);
					props.onRightArrow(event, offsetLeft);
				}
			}
		}
	}

	useEffect(() => {
		if (typeof props.offsetLeft === "number") {
			setPosition(props.offsetLeft);
		}
	}, [props.offsetLeft]);

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
			<div ref={dividerReference} />
		</div>
	);
}

PictureSlider.defaultProps = {
	offsetLeft: 50,
};
PictureSlider.displayName = "PictureSlider";

export default PictureSlider;
