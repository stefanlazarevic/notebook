import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";

import Tabs from "../index";
import { ITabData } from "../TabsProps";
import { action } from "@storybook/addon-actions";

const tabs: ITabData[] = [
	{ id: "0", label: "Gmail", value: "gmail" },
	{ id: "1", label: "Create-React-App", value: "cra" },
	{ id: "2", label: "Youtube", value: "yt" },
	{ id: "3", label: "Medium", value: "medium" },
	{ id: "4", label: "Prettier", value: "prettier" },
	{ id: "5", label: "Facebook", value: "facebook" },
	{ id: "6", label: "Twitter", value: "twitter" },
	{ id: "7", label: "Instagram", value: "instagram" },
	{ id: "8", label: "9 GAG", value: "9gag" },
	{ id: "9", label: "React", value: "react" },
];

storiesOf("Components/Tabs", module)
	.addDecorator(withKnobs)
	.add("Preview", () => {
		return (
			<Tabs
				tabs={tabs}
				selectedTabIndex={number("selectedTabIndex", 3)}
				max={number("max", 5)}
				onClose={action("onClose")}
				onSelect={action("onSelect")}
			/>
		);
	});
