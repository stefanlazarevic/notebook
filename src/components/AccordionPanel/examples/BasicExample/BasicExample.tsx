import React, { useState } from "react";
import AccordionPanel from "../../AccordionPanel";

export default function BasicExample() {
	const [expanded, setExpanded] = useState(false);

	return (
		<div>
			<button onClick={() => setExpanded(!expanded)}>Toggle AccordionPanel</button>
			<AccordionPanel hidden={expanded}>
				<p>Hello world</p>
			</AccordionPanel>
		</div>
	);
}
