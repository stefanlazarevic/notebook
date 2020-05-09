import React, { useState } from "react";

import Toggle from "../../../Toggle";

export default function Example() {
	const [checked, setChecked] = useState(false);

	function onChange(event: React.SyntheticEvent, currentCheckedState: boolean) {
		setChecked(!currentCheckedState);
	}

	return <Toggle checked={checked} onChange={onChange} name="example" />;
}
