import React, { useState } from "react";

import "./ThreeStateCheckbox.css";

import Checkbox from "../../index";

export default function ThreeStateCheckbox() {
	const [checked, setChecked] = useState([false, false, false, false]);
	const checkedAll = getCheckAllValue(checked);

	function getCheckAllValue(values: boolean[]): boolean | "mixed" {
		let everyChecked = true;
		let everyUnchecked = true;

		for (let index = 0; index < values.length; index++) {
			if (!values[index]) {
				everyChecked = false;
			}

			if (values[index]) {
				everyUnchecked = false;
			}
		}

		if (everyChecked) {
			return true;
		}

		if (everyUnchecked) {
			return false;
		}

		return "mixed";
	}

	function onChange(event: React.SyntheticEvent, currentChecked: boolean | "mixed", index?: number) {
		if (typeof index === "number") {
			const newState = checked.slice();
			newState[index] = !newState[index];

			setChecked(newState);
		}
	}

	function onChangeAll() {
		if (checkedAll === true) {
			setChecked(Array(checked.length).fill(false));
		} else {
			setChecked(Array(checked.length).fill(true));
		}
	}

	return (
		<div className="ThreeStateCheckbox">
			<div className="Row">
				<Checkbox checked={checkedAll} onChange={onChangeAll} aria-labelledby="check-all" />
				<label id="check-all" onClick={onChangeAll}>
					Сви прилози
				</label>
			</div>
			<div className="Row">
				<Checkbox checked={checked[0]} onChange={onChange} index={0} aria-labelledby="option-one" />
				<label>Кечап</label>
			</div>
			<div className="Row">
				<Checkbox checked={checked[1]} onChange={onChange} index={1} aria-labelledby="option-two" />
				<label>Мајонез</label>
			</div>
			<div className="Row">
				<Checkbox checked={checked[2]} onChange={onChange} index={2} aria-labelledby="option-three" />
				<label>Сенф</label>
			</div>
			<div className="Row">
				<Checkbox checked={checked[3]} onChange={onChange} index={3} aria-labelledby="option-four" />
				<label>Лук</label>
			</div>
		</div>
	);
}
