import React from "react";

import "./AppHeaderMenu.css";

import AppHeaderMenuProps from "./AppHeaderMenuProps";
import CreateNewFolderButton from "../CreateNewFolderButton";
import CreateNewFileButton from "../CreateNewFileButton";

export default function AppHeaderMenu(props: AppHeaderMenuProps) {
  return (
    <div className="AppHeaderMenu">
      <CreateNewFolderButton />
      <CreateNewFileButton />
    </div>
  );
}
