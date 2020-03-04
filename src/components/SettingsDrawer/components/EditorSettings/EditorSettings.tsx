import React, { useState, forwardRef } from "react";

import "./EditorSettings.css";

import { FormBlock, LabeledSwitch } from "../../../UI";

export default forwardRef((props: any, ref: any) => {
  const [autoSave, setAutoSave] = useState(props.autoSave);
  const [saveAndClose, setSaveAndClose] = useState(props.saveAndClose);
  const [spellcheck, setSpellcheck] = useState(props.spellcheck);

  function updateAutoSave(value: boolean) {
    if (value) {
      setSaveAndClose(false);
    }

    setAutoSave(value);
  }

  return (
    <div className="EditorSettings">
      <h4>Editor</h4>
      <FormBlock>
        <LabeledSwitch
          id="auto-save"
          name="auto-save"
          label="Auto Save"
          checked={autoSave}
          onChange={() => updateAutoSave(!autoSave)}
        />
      </FormBlock>
      <FormBlock>
        <LabeledSwitch
          id="save-and-close"
          name="save-and-close"
          label="Save and Close"
          disabled={autoSave}
          checked={saveAndClose}
          onChange={() => setSaveAndClose(!saveAndClose)}
        />
      </FormBlock>
      <FormBlock>
        <LabeledSwitch
          id="spellcheck"
          name="spellcheck"
          label="Spell check"
          checked={spellcheck}
          onChange={() => setSpellcheck(!spellcheck)}
        />
      </FormBlock>
    </div>
  );
});
