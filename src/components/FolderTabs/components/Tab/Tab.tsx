import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";

import "./Tab.css";

import { AppState } from "../../../../redux/types";
import {
  openTab,
  closeTab,
  closeOtherTabs,
  createNewTab,
  closeTabsAfter
} from "../../../../redux/tabs/actions";
import { TabMenuTrigger, TabMenu } from "../../../ContextMenu/TabMenu";
import { openGroup } from "../../../../redux/notes/actions";
import Path from "../../../../redux/drive/Path";
import { openDirectory } from "../../../../redux/drive/DriveActions";

export default function Tab(props: any) {
  const dispatch = useDispatch();

  const path = useSelector(
    (state: AppState) => state.tabs.records[props.index]
  );

  const active = useSelector(
    (state: AppState) => state.tabs.currentTabIndex === props.index
  );

  const title = Path.basename(path);

  const length = useSelector((state: AppState) => state.tabs.records.length);

  function open(event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    dispatch(openTab(props.index));
  }

  function duplicate() {
    dispatch(createNewTab(path));
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

    dispatch(openDirectory(path));
  }

  function forwardDataToContextMenu() {
    return { duplicate, close, closeOther, closeAfter };
  }

  return (
    <>
      <TabMenuTrigger
        id={`${path}_${props.index}`}
        index={props.index}
        className={active ? "Tab active" : "Tab"}
        onClick={open}
        title={title}
        onDragOver={onDragOver}
        forwardDataToContextMenu={forwardDataToContextMenu}
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
      </TabMenuTrigger>
      <TabMenu id={`${path}_${props.index}`} index={props.index} />
    </>
  );
}
