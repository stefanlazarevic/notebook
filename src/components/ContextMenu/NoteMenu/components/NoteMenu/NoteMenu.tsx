import React from "react";
import { Menu, Item, Separator } from "react-contexify";
import { useSelector } from "react-redux";

import { AppState } from "../../../../../redux/types";
import utils from "../../../../../utils";

export default function NoteMenu(props: any) {
  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const parentGroupID = useSelector((state: AppState) =>
    utils.array.last(state.notes.groups[currentGroupId].path)
  );

  function open({ event, props: forwardedProps }: any) {
    event.preventDefault();

    if (typeof forwardedProps.open === "function") {
      forwardedProps.open();
    }
  }

  function print({ event, props: forwardedProps }: any) {
    event.preventDefault();

    if (typeof forwardedProps.print === "function") {
      forwardedProps.print();
    }
  }

  function rename({ event, props: forwardedProps }: any) {
    event.preventDefault();

    if (typeof forwardedProps.rename === "function") {
      forwardedProps.rename();
    }
  }

  function ungroup({ event, props: forwardedProps }: any) {
    event.preventDefault();

    if (typeof forwardedProps.ungroup === "function") {
      forwardedProps.ungroup();
    }
  }

  function remove({ event, props: forwardedProps }: any) {
    event.stopPropagation();

    if (typeof forwardedProps.remove === "function") {
      forwardedProps.remove();
    }
  }

  return (
    <Menu id={`ContextMenu-${props.id}`} className="react-no-print">
      <Item onClick={open}>Open</Item>
      <Item onClick={print}>Print</Item>
      <Separator />
      <Item disabled={true}>Copy</Item>
      <Item disabled={true}>Cut</Item>
      <Item onClick={rename}>Rename</Item>
      <Separator />
      <Item disabled={!Boolean(parentGroupID)} onClick={ungroup}>
        Ungroup
      </Item>
      <Separator />
      <Item onClick={remove}>Remove</Item>
    </Menu>
  );
}
