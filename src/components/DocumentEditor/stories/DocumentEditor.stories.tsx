import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import "./index.css";

import DocumentEditor from "../DocumentEditor";

storiesOf("DocumentEditor", module)
  .addDecorator(withKnobs)
  .addParameters({
    info: {
      inline: true,
      text: `\`DocumentEditor\` представља \`React\` компоненту за обраду текста.
        Као основу, компонента користи \`Draft.js\` библиотеку која поседује [API](https://draftjs.org/docs/api-reference-editor) са великим спектром могућности.`
    }
  })
  .add("Preview", () => <DocumentEditor name="New Document" />)
  .add("Styled Preview", () => (
    <DocumentEditor name="New Document" className="Themed" />
  ));
