import React, { useState } from "react";

import Switch from "../../Switch";

export default function Example() {
	const [checked, setChecked] = useState(false);

	function onChange(event: React.SyntheticEvent, currentCheckedState: boolean) {
		setChecked(!currentCheckedState);
	}

	return <Switch checked={checked} onChange={onChange} />;
}
