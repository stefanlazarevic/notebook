import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { Table, Column } from "react-vt-table";
import { useSelector } from "react-redux";
import { ContextMenuTrigger } from "react-contextmenu";

import "react-vt-table/dist/style.css";
import "./NotesTable.css";

import { AppState } from "../../redux/types";
import NoteRow from "./components/NoteRow/NoteRow";
import TableFooter from "./components/TableFooter/TableFooter";

export default function NotesTable(props: any) {
  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const children = useSelector(
    (state: AppState) => state.notes.groups[currentGroupId].children
  );

  function rowRenderer(props: any) {
    const { index, style, isScrolling } = props;
    const { getRowWidth, getColumnWidth } = props.data.rowProps;

    return (
      <NoteRow
        id={children[index]}
        index={index}
        style={style}
        getRowWidth={getRowWidth}
        getColumnWidth={getColumnWidth}
        className={index % 2 ? "VTRowEven" : "VTRowOdd"}
        isScrolling={isScrolling}
      />
    );
  }

  return (
    <>
      <div className="NotesWrapper">
        <ContextMenuTrigger id="table-menu" holdToDisplay={-1}>
          <AutoSizer>
            {({ width, height }) => (
              <Table
                data={children.length ? children : ["empty"]}
                width={width}
                height={height}
                rowHeight={40}
                headerHeight={40}
                minColumnWidth={30}
                rowRenderer={rowRenderer}
                listProps={{
                  overscanCount: 20,
                  useIsScrolling: true
                }}
              >
                <Column label="Name" width={240} />
                <Column label="Last Modified" width={200} />
                <Column label="Type" width={100} />
              </Table>
            )}
          </AutoSizer>
          {/* <TableFooter items={children.length} /> */}
        </ContextMenuTrigger>
      </div>
    </>
  );
}
