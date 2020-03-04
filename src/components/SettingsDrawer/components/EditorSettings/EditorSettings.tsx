import React from "react";

import { FormBlock, LabeledSwitch } from "../../../UI";

export default function EditorSettings(props: any) {
  return (
    <div className="EditorSettings">
      <h4>Editor</h4>
      <FormBlock>
        <LabeledSwitch
          id="auto-save"
          name="auto-save"
          label="Auto Save"
          onChange={() => undefined}
        />
      </FormBlock>
      <FormBlock>
        <LabeledSwitch
          id="save-and-close"
          name="save-and-close"
          label="Save and Close"
          onChange={() => undefined}
        />
      </FormBlock>
      <FormBlock>
        <LabeledSwitch
          id="spellcheck"
          name="spellcheck"
          label="Spell check"
          onChange={() => undefined}
        />
      </FormBlock>
    </div>
  );
}
