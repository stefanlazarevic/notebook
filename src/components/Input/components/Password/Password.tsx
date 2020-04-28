import React, { useState } from "react";

import "./Password.css";

import Input from "../../Input";
import { EyeButton } from "../../../Button";

function PasswordInput(props: any) {
	const [hidden, setHidden] = useState(true);

	function onClick(event: React.MouseEvent) {
		setHidden(!hidden);
	}

	return (
		<div className="PasswordInput">
			<Input {...props} type={hidden ? "password" : "text"} />
			<EyeButton onClick={onClick} size={16} data-active={hidden} />
		</div>
	);
}

PasswordInput.defaultProps = {};
PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
