import React, { useRef, useState, useEffect } from "react";
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
  moveToGroup,
  openGroup,
  ungroupGroup,
  removeGroup
} from "../../redux/notes/actions";

import "./NotesTable.css";
import { ContextMenuTrigger, ContextMenu, MenuItem } from "react-contextmenu";
import { showOverlay } from "../../redux/overlays/actions";
import { OverlayType } from "../../redux/overlays/types";
import { Container, Bar, Section } from "react-simple-resizer";

function Row(props: any) {
  const dispatch = useDispatch();

  const group = useSelector((state: AppState) => state.notes.groups[props.id]);

  function allowDrop(event: React.DragEvent) {
    event.preventDefault();
  }

  function dragStart(event: React.DragEvent) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        index: props.index,
        id: props.id
      })
    );
  }

  function drop(event: React.DragEvent) {
    event.preventDefault();

    const data = JSON.parse(event.dataTransfer.getData("text/plain"));
    const sourceId = data && data.id;

    if (sourceId !== props.id) {
      dispatch(moveToGroup(props.id, sourceId));
    }
  }

  function open(event: React.MouseEvent) {
    if (event) {
      event.stopPropagation();
    }

    dispatch(openGroup(props.id));
  }

  function collectDataForContextMenu() {
    return { id: props.id, index: props.index, open };
  }

  return (
    <ContextMenuTrigger
      id="group-context-menu"
      holdToDisplay={-1}
      attributes={{
        className: "NotesRow",
        tabIndex: props.index,
        style: props.style,
        draggable: true,
        onDragOver: allowDrop,
        onDragStart: dragStart,
        onDrop: drop,
        onDoubleClick: open
      }}
      collect={collectDataForContextMenu}
    >
      <div {...props.columns[0].props}>
        <MdFolder className="FolderIcon" />
        <span>{props.id}</span>
      </div>
      <div {...props.columns[1].props}>{group.title}</div>
    </ContextMenuTrigger>
  );
}

function AutoSizerContent(props: Size) {
  const table = useRef(null);
  const resizeContainer = useRef<any>(null);
  const [columnWidth, setColumnWidth] = useState([props.width, props.width]);

  useEffect(() => {
    setColumnWidth([props.width, props.width]);
  }, [props.width]);

  const currentGroupID = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const childrenIdentifiers = useSelector(
    (state: AppState) => state.notes.groups[currentGroupID].children
  );

  function headerRowRenderer(props: any) {
    function afterResizing() {
      if (resizeContainer.current) {
        const resizer = resizeContainer.current.getResizer();

        setColumnWidth(() =>
          props.columns.map((_: any, index: number) =>
            resizer.getSectionSize(index)
          )
        );
      }
    }

    return (
      <Container
        ref={resizeContainer}
        className={props.className}
        style={props.style}
        afterResizing={afterResizing}
      >
        {props.columns.map((column: any, index: number) => (
          <>
            {index !== 0 && (
              <Bar
                size={5}
                style={{
                  background: "#888888",
                  cursor: "col-resize",
                  height: "100%"
                }}
              />
            )}
            <Section>
              <div key={column.key} {...column.props} />
            </Section>
          </>
        ))}
      </Container>
    );
  }

  /**
   * Function which extract data from collection and passes it to the rowRenderer as `rowData`.
   */
  function rowGetter({ index }: { index: number }) {
    const id = childrenIdentifiers[index];

    return { id, index };
  }

  function rowRenderer(props: TableRowProps) {
    const id = childrenIdentifiers[props.rowData.index];

    return (
      <Row
        id={id}
        key={id}
        index={props.rowData.index}
        style={props.style}
        columns={props.columns}
      />
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
      ref={table}
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
      <Column
        dataKey="id"
        label="ID"
        width={
          typeof columnWidth[0] === "number" ? columnWidth[0] : props.width
        }
      />
      <Column
        dataKey="title"
        label="Name"
        width={
          typeof columnWidth[1] === "number" ? columnWidth[1] : props.width
        }
      />
    </Table>
  );
}

export default function NotesTable(props: any) {
  const dispatch = useDispatch();

  function open(event: React.MouseEvent, data: any) {
    event.preventDefault();

    data.open();
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
    <div style={{ flex: 1, overflowX: "auto", overflowY: "hidden" }}>
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
