import React, { useState, useCallback } from "react";

import "./SimpleAccordion.css";

import AccordionHeader from "../../../components/AccordionHeader";
import AccordionPanel from "../../../components/AccordionPanel";

export default function SimpleAccordion(props: any) {
	const [expanded, setExpanded] = useState<boolean | undefined>(props.expanded);

	const expand = useCallback(function SimpleAccordionExpandCallback() {
		setExpanded(true);
	}, []);

	const collapse = useCallback(function SimpleAccordionExpandCallback() {
		setExpanded(false);
	}, []);

	const toggle = useCallback(function SimpleAccordionToggleCallback() {
		setExpanded((expanded) => !expanded);
	}, []);

	return (
		<div className="SimpleAccordion">
			<AccordionHeader
				id="simple-accordion-header"
				onArrowDown={expand}
				onArrowUp={collapse}
				onClick={toggle}
				aria-expanded={expanded}
				aria-controls="simple-accordion-panel"
			>
				<strong>Do I need a unique password for every account?</strong>
			</AccordionHeader>
			<AccordionPanel
				id="simple-accordion-panel"
				aria-labelledby="simple-accordion-header"
				hidden={!expanded}
			>
				<p className="Highlight">
					<strong>Yes.</strong> Poorly written sites can compromise passwords, and if you use the same
					password everywhere, sooner or later one of those sites will get compromised and someone will
					know your password.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nulla, architecto obcaecati,
					maiores ad vel dicta odit quis nihil vitae dolore nostrum! Sint esse reprehenderit doloribus
					minima, natus rerum magni!
				</p>
			</AccordionPanel>
		</div>
	);
}
