import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Checkbox from "../index";

afterEach(cleanup);

it("Приликом клика на поље, `onChange` позив се извршава.", () => {
	const onChange = jest.fn();

	const { getByTestId } = render(
		<Checkbox testid="testid" onChange={onChange} />
	);

	fireEvent.click(getByTestId("testid"));

	expect(onChange).toHaveBeenCalled();
});

it("Приликом клика на 'space' дугме, `onChange` позив се извршава.", () => {
	const onChange = jest.fn();

	const { getByTestId } = render(
		<Checkbox testid="testid" onChange={onChange} />
	);

	fireEvent.keyDown(getByTestId("testid"), { keyCode: 32 });

	expect(onChange).toHaveBeenCalled();
});

it("Приликом клика на онемогућено поље, `onChange` позив се не извршава.", () => {
	const onChange = jest.fn();

	const { getByTestId } = render(
		<Checkbox testid="testid" disabled={true} onChange={onChange} />
	);

	fireEvent.click(getByTestId("testid"));

	expect(onChange).not.toHaveBeenCalled();
});

it("Приликом клика на 'space' дугме, `onChange` позив се не извршава уколико је поље онемогућено.", () => {
	const onChange = jest.fn();

	const { getByTestId } = render(
		<Checkbox testid="testid" disabled={true} onChange={onChange} />
	);

	fireEvent.keyDown(getByTestId("testid"), { keyCode: 32 });

	expect(onChange).not.toHaveBeenCalled();
});
