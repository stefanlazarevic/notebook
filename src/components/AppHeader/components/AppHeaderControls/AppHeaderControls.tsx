import React from "react";
import { MdCreate, MdCreateNewFolder } from "react-icons/md";

import "./AppHeaderControls.css";

export function AppHeaderControls(props: any) {
  return (
    <div className="AppHeaderControls">
      <button disabled={true} title="Create directory">
        <MdCreateNewFolder />
      </button>
      <button title="Create file" onClick={props.openNoteEditor}>
        <MdCreate />
      </button>
    </div>
  );
}
