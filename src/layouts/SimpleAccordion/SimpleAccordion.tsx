import React, { useState, useCallback, lazy } from "react";

import "./SimpleAccordion.css";

import AccordionHeader from "../../components/AccordionHeader";
import AccordionPanel from "../../components/AccordionPanel";
import IconButton from "../../components/IconButton";
import Icon, { Icons } from "../../components/Icon";
import useComponentDidMount from "../../components/Utils/hooks/componentDidMount";

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

	useComponentDidMount(function SimpleAccordionMountedCallback() {
		// Pre-cache chevron icons.
		const icon = new Image();
		icon.src = "/icons/chevron-up.svg";
	});

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
				<Icon icon={expanded ? Icons.chevronUp : Icons.chevronDown} size={18} />
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
