import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Button from "../index";
import Key from "../../Utils/keyboard/key";

afterEach(cleanup);

it("Приликом клика на дугме, `onClick` позив се извршава.", () => {
	const onClick = jest.fn();

	const { getByTestId } = render(<Button testid="testid" onClick={onClick} />);

	fireEvent.click(getByTestId("testid"));

	expect(onClick).toHaveBeenCalled();
});

it("Приликом клика на онемогућено дугме, `onClick` позив се не извршава.", () => {
	const onClick = jest.fn();

	const { getByTestId } = render(<Button testid="testid" disabled={true} onClick={onClick} />);

	fireEvent.click(getByTestId("testid"));

	expect(onClick).not.toHaveBeenCalled();
});

it("Приликом клика на дугме enter, `onClick` позив се извршава.", () => {
	const onClick = jest.fn();

	const { getByTestId } = render(<Button testid="testid" onClick={onClick} />);

	fireEvent.keyDown(getByTestId("testid"), { keyCode: 13 });

	expect(onClick).toHaveBeenCalled();
});

it("Приликом клика на дугме space, `onClick` позив се извршава.", () => {
	const onClick = jest.fn();

	const { getByTestId } = render(<Button testid="testid" onClick={onClick} />);

	fireEvent.keyDown(getByTestId("testid"), { keyCode: 32 });

	expect(onClick).toHaveBeenCalled();
});
