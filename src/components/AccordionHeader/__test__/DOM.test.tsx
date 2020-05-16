import React from "react";
import { render, cleanup } from "@testing-library/react";
import AccordionHeader from "../index";

afterEach(cleanup);

it("Подразумевана вредност `tabIndex` атрибута је '0'.", () => {
	const { getByTestId } = render(<AccordionHeader testid="testid" />);

	const accodrionHeader: HTMLElement = getByTestId("testid");

	expect(accodrionHeader).toHaveAttribute("tabIndex");
	expect(accodrionHeader.getAttribute("tabIndex")).toBe("0");
});
