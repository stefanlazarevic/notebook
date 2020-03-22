import React, { useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { Table, Column } from "react-vt-table";
import { useSelector } from "react-redux";
import { ContextMenu, MenuItem } from "react-contextmenu";

import "react-vt-table/dist/style.css";
import "./NotesTable.css";

import { AppState } from "../../redux/types";
import NoteRow from "./components/NoteRow/NoteRow";
import { NoteGroupID } from "../../redux/notes/groups/types";
import utils from "../../utils";

export default function NotesTable(props: any) {
  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const parentGroupID = useSelector(
    (state: AppState) => state.notes.groups[currentGroupId].parent
  );

  const children = useSelector(
    (state: AppState) => state.notes.groups[currentGroupId].children
  );

  const [selected, setSelected] = useState<{ [id: string]: boolean }>({});

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

  function handleRowClick(event: React.MouseEvent, id: NoteGroupID) {
    if (event.ctrlKey) {
      if (selected[id]) {
        setSelected(utils.object.deleteProperty(id, selected));
      } else {
        setSelected({ ...selected, [id]: true });
      }
    } else {
      if (Object.keys(selected).length) {
        setSelected({});
      }
    }
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
        onClick={handleRowClick}
        selected={selected[children[index]]}
        hasSelected={Object.keys(selected).length !== 0}
      />
    );
  }

  return (
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
  );
}
