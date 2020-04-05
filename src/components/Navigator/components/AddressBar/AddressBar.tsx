import React from "react";
import { useSelector } from "react-redux";

import "./AddressBar.css";

import { AppState } from "../../../../redux/types";
import Breadcrumb from "../../../UI/Breadcrumb/Breadcrumb";

import Step from "./components/Step";
import RootStep from "./components/RootStep/RootStep";
import TrashStep from "./components/TrashStep/TrashStep";

export default function AddressBar(props: any) {
  const cwd = useSelector(
    (state: AppState) => state.drive.cwd
  );

  const breadcrumbs = cwd.split('/');

  return (
    <div className="AddressBar">
      <Breadcrumb>
        {breadcrumbs.map((breadcrumb: string, index: number) => {
          const path = breadcrumbs.slice(0, index + 1).join('/');

          if (breadcrumb === '~') {
            return <RootStep tabIndex={0} />
          }

          if (breadcrumb === 'Trash') {
            return <TrashStep tabIndex={0} />
          }

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
