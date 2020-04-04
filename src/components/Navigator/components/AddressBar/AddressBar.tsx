import React from "react";
import { useSelector } from "react-redux";

import "./AddressBar.css";

import { AppState } from "../../../../redux/types";
import Breadcrumb from "../../../UI/Breadcrumb/Breadcrumb";

import Step from "./components/Step";
import RootStep from "./components/RootStep/RootStep";
import { NoteGroupID } from "../../../../redux/notes/groups/types";

export default function AddressBar(props: any) {
  const cwd = useSelector(
    (state: AppState) => state.drive.cwd
  );

  const breadcrumbs = cwd.slice('/');

  return (
    <div className="AddressBar">
      <Breadcrumb>
        <RootStep tabIndex={0} />
        {breadcrumbs.map((breadcrumb: string, index: number) => {
          const path = breadcrumbs.slice(0, index);
          return (
            <Step
              key={path}
              path={path}
              tabIndex={index === breadcrumbs.length - 1 ? -1 : 0}
            />
          );
        })}
      </Breadcrumb>
    </div>
  );
}
