import React, { useState } from "react";

import Checkbox from "../../index";

export default function BasicExample(props: any) {
	const [checked, setChecked] = useState(false);

	function onChange(event: React.SyntheticEvent, currentState: boolean | "mixed") {
		setChecked(!checked);
	}

	return <Checkbox checked={checked} onChange={onChange} />;
}
