import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { Table, Column } from "react-vt-table";
import { useSelector, useDispatch } from "react-redux";
import { ContextMenuTrigger } from "react-contextmenu";

import "react-vt-table/dist/style.css";
import "./NotesTable.css";

import { AppState } from "../../redux/types";
import NoteRow from "./components/NoteRow/NoteRow";
import Ribbon from "./components/Ribbon/Ribbon";
import { moveToGroup } from "../../redux/notes/actions";

export default function NotesTable(props: any) {
  const dispatch = useDispatch();

  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const children = useSelector(
    (state: AppState) => state.notes.groups[currentGroupId].children
  );

  const path = useSelector(
    (state: AppState) => state.notes.groups[currentGroupId].path
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

  function allowDrag(event: React.DragEvent) {
    event.preventDefault();
  }

  function drop(event: React.DragEvent) {
    event.preventDefault();

    const data = JSON.parse(event.dataTransfer.getData("text/plain"));
    const floatingID = data && data.id;

    // Prevent moving parent to child folder.
    if (path.includes(floatingID)) {
      return;
    }

    if (children.includes(floatingID)) {
      return;
    }

    if (floatingID && floatingID !== currentGroupId) {
      dispatch(moveToGroup(currentGroupId, floatingID));
    }
  }

  return (
    <>
      <div className="NotesWrapper">
        <ContextMenuTrigger
          id="table-menu"
          holdToDisplay={-1}
          attributes={{
            onDragOver: allowDrag,
            onDrop: drop
          }}
        >
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
                autoScroll={true}
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
        </ContextMenuTrigger>
      </div>
      <Ribbon length={children.length} />
    </>
  );
}
