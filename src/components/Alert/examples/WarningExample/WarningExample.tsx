import React from "react";

import "./WarningExample.css";

import Alert from "../../Alert";

export default function WarningExample() {
	return (
		<Alert className="WarningExample">
			Дневно ограничење ускоро истиче. Уколико вам је потребно више времена размотрите надоградњу на премиум верзију.
		</Alert>
	);
}
