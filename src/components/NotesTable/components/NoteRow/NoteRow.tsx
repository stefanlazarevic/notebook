import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../../redux/types";

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
      <div
        className="VTRow"
        style={{ ...props.style, width: props.getRowWidth() }}
        tabIndex={props.index}
      >
        <div className="VTCell" style={{ width: props.getColumnWidth(0) }}>
          <span>{group.title}</span>
        </div>
        <div className="VTCell" style={{ width: props.getColumnWidth(1) }}>
          <span>{group.updatedAt}</span>
        </div>
        <div className="VTCell" style={{ width: props.getColumnWidth(2) }}>
          <span>{group.type}</span>
        </div>
      </div>
    );
  }

  return null;
}
