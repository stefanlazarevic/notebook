import React from "react";
import { render, cleanup } from "@testing-library/react";
import Button from "../index";

afterEach(cleanup);

it("Подразумеванa својства се подударају са последњим снимком.", () => {
	const { asFragment } = render(<Button />);

	expect(asFragment()).toMatchSnapshot();
});

it("Сва подешена својства се подударају са последњим снимком.", () => {
	const { asFragment } = render(
		<Button
			id="id"
			testid="test-id"
			className="TestButton"
			title="Button title"
			lang="en"
			disabled={false}
			aria-label="test-label-text"
			aria-labelledby="test-label"
			aria-pressed={"mixed"}
			aria-expanded={false}
			aria-haspopup={false}
		>
			Test
		</Button>
	);

	expect(asFragment()).toMatchSnapshot();
});
