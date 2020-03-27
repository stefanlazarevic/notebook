import React from "react";

import "./AddressBar.css";

import { useSelector } from "react-redux";
import { AppState } from "../../../../redux/types";
import Breadcrumb from "../../../UI/Breadcrumb/Breadcrumb";
import Folder from "./components/Folder/Folder";

export default function AddressBar(props: any) {
  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const path = useSelector(
    (state: AppState) => state.notes.groups[currentGroupId].path
  );

  return (
    <Breadcrumb>
      {path.concat(currentGroupId).map(folderId => {
        return <Folder key={folderId} id={folderId} />;
      })}
    </Breadcrumb>
  );
}
