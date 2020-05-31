import React, { useEffect, useRef, useCallback, useLayoutEffect } from "react";

import "./AccordionPanel.css";

import useClassNames from "../Utils/hooks/classNames";
import useComponentDidMount from "../Utils/hooks/componentDidMount";
import { AccordionPanelPropTypes, AccordionPanelProps } from "./AccordionPanelProps";

function AccordionPanel(props: AccordionPanelProps) {
	const className = useClassNames("AccordionPanel", props.className);

	const accordionPanel = useRef<HTMLDivElement | null>(null);

	useComponentDidMount(() => {
		if (accordionPanel.current) {
			accordionPanel.current.style.maxHeight = `${accordionPanel.current.scrollHeight}px`;
		}
	});

	useLayoutEffect(() => {
		if (accordionPanel.current) {
			accordionPanel.current.style.maxHeight = `${accordionPanel.current.scrollHeight}px`;
		}
	}, [props.children, props.hidden]);

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

AccordionPanel.propTypes = AccordionPanelPropTypes;

AccordionPanel.defaultProps = {};

AccordionPanel.displayName = "AccordionPanel";

export default AccordionPanel;
