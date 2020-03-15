import React from "react";
import { MdCreateNewFolder, MdNoteAdd } from "react-icons/md";

import { DefaultControlsProps } from "./DefaultControlsProps";
import AppHeaderButton from "../../Button/AppHeaderButton";

export default function DefaultControls(props: DefaultControlsProps) {
  return (
    <>
      <AppHeaderButton
        title="Create new group"
        onClick={props.onCreateNewFolder}
      >
        <MdCreateNewFolder />
      </AppHeaderButton>
      <AppHeaderButton
        title="Create new record"
        onClick={props.onCreateNewFile}
      >
        <MdNoteAdd />
      </AppHeaderButton>
    </>
  );
}
