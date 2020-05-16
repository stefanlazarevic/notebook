import React from "react";
import { render, cleanup } from "@testing-library/react";
import Checkbox from "../index";

afterEach(cleanup);

it("Подразумевана вредност `tabIndex` атрибута је '0'.", () => {
	const { getByTestId } = render(<Checkbox testid="testid" />);

	const checkbox: HTMLElement = getByTestId("testid");

	expect(checkbox).toHaveAttribute("tabIndex");
	expect(checkbox.getAttribute("tabIndex")).toBe("0");
});

it("Онемогућено поље мора поседовати вредност `aria-disabled` атрибута `true`.", () => {
	const { getByTestId } = render(<Checkbox testid="testid" disabled={true} />);

	const checkbox: HTMLElement = getByTestId("testid");

	expect(checkbox).toHaveAttribute("aria-disabled");
	expect(checkbox.getAttribute("aria-disabled")).toBe("true");
});

it("Онемогућено поље не сме поседовати `tabIndex` атрибут.", () => {
	const { getByTestId } = render(<Checkbox testid="testid" disabled={true} />);

	expect(getByTestId("testid")).not.toHaveAttribute("tabIndex");
});

it("Подразумевана вредност `role` атрибута је 'checkbox'.", () => {
	const { getByTestId } = render(<Checkbox testid="testid" />);

	const checkbox: HTMLElement = getByTestId("testid");
	expect(checkbox).toHaveAttribute("role");
	expect(checkbox.getAttribute("role")).toBe("checkbox");
});

it("Атрибут `aria-checked` мора прихватати вредност `mixed`.", () => {
	const { getByTestId } = render(<Checkbox testid="testid" checked="mixed" />);

	const checkbox: HTMLElement = getByTestId("testid");

	expect(checkbox).toHaveAttribute("aria-checked");
	expect(checkbox.getAttribute("aria-checked")).toBe("mixed");
});
