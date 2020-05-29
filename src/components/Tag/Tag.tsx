import React, { useCallback } from "react";

import "./Tag.css";

import { TagProps, TagPropTypes } from "./TagProps";
import useClassNames from "../Utils/hooks/classNames";
import IconButton from "../IconButton";
import { Icons } from "../Icon";
import Key from "../Utils/keyboard/key";

function Tag(props: TagProps) {
	const className = useClassNames("Tag", props.className);

	const onKeyDown = useCallback(
		function TagKeyDownCallback(event: React.KeyboardEvent) {
			const { keyCode } = event;

			if (keyCode === Key.ESCAPE) {
				props.onRemove!(event);
			}
		},
		[props.onRemove]
	);

	return (
		<div
			id={props.id}
			data-testid={props.testid}
			className={className}
			tabIndex={typeof props.tabIndex === "number" ? props.tabIndex : undefined}
			aria-label={props["aria-label"]}
			aria-describedby={props["aria-describedby"]}
			onKeyDown={typeof props.onRemove === "function" ? onKeyDown : undefined}
		>
			{props.children}
			{typeof props.onRemove === "function" ? (
				<IconButton icon={Icons.close} onClick={props.onRemove} tabIndex={-1} size={props.size} />
			) : null}
		</div>
	);
}

Tag.propTypes = TagPropTypes;

Tag.defaultProps = {
	tabIndex: 0,
	size: 14,
};

Tag.displayName = "Tag";

export default Tag;
