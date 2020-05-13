import React from "react";
import { render, cleanup } from "@testing-library/react";
import ProgressBar from "../index";

afterEach(cleanup);

it("Подразумеванa својства се подударају са последњим снимком.", () => {
	const { asFragment } = render(<ProgressBar />);

	expect(asFragment()).toMatchSnapshot();
});

it("Сва подешена својства се подударају са последњим снимком.", () => {
	const { asFragment } = render(
		<ProgressBar
			id="id"
			testid="test-id"
			className="TestProgressBar"
			value={40}
			aria-describedby="test-label"
			aria-busy={false}
			aria-valuetext="Loading..."
		/>
	);

	expect(asFragment()).toMatchSnapshot();
});
