import React, { useState } from "react";
import PictureSlider from "../../PictureSlider";
import { StringTupple } from "../../../types/Tupple";

export default function MovieSceneSlider() {
	const [offsetLeft, setOffsetLeft] = useState(50);

	const images = [
		"https://github.com/sneas/img-comparison-slider/blob/master/src/demo/images/before.jpg?raw=true",
		"https://github.com/sneas/img-comparison-slider/blob/master/src/demo/images/after.jpg?raw=true",
	] as StringTupple;

	function updateOffsetLeft(event: React.KeyboardEvent, currentOffsetLeft: number) {
		const offsetLeft = currentOffsetLeft - 2;

		setOffsetLeft(offsetLeft < 0 ? 0 : offsetLeft);
	}

	function updateOffsetRight(event: React.KeyboardEvent, currentOffsetLeft: number) {
		const offsetLeft = currentOffsetLeft + 2;

		setOffsetLeft(offsetLeft > 100 ? 100 : offsetLeft);
	}

	return (
		<PictureSlider
			images={images}
			alts={["", ""]}
			offsetLeft={offsetLeft}
			onLeftArrow={updateOffsetLeft}
			onRightArrow={updateOffsetRight}
		/>
	);
}
