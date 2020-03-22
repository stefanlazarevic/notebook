import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { Table, Column } from "react-vt-table";
import { useSelector } from "react-redux";

import "react-vt-table/dist/style.css";
import "./NotesTable.css";

import { AppState } from "../../redux/types";
import NoteRow from "./components/NoteRow/NoteRow";

export default function NotesTable(props: any) {
  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const children = useSelector(
    (state: AppState) => state.notes.groups[currentGroupId].children
  );

  function rowRenderer(props: any) {
    const { index, style } = props;
    const { getRowWidth, getColumnWidth } = props.data.rowProps;

    return (
      <NoteRow
        id={children[index]}
        index={index}
        style={style}
        getRowWidth={getRowWidth}
        getColumnWidth={getColumnWidth}
      />
    );
  }

  return (
    <div className="NotesWrapper">
      <AutoSizer>
        {({ width, height }) => (
          <Table
            data={children}
            width={width}
            height={height}
            rowHeight={60}
            headerHeight={40}
            minColumnWidth={20}
            noItemsLabel="This Group is Empty"
            rowRenderer={rowRenderer}
          >
            <Column label="Name" width={100} />
            <Column label="Date Modified" width={300} />
            <Column label="Type" width={100} />
          </Table>
        )}
      </AutoSizer>
    </div>
  );
}
