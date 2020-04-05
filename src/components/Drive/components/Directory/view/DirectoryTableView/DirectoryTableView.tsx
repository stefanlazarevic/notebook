import React from "react";
import { MdFolderSpecial, MdFolder } from "react-icons/md";

import DirectoryTableViewProps from "./DirectoryTableViewProps";

export default function DirectoryTableView(props: DirectoryTableViewProps) {
  return (
    <div className="VTRow">
      <div className="VTCell" style={{ width: props.getColumnWidth(0) }}>
        <div className="VTCellContent">
          {props.favorite ? (
            <MdFolderSpecial className="VTCellIcon" />
          ) : (
            <MdFolder className="VTCellIcon" />
          )}
          <span>{props.basename}</span>
        </div>
      </div>
      <div className="VTCell" style={{ width: props.getColumnWidth(1) }}>
        <span>{props.updatedAt ? props.updatedAt : props.createdAt}</span>
      </div>
      <div className="VTCell" style={{ width: props.getColumnWidth(2) }}>
        <span>{props.type}</span>
      </div>
    </div>
  );
}
