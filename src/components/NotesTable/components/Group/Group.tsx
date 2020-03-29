import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { GroupProps } from "./GroupProps";
import {
  openGroup,
  removeGroup,
  ungroupGroup,
  moveToGroup
} from "../../../../redux/notes/actions";
import { showOverlay } from "../../../../redux/overlays/actions";
import { OverlayType } from "../../../../redux/overlays/types";
import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";
import { createNewTab } from "../../../../redux/tabs/actions";
import { FolderMenuTrigger, FolderMenu } from "../../../ContextMenu/FolderMenu";
import { AppState } from "../../../../redux/types";
import { MdFolder, MdFolderSpecial } from "react-icons/md";
import {
  addToFavorites,
  removeFromFavorites
} from "../../../../redux/favorites/actions";

export default function Group(props: GroupProps) {
  const dispatch = useDispatch();

  const isFavorite = useSelector(
    (state: AppState) => state.notes.groups[props.id].favorite
  );

  function open() {
    dispatch(openGroup(props.id));
  }

  function openInNewTab() {
    dispatch(createNewTab(props.id));
  }

  function rename() {
    dispatch(showOverlay(OverlayType.RENAME_GROUP, { id: props.id }));
  }

  function remove() {
    dispatch(removeGroup(props.id));
  }

  function ungroup() {
    dispatch(ungroupGroup(props.id));
  }

  function dragOver(event: React.DragEvent) {
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
    const floatingID = data && data.id;

    // Prevent moving parent to child folder.
    if (props.path.includes(floatingID)) {
      return;
    }

    if (floatingID && floatingID !== props.id) {
      dispatch(moveToGroup(props.id, floatingID));
    }
  }

  function toggleFavorite() {
    if (isFavorite) {
      dispatch(removeFromFavorites(props.id));
    } else {
      dispatch(addToFavorites(props.id));
    }
  }

  function handleClick(event: React.MouseEvent) {
    if (typeof props.onClick === "function") {
      props.onClick(event, props.id);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    const { keyCode } = event;
    const key = KeycodeMap[keyCode];

    if (key === "enter") {
      dispatch(openGroup(props.id));
    }

    if (key === "f2") {
      dispatch(showOverlay(OverlayType.RENAME_GROUP, { id: props.id }));
    }

    if (key === "delete") {
      dispatch(removeGroup(props.id));
    }
  }

  function forwardDataToContextMenu() {
    return {
      open,
      openInNewTab,
      rename,
      remove,
      ungroup,
      toggleFavorite
    };
  }

  // @todo move to utility.
  function timeConverter(UNIX_timestamp: number) {
    const d = new Date(UNIX_timestamp);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    let HH = hours % 12;
    HH = HH ? HH : 12; // the hour '0' should be '12'
    let MM = minutes < 10 ? "0" + minutes : minutes;

    const strTime = HH + ":" + MM + " " + ampm;

    return `${da}/${mo}/${ye} ${strTime}`;
  }

  return (
    <>
      <FolderMenuTrigger
        id={props.id}
        className={props.selected ? `VTRow selected` : "VTRow"}
        style={{ ...props.style, width: props.getRowWidth() }}
        tabIndex={props.index}
        onDoubleClick={open}
        onClick={handleClick}
        draggable={true}
        onDragOver={dragOver}
        onDragStart={dragStart}
        onDrop={drop}
        onKeyDown={handleKeyDown}
        forwardDataToContextMenu={forwardDataToContextMenu}
      >
        <div className="VTCell" style={{ width: props.getColumnWidth(0) }}>
          <div className="VTCellContent">
            {isFavorite ? (
              <MdFolderSpecial className="VTCellIcon" />
            ) : (
              <MdFolder className="VTCellIcon" />
            )}
            <span>{props.title}</span>
          </div>
        </div>
        <div className="VTCell" style={{ width: props.getColumnWidth(1) }}>
          <span>{props.updatedAt ? timeConverter(props.updatedAt) : "-"}</span>
        </div>
        <div className="VTCell" style={{ width: props.getColumnWidth(2) }}>
          <span>{props.type}</span>
        </div>
      </FolderMenuTrigger>
      <FolderMenu id={props.id} />
    </>
  );
}
