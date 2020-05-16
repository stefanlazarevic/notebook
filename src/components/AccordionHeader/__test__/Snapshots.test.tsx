import React from "react";
import { render, cleanup } from "@testing-library/react";
import AccordionHeader from "../index";

afterEach(cleanup);

it("Подразумеванa својства се подударају са последњим снимком.", () => {
	const { asFragment } = render(<AccordionHeader />);

	expect(asFragment()).toMatchSnapshot();
});

it("Сва подешена својства се подударају са последњим снимком.", () => {
	const { asFragment } = render(<AccordionHeader id="id" testid="testid" className="CustomAccordionHeader" />);

	expect(asFragment()).toMatchSnapshot();
});
