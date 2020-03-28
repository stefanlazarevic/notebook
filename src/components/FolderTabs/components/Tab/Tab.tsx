import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { ContextMenuTrigger } from "react-contextmenu";

import "./Tab.css";

import { AppState } from "../../../../redux/types";
import {
  openTab,
  closeTab,
  closeOtherTabs,
  createNewTab,
  closeTabsAfter
} from "../../../../redux/tabs/actions";

export default function Tab(props: any) {
  const dispatch = useDispatch();

  const folderId = useSelector(
    (state: AppState) => state.tabs.records[props.index]
  );

  const title = useSelector(
    (state: AppState) => state.notes.groups[folderId].title
  );

  const active = useSelector(
    (state: AppState) => state.tabs.currentTabIndex === props.index
  );

  const length = useSelector((state: AppState) => state.tabs.records.length);

  function open() {
    dispatch(openTab(props.index));
  }

  function duplicate() {
    dispatch(createNewTab(folderId));
  }

  function close(event?: React.MouseEvent) {
    if (event) {
      event.stopPropagation();
    }

    if (length < 2) {
      return;
    }

    dispatch(closeTab(props.index));
  }

  function closeOther() {
    if (length < 2) {
      return;
    }

    dispatch(closeOtherTabs(props.index));
  }

  function closeAfter() {
    if (length < 2) {
      return;
    }

    dispatch(closeTabsAfter(props.index));
  }

  function onDragOver(event: React.DragEvent) {
    event.preventDefault();

    open();
  }

  function passDataToContextMenu() {
    return { duplicate, close, closeOther, closeAfter };
  }

  return (
    <ContextMenuTrigger
      renderTag="button"
      id="tab-menu"
      holdToDisplay={-1}
      attributes={{
        className: `Tab ${active ? "active" : ""}`,
        onClick: open,
        title,
        onDragOver
      }}
      collect={passDataToContextMenu}
    >
      <span>{title}</span>
      {length > 1 && (
        <div
          className="Button"
          onClick={close}
          title="Close tab"
          aria-label="Close tab"
        >
          <MdClose className="Icon" aria-hidden="true" />
        </div>
      )}
    </ContextMenuTrigger>
  );
}
