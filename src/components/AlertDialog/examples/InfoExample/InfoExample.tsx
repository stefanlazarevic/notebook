import React, { useState } from "react";

import "./InfoExample.css";

import AlertDialog from "../../AlertDialog";

export default function InfoExample() {
	const [visible, setVisible] = useState(true);

	if (!visible) {
		return <div />;
	}

	return (
		<AlertDialog className="InfoExample" aria-describedby="alert-dialog-content">
			<div id="alert-dialog-content" className="Row">
				<strong>
					<q>LEGO ARCHITECTURE LONDON</q>
				</strong>{" "}
				је додат у{" "}
				<a href="#test" title="Погледај корпу">
					корпу
				</a>
				.
			</div>
			<div className="Row">
				<button>Иди на касу</button>
				<button onClick={() => setVisible(false)}>Настави куповину</button>
			</div>
		</AlertDialog>
	);
}
