import React, { useState } from "react";

import "./HintExample.css";

import { HelpButton } from "../../../../Button";
import Tooltip from "../../..";

export default function HintExample() {
	const [showHint, setShowHint] = useState(false);

	function onClick() {
		setShowHint(!showHint);
	}

	return (
		<HelpButton id="help-button" size={20} onClick={onClick} className="HintExample" aria-controls="tooltip-help">
			{showHint && (
				<Tooltip id="tooltip-help" position="right" aria-describedby="help-button">
					You must be over 18.
				</Tooltip>
			)}
		</HelpButton>
	);
}
