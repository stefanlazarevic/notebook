import React, { useRef } from "react";

import "./AlertDialog.css";

import { AlertDialogPropTypes, AlertDialogProps } from "./AlertDialogProps";

import useClassNames from "../Utils/hooks/classNames";
import useComponentDidMount from "../Utils/hooks/componentDidMount";

import utils from "../Utils";

function AlertDialog(props: AlertDialogProps) {
	const alertdialog = useRef<HTMLDivElement>(null);

	const className = useClassNames("AlertDialog", props.className);

	const focusableElements = useRef<NodeListOf<HTMLElement> | null>(null);

	useComponentDidMount(() => {
		if (alertdialog.current) {
			focusableElements.current = alertdialog.current.querySelectorAll(utils.string.getFocusableQueryString());

			if (focusableElements.current.length) {
				focusableElements.current[0].focus();
			}
		} else {
			console.warn("[AlertDialog] Component reference is not established.");
		}
	});

	function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
		const { keyCode, shiftKey, target } = event;

		if (!focusableElements.current || !focusableElements.current.length) {
			return;
		}

		if (shiftKey && keyCode === 9) {
			if (target === focusableElements.current[0]) {
				event.preventDefault();
				focusableElements.current[focusableElements.current.length - 1].focus();
			}
		}

		if (keyCode === 9) {
			if (target === focusableElements.current[focusableElements.current.length - 1]) {
				event.preventDefault();
				focusableElements.current[0].focus();
			}
		}
	}

	function isModal(ariaModal: boolean | "false" | "true" | undefined) {
		if (ariaModal === true || ariaModal === "true") {
			return true;
		}

		return false;
	}

	return (
		<div
			id={props.id}
			ref={alertdialog}
			data-testid={props.testid}
			role="alertdialog"
			className={className}
			aria-labelledby={props["aria-labelledby"]}
			aria-label={props["aria-label"]}
			aria-describedby={props["aria-describedby"]}
			aria-modal={props["aria-modal"]}
			onKeyDown={isModal(props["aria-modal"]) ? onKeyDown : undefined}
		>
			{props.children}
		</div>
	);
}

AlertDialog.propTypes = AlertDialogPropTypes;

AlertDialog.defaultProps = {};

AlertDialog.displayName = "AlertDialog";

export default AlertDialog;
