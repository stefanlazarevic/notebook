import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Select from "../Select";

const options = [
  { id: "m", value: "m", label: "Male" },
  { id: "f", value: "f", label: "Female", selected: true },
];

storiesOf("Components/Select", module)
  .addDecorator(withKnobs)
  .add("Preview", () => {
    return <Select placeholder="Select your sex" options={options} />;
  });
