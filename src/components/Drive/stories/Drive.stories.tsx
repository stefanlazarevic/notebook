import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Drive from "../Drive";

storiesOf("Drive", module)
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      text: "Test",
      source: true
    }
  })
  .add("Preview", () => {
    return <Drive />;
  });
