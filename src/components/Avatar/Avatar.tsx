import React, { useState, useCallback } from "react";

import "./Avatar.css";

import useClassNames from "../Utils/hooks/classNames";

function Avatar(props: any) {
	const className = useClassNames("Avatar", props.className);

	const [error, setError] = useState<boolean>(true);

	const onImageLoad = useCallback(function AvatarImageLoadCallback() {
		setError(false);
	}, []);

	return (
		<div
			id={props.id}
			data-testid={props.testid}
			tabIndex={typeof props.tabIndex === "number" ? props.tabIndex : undefined}
			className={className}
			aria-label={props["aria-label"]}
		>
			<img src={props.src} alt={props.alt} onLoad={onImageLoad} data-error={error} />
			{error && (
				<div className="AvatarInitials" aria-hidden={true}>
					{props.name.charAt(0)}
				</div>
			)}
		</div>
	);
}

Avatar.propTypes = {};

Avatar.defaultProps = {
	name: "Stefan",
};

Avatar.displayName = "Avatar";

export default Avatar;
