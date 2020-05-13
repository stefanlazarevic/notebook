import React from "react";
import { render, cleanup } from "@testing-library/react";
import TextInput from "../index";

afterEach(cleanup);

it("Подразумеванa својства се подударају са последњим снимком.", () => {
	const { asFragment } = render(<TextInput />);

	expect(asFragment()).toMatchSnapshot();
});

it("Сва подешена својства се подударају са последњим снимком.", () => {
	const { asFragment } = render(
		<TextInput
			id="id"
			testid="test-id"
			aria-labelledby="test-label"
			value="test"
			className="CustomTextInput"
			disabled={false}
			invalid={true}
			placeholder="Test TextInput"
		/>
	);

	expect(asFragment()).toMatchSnapshot();
});
