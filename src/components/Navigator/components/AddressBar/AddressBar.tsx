import React from "react";
import { useSelector } from "react-redux";

import "./AddressBar.css";

import { AppState } from "../../../../redux/types";
import Breadcrumb from "../../../UI/Breadcrumb/Breadcrumb";

import Step from "./components/Step";
import RootStep from "./components/RootStep/RootStep";

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
        <RootStep />
        {path.map(folderId => {
          return <Step key={folderId} id={folderId} />;
        })}
      </Breadcrumb>
    </div>
  );
}
