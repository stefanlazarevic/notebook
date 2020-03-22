import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../../redux/types";

import "./NoteRow.css";

import Group from "../Group/Group";

export default function NoteRow(props: any) {
  const record = useSelector(
    (state: AppState) => state.notes.records[props.id]
  );

  const group = useSelector((state: AppState) => state.notes.groups[props.id]);

  if (record) {
    return (
      <div className="VTRow" style={props.style} tabIndex={props.index}></div>
    );
  }

  if (group) {
    return (
      <Group
        {...group}
        className={props.className}
        style={props.style}
        index={props.index}
        getRowWidth={props.getRowWidth}
        getColumnWidth={props.getColumnWidth}
        selected={props.selected}
        onClick={props.onClick}
        hasSelected={props.hasSelected}
      />
    );
  }

  return (
    <div className="VTRow" style={{ ...props.style, width: "100%" }}>
      <div className="VTCell" style={{ justifyContent: "center" }}>
        This Folder is Empty.
      </div>
    </div>
  );
}
