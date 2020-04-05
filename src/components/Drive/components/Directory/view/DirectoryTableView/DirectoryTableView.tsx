import React from "react";
import { MdFolderSpecial, MdFolder } from "react-icons/md";

import './DirectoryTableView.css';

import DirectoryTableViewProps from "./DirectoryTableViewProps";
import utils from "../../../../../../utils";

export default function DirectoryTableView(props: DirectoryTableViewProps) {
  return (
    <div className="DirectoryTableView VTRow" style={{...props.style, width: props.getRowWidth()}}>
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
        <span>
          {props.updatedAt ?
          utils.time.timestampToHuman(props.updatedAt) :
          utils.time.timestampToHuman(props.createdAt)}
        </span>
      </div>
      <div className="VTCell" style={{ width: props.getColumnWidth(2) }}>
        <span>Directory</span>
      </div>
    </div>
  );
}
