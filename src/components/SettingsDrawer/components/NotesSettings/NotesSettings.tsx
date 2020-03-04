import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect
} from "react";

import { FormBlock, LabeledSwitch } from "../../../UI";
import SettingSection from "../SettingSection/SettingSection";
import { ISettingsSection } from "../SettingSection/types";

const NotesSettings = forwardRef((props: any, ref: any) => {
  const [softDelete, setSoftDelete] = useState(!!props.softDelete);

  useEffect(() => {
    setSoftDelete(!!props.softDelete);
  }, [props.softDelete]);

  useImperativeHandle(
    ref,
    (): ISettingsSection => ({
      getState() {
        return {
          softDelete
        };
      },
      reset() {
        setSoftDelete(!!props.softDelete);
      }
    })
  );

  return (
    <div className="NotesSettings">
      <FormBlock>
        <LabeledSwitch
          id="soft-delete"
          name="soft-delete"
          label="Soft Delete"
          checked={softDelete}
          onChange={() => setSoftDelete(!softDelete)}
        />
      </FormBlock>
    </div>
  );
});

export default SettingSection("Notes")(NotesSettings);
