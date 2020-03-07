import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect
} from "react";

import { FormBlock, LabeledSwitch } from "../../../UI";
import SettingSection from "../SettingSection/SettingSection";
import { ISettingsSection } from "../SettingSection/types";

const EditorSettings = forwardRef((props: any, ref: any) => {
  const [autoSave, setAutoSave] = useState(!!props.autoSave);
  const [saveAndClose, setSaveAndClose] = useState(!!props.saveAndClose);
  const [spellCheck, setSpellCheck] = useState(!!props.spellCheck);

  function updateAutoSave(value: boolean) {
    if (value) {
      setSaveAndClose(false);
    }

    setAutoSave(value);
  }

  useEffect(() => {
    setAutoSave(!!props.autoSave);
  }, [props.autoSave]);

  useEffect(() => {
    setSaveAndClose(!!props.saveAndClose);
  }, [props.saveAndClose]);

  useEffect(() => {
    setSpellCheck(!!props.spellCheck);
  }, [props.spellCheck]);

  useImperativeHandle(
    ref,
    (): ISettingsSection => ({
      getState() {
        return {
          autoSave,
          saveAndClose,
          spellCheck
        };
      },
      reset() {
        setAutoSave(!!props.autoSave);
        setSaveAndClose(!!props.saveAndClose);
        setSpellCheck(!!props.spellCheck);
      }
    })
  );

  return (
    <div className="EditorSettings">
      <FormBlock>
        <LabeledSwitch
          id="auto-save"
          name="auto-save"
          label="Auto Save"
          checked={autoSave}
          onChange={() => updateAutoSave(!autoSave)}
          rounded={true}
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
          rounded={true}
        />
      </FormBlock>
      <FormBlock>
        <LabeledSwitch
          id="spellcheck"
          name="spellcheck"
          label="Spell check"
          checked={spellCheck}
          onChange={() => setSpellCheck(!spellCheck)}
          rounded={true}
        />
      </FormBlock>
    </div>
  );
});

export default SettingSection("Editor")(EditorSettings);
