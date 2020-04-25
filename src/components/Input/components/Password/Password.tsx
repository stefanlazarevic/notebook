import React, { useState } from "react";

import "./Password.css";

import Input from "../../Input";

function PasswordInput(props: any) {
	const [hidden, setHidden] = useState(true);

	function onClick(event: React.MouseEvent) {
		setHidden(!hidden);
	}

	return (
		<div className="PasswordInput">
			<Input {...props} type={hidden ? "password" : "text"} />
			<button onClick={onClick}>{hidden ? "Show" : "Hide"}</button>
		</div>
	);
}

PasswordInput.defaultProps = {};
PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
