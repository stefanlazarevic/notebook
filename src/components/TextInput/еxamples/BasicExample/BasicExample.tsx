import React, { useState } from "react";

import "./BasicExample.css";

import TextInput from "../../index";

export default function BasicExample() {
	const [value, setValue] = useState("");

	function onChange(event: React.SyntheticEvent<HTMLInputElement>, value: string) {
		setValue(value);
	}

	return <TextInput value={value} className="BasicExample" onChange={onChange} />;
}
