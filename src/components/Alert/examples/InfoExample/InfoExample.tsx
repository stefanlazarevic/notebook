import React from "react";

import "./InfoExample.css";

import Alert from "../../Alert";

export default function InfoExample(props: any) {
	return (
		<Alert className="InfoExample">
			Остварите 5% попуста уз купон код <strong>TXGYPW</strong>!
		</Alert>
	);
}
