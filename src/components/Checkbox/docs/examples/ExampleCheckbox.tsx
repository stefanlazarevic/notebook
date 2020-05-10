import React, { useState } from "react";

import Checkbox from "../../Checkbox";

export default function ExampleCheckbox(props: any) {
	const [checked, setChecked] = useState(false);

	function onChange(event: React.SyntheticEvent, currentState: boolean) {
		setChecked(!checked);
	}

	return <Checkbox checked={checked} onChange={onChange} />;
}
