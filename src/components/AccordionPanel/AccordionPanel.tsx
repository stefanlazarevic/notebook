import React, { useEffect, useRef, useCallback } from "react";

import "./AccordionPanel.css";

import useClassNames from "../Utils/hooks/classNames";
import useComponentDidMount from "../Utils/hooks/componentDidMount";

function AccordionPanel(props: any) {
	const className = useClassNames("AccordionPanel", props.className);

	const accordionPanel = useRef<HTMLDivElement | null>(null);

	const show = useCallback(() => {
		if (accordionPanel.current) {
			accordionPanel.current.style.maxHeight = `${accordionPanel.current.scrollHeight}px`;
		}
	}, []);

	useComponentDidMount(() => {
		if (!props.hidden) {
			show();
		}
	});

	useEffect(() => {
		if (!props.hidden) {
			show();
		}
	}, [props.hidden, show]);

	return (
		<div
			id={props.id}
			data-testid={props.testid}
			ref={accordionPanel}
			className={className}
			role="region"
			aria-labelledby={props["aria-labelledby"]}
			aria-hidden={props.hidden}
		>
			{props.children}
		</div>
	);
}

AccordionPanel.propTypes = {};

AccordionPanel.defaultProps = {};

AccordionPanel.displayName = "AccordionPanel";

export default AccordionPanel;
