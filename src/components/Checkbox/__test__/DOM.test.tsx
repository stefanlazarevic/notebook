import React from "react";
import { render, cleanup } from "@testing-library/react";
import Checkbox from "../index";

afterEach(cleanup);

it("Подразумевана вредност `tabIndex` атрибута је '0'.", () => {
	const { getByTestId } = render(
		<Checkbox testid="testid" onChange={() => undefined} />
	);

	const checkbox: HTMLElement = getByTestId("testid");

	expect(checkbox).toHaveAttribute("tabIndex");
	expect(checkbox.getAttribute("tabIndex")).toBe("0");
});

it("Онемогућено поље не поседује `tabIndex` атрибут.", () => {
	const { getByTestId } = render(
		<Checkbox testid="testid" disabled={true} onChange={() => undefined} />
	);

	expect(getByTestId("testid")).not.toHaveAttribute("tabIndex");
});

it("Подразумевана вредност `role` атрибута је 'checkbox'.", () => {
	const { getByTestId } = render(
		<Checkbox testid="testid" onChange={() => undefined} />
	);

	const checkbox: HTMLElement = getByTestId("testid");
	expect(checkbox).toHaveAttribute("role");
	expect(checkbox.getAttribute("role")).toBe("checkbox");
});
