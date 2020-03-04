import React from "react";
import { MdCreate, MdCreateNewFolder } from "react-icons/md";

import { DefaultControlsProps } from "./DefaultControlsProps";
import AppHeaderButton from "../../Button/AppHeaderButton";

export default function DefaultControls(props: DefaultControlsProps) {
  return (
    <>
      <AppHeaderButton
        title="Create new folder"
        onClick={props.onCreateNewFolder}
        disabled={true}
      >
        <MdCreateNewFolder />
      </AppHeaderButton>
      <AppHeaderButton title="Create new file" onClick={props.onCreateNewFile}>
        <MdCreate />
      </AppHeaderButton>
    </>
  );
}
