import React from "react";
import { useSelector } from "react-redux";

import "./AddressBar.css";

import { AppState } from "../../../../redux/types";
import Breadcrumb from "../../../UI/Breadcrumb/Breadcrumb";

import Step from "./components/Step";
import RootStep from "./components/RootStep/RootStep";
import { NoteGroupID } from "../../../../redux/notes/groups/types";

export default function AddressBar(props: any) {
  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const path = useSelector(
    (state: AppState) => state.notes.groups[currentGroupId].path
  ).slice(1);

  if (currentGroupId !== "root") {
    path.push(currentGroupId);
  }

  return (
    <div className="AddressBar">
      <Breadcrumb>
        <RootStep tabIndex={0} />
        {path.map((folderId: NoteGroupID, index: number) => {
          return (
            <Step
              key={folderId}
              id={folderId}
              tabIndex={index === path.length - 1 ? -1 : 0}
            />
          );
        })}
      </Breadcrumb>
    </div>
  );
}
