import React from "react";

import "./SelectionStatus.css";

import ISelectionStatusProps from "./SelectionStatusProps";

export default function SelectionStatus(props: ISelectionStatusProps) {
  return (
    <div className="SelectionStatus">
      <span>Line: {props.line}</span>
      <span>Column: {props.column}</span>
    </div>
  );
}
