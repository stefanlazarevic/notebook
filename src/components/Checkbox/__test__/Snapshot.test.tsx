import React from "react";
import { render, cleanup } from "@testing-library/react";
import Checkbox from "../index";

afterEach(cleanup);

it("Подразумеванa својства се подударају са последњим снимком.", () => {
	const { asFragment } = render(<Checkbox onChange={() => void 0} />);

	expect(asFragment()).toMatchSnapshot();
});

it("Сва подешена својства се подударају са последњим снимком.", () => {
	const { asFragment } = render(
		<Checkbox
			id="id"
			testid="test-id"
			aria-labelledby="test-label"
			checked={true}
			onChange={() => void 0}
			className="CustomCheckbox"
			disabled={false}
		/>
	);

	expect(asFragment()).toMatchSnapshot();
});
