import React, { useState } from "react";

import "./BasicExample.css";

import PasswordInput from "../../PasswordInput";

export default function BasicExample() {
	const [password, setPassword] = useState("");

	function onChange(event: React.SyntheticEvent<HTMLInputElement>, value: string) {
		setPassword(value);
	}

	return <PasswordInput value={password} onChange={onChange} />;
}
