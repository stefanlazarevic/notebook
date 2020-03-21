import React, { ReactNode } from "react";
import {
  Table,
  Column,
  AutoSizer,
  Size,
  TableRowProps
} from "react-virtualized";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux/types";
import { MdFolder } from "react-icons/md";
import {
  swapCurrentGroupChildren,
  moveToGroup,
  openGroup,
  ungroupGroup,
  removeGroup
} from "../../redux/notes/actions";

import "./NotesTable.css";
import { ContextMenuTrigger, ContextMenu, MenuItem } from "react-contextmenu";
import { NoteGroupID } from "../../redux/notes/groups/types";
import { showOverlay } from "../../redux/overlays/actions";
import { OverlayType } from "../../redux/overlays/types";

function AutoSizerContent(props: Size) {
  const dispatch = useDispatch();

  const currentGroupID = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const childrenIdentifiers = useSelector(
    (state: AppState) => state.notes.groups[currentGroupID].children
  );

  const groups = useSelector((state: AppState) => state.notes.groups);

  /**
   * Function which extract data from collection and passes it to the rowRenderer as `rowData`.
   */
  function rowGetter({ index }: { index: number }) {
    const id = childrenIdentifiers[index];

    const group = groups[id];

    return { id, index, title: group.title };
  }

  function headerRowRenderer(props: any) {
    return <div>Name</div>;
  }

  function rowRenderer(props: TableRowProps) {
    function allowDrop(event: React.DragEvent) {
      event.preventDefault();
    }

    function dragStart(event: React.DragEvent) {
      event.dataTransfer.setData(
        "text/plain",
        JSON.stringify({
          index: props.rowData.index,
          id: props.rowData.id
        })
      );
    }

    function drop(event: React.DragEvent) {
      event.preventDefault();

      const data = JSON.parse(event.dataTransfer.getData("text/plain"));
      const sourceId = data && data.id;

      if (sourceId !== props.rowData.id) {
        dispatch(moveToGroup(props.rowData.id, sourceId));
      }
    }

    function open(event: React.MouseEvent) {
      if (event) {
        event.stopPropagation();
      }

      dispatch(openGroup(props.rowData.id));
    }

    function collectDataForContextMenu() {
      return { id: props.rowData.id, index: props.rowData.index };
    }

    return (
      <ContextMenuTrigger
        id="group-context-menu"
        key={props.rowData.id}
        holdToDisplay={-1}
        attributes={{
          className: "NotesRow",
          tabIndex: props.rowData.index,
          style: props.style,
          draggable: true,
          onDragOver: allowDrop,
          onDragStart: dragStart,
          onDrop: drop,
          onDoubleClick: open
        }}
        collect={collectDataForContextMenu}
      >
        <MdFolder className="FolderIcon" />
        <span>{props.rowData.title}</span>
      </ContextMenuTrigger>
    );
  }

  function noRowsRenderer() {
    return (
      <div className="NotesRow__empty">
        <span>This groups is empty.</span>
      </div>
    );
  }

  return (
    <Table
      width={props.width}
      height={props.height}
      className="NotesTable"
      rowHeight={30}
      rowCount={childrenIdentifiers.length}
      headerHeight={30}
      rowGetter={rowGetter}
      rowRenderer={rowRenderer}
      noRowsRenderer={noRowsRenderer}
      headerRowRenderer={headerRowRenderer}
    >
      <Column dataKey="id" width={props.width} />
    </Table>
  );
}

export default function NotesTable(props: any) {
  const dispatch = useDispatch();

  function open(event: React.MouseEvent, data: any) {
    event.preventDefault();

    dispatch(openGroup(data.id));
  }

  function rename(event: React.MouseEvent, data: any) {
    event.preventDefault();

    dispatch(showOverlay(OverlayType.RENAME_GROUP, { id: data.id }));
  }

  function ungroup(event: React.MouseEvent, data: any) {
    event.preventDefault();

    dispatch(ungroupGroup(data.id));
  }

  function remove(event: React.MouseEvent, data: any) {
    event.preventDefault();

    dispatch(removeGroup(data.id));
  }

  return (
    <div style={{ flex: 1 }}>
      <AutoSizer>
        {({ width, height }) => (
          <AutoSizerContent {...props} width={width} height={height} />
        )}
      </AutoSizer>
      <ContextMenu id="group-context-menu">
        <MenuItem onClick={open}>Open</MenuItem>
        <MenuItem divider />
        <MenuItem disabled={true}>Copy</MenuItem>
        <MenuItem disabled={true}>Cut</MenuItem>
        <MenuItem onClick={rename}>Rename</MenuItem>
        <MenuItem divider />
        <MenuItem onClick={ungroup}>Ungroup</MenuItem>
        <MenuItem divider />
        <MenuItem onClick={remove}>Remove</MenuItem>
      </ContextMenu>
    </div>
  );
}
