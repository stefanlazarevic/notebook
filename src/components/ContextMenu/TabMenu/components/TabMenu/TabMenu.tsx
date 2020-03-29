import React, { forwardRef } from "react";
import { Menu, Item, Separator } from "react-contexify";
import { useDispatch, useSelector } from "react-redux";
import { createNewTab } from "../../../../../redux/tabs/actions";
import { AppState } from "../../../../../redux/types";

export default forwardRef((props: any, ref) => {
  const dispatch = useDispatch();

  const length = useSelector((state: AppState) => state.tabs.records.length);

  function newTab() {
    dispatch(createNewTab());
  }

  function duplicate({ event, props: forwardedProps }: any) {
    event.stopPropagation();

    if (typeof forwardedProps.duplicate === "function") {
      forwardedProps.duplicate();
    }
  }

  function closeTab({ event, props: forwardedProps }: any) {
    event.stopPropagation();

    if (typeof forwardedProps.close === "function") {
      forwardedProps.close();
    }
  }

  function closeOtherTabs({ event, props: forwardedProps }: any) {
    event.stopPropagation();

    if (typeof forwardedProps.closeOther === "function") {
      forwardedProps.closeOther();
    }
  }

  function closeAfter({ event, props: forwardedProps }: any) {
    event.stopPropagation();

    if (typeof forwardedProps.closeAfter === "function") {
      forwardedProps.closeAfter();
    }
  }

  return (
    <Menu id={`TabContextMenu-${props.id}-${props.index}`}>
      <Item onClick={newTab}>New Tab</Item>
      <Item onClick={duplicate}>Duplicate</Item>
      <Separator />
      <Item disabled={length < 2} onClick={closeTab}>
        Close Tab
      </Item>
      <Item disabled={length < 2} onClick={closeOtherTabs}>
        Close other tabs
      </Item>
      <Item disabled={length < 2} onClick={closeAfter}>
        Close tabs to the right
      </Item>
    </Menu>
  );
});
