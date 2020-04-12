import React, { useState } from "react";

import './Drive.css';

import DriveProps from "./DriveProps";
import TableView from "./view/TableView/TableView";

export enum DriveView {
  TABLE,
  GRID
}

export default function Drive(props: DriveProps) {
  // @todo - Move to context.
  const [view, setView] = useState(DriveView.TABLE);

  return (
    <div className="Drive">
        <TableView {...props} />
    </div>
  );
}
