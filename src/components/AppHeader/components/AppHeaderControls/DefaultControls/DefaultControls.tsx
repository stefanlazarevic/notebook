import React from "react";
import { MdCreateNewFolder, MdNote } from "react-icons/md";

import { DefaultControlsProps } from "./DefaultControlsProps";
import AppHeaderButton from "../../Button/AppHeaderButton";

export default function DefaultControls(props: DefaultControlsProps) {
  return (
    <>
      <AppHeaderButton
        title="Create new folder"
        onClick={props.onCreateNewFolder}
      >
        <MdCreateNewFolder />
      </AppHeaderButton>
      <AppHeaderButton title="Create new file" onClick={props.onCreateNewFile}>
        <MdNote />
      </AppHeaderButton>
    </>
  );
}
