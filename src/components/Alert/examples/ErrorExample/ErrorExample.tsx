import React from "react";

import "./ErrorExample.css";

import Alert from "../../Alert";

export default function ErrorExample() {
	return (
		<Alert className="ErrorExample">
			Време за потврду идентитета је истекло. Освежите страницу како бисте наставили.
		</Alert>
	);
}
