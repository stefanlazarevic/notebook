import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";
import { useDispatch, useSelector } from "react-redux";
import { createNewTab } from "../../../redux/tabs/actions";
import { AppState } from "../../../redux/types";

export default function TabMenu(props: any) {
  const dispatch = useDispatch();

  const length = useSelector((state: AppState) => state.tabs.records.length);

  function newTab() {
    dispatch(createNewTab());
  }

  function duplicate(event: React.MouseEvent, data: any) {
    if (typeof data.duplicate === "function") {
      data.duplicate();
    }
  }

  function closeTab(event: React.MouseEvent, data: any) {
    if (typeof data.close === "function") {
      data.close();
    }
  }

  function closeOtherTabs(event: React.MouseEvent, data: any) {
    if (typeof data.closeOther === "function") {
      data.closeOther();
    }
  }

  function closeAfter(event: React.MouseEvent, data: any) {
    if (typeof data.closeAfter === "function") {
      data.closeAfter();
    }
  }

  return (
    <ContextMenu id="tab-menu">
      <MenuItem onClick={newTab}>New Tab</MenuItem>
      <MenuItem onClick={duplicate}>Duplicate</MenuItem>
      <MenuItem divider />
      <MenuItem disabled={length < 2} onClick={closeTab}>
        Close Tab
      </MenuItem>
      <MenuItem disabled={length < 2} onClick={closeOtherTabs}>
        Close other tabs
      </MenuItem>
      <MenuItem disabled={length < 2} onClick={closeAfter}>
        Close tabs to the right
      </MenuItem>
    </ContextMenu>
  );
}
