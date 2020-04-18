import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, number, select } from "@storybook/addon-knobs";

import Icon from "../Icon";
import Icons from "../Icons";

const icons = Object.keys(Icons);

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .add("Preview", () => {
    return (
      <Icon icon={select("icon", icons, icons[0])} size={number("size", 48)} />
    );
  });
