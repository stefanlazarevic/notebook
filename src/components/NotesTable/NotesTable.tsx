import React, { useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { Table, Column } from "react-vt-table";
import { useSelector, useDispatch } from "react-redux";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import "react-vt-table/dist/style.css";
import "./NotesTable.css";

import { AppState } from "../../redux/types";
import NoteRow from "./components/NoteRow/NoteRow";
import TableFooter from "./components/TableFooter/TableFooter";
import { showOverlay } from "../../redux/overlays/actions";
import { OverlayType } from "../../redux/overlays/types";
import { openEditor } from "../../redux/editor/actions";

export default function NotesTable(props: any) {
  const dispatch = useDispatch();

  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const parentGroupID = useSelector(
    (state: AppState) => state.notes.groups[currentGroupId].parent
  );

  const children = useSelector(
    (state: AppState) => state.notes.groups[currentGroupId].children
  );

  function open(event: React.MouseEvent, data: any) {
    event.preventDefault();

    if (typeof data.open === "function") {
      data.open();
    }
  }

  function rename(event: React.MouseEvent, data: any) {
    event.preventDefault();

    if (typeof data.rename === "function") {
      data.rename();
    }
  }

  function ungroup(event: React.MouseEvent, data: any) {
    event.preventDefault();

    if (typeof data.ungroup === "function") {
      data.ungroup();
    }
  }

  function remove(event: React.MouseEvent, data: any) {
    event.preventDefault();

    if (typeof data.remove === "function") {
      data.remove();
    }
  }

  function createGroup(event: React.MouseEvent) {
    event.preventDefault();

    dispatch(showOverlay(OverlayType.CREATE_GROUP));
  }

  function createRecord(event: React.MouseEvent) {
    event.preventDefault();

    dispatch(openEditor());
  }

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
      <ContextMenuTrigger id="table-menu" holdToDisplay={-1}>
        <div className="NotesWrapper">
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
          <ContextMenu id="group-menu">
            <MenuItem onClick={open}>Open</MenuItem>
            <MenuItem divider />
            <MenuItem disabled={true}>Copy</MenuItem>
            <MenuItem disabled={true}>Cut</MenuItem>
            <MenuItem onClick={rename}>Rename</MenuItem>
            <MenuItem divider />
            <MenuItem disabled={!Boolean(parentGroupID)} onClick={ungroup}>
              Ungroup
            </MenuItem>
            <MenuItem divider />
            <MenuItem onClick={remove}>Remove</MenuItem>
          </ContextMenu>
        </div>
        <TableFooter items={children.length} />
      </ContextMenuTrigger>
      <ContextMenu id="table-menu">
        <MenuItem onClick={createGroup}>Create Folder</MenuItem>
        <MenuItem onClick={createRecord}>Create File</MenuItem>
      </ContextMenu>
    </>
  );
}
