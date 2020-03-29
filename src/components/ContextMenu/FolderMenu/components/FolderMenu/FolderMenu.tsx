import React, { forwardRef } from "react";
import { Menu, Item, Separator } from "react-contexify";
import { useSelector } from "react-redux";

import { AppState } from "../../../../../redux/types";
import utils from "../../../../../utils";

export default forwardRef((props: any, ref: any) => {
  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const parentGroupID = useSelector((state: AppState) =>
    utils.array.last(state.notes.groups[currentGroupId].path)
  );

  const hasChildren = useSelector(
    (state: AppState) => state.notes.groups[props.id].children.length > 0
  );

  const isFavorite = useSelector(
    (state: AppState) => state.notes.groups[props.id].favorite
  );

  function click({ event, forwardedProps }: any) {
    event.stopPropagation();
  }

  function open({ event, props: forwardedProps }: any) {
    event.stopPropagation();

    if (typeof forwardedProps.open === "function") {
      forwardedProps.open();
    }
  }

  function openInNewTab({ event, props: forwardedProps }: any) {
    event.stopPropagation();

    if (typeof forwardedProps.openInNewTab === "function") {
      forwardedProps.openInNewTab();
    }
  }

  function toggleFavorite({ event, props: forwardedProps }: any) {
    event.stopPropagation();

    if (typeof forwardedProps.toggleFavorite === "function") {
      forwardedProps.toggleFavorite();
    }
  }

  function rename({ event, props: forwardedProps }: any) {
    event.stopPropagation();

    if (typeof forwardedProps.rename === "function") {
      forwardedProps.rename();
    }
  }

  function ungroup({ event, props: forwardedProps }: any) {
    event.stopPropagation();

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
      <Item onClick={openInNewTab}>Open in new tab</Item>
      <Separator />
      <Item onClick={toggleFavorite}>
        {isFavorite ? "Remove from favorite" : "Add to favorite"}
      </Item>
      <Separator />
      <Item disabled={true} onClick={click}>
        Copy
      </Item>
      <Item disabled={true} onClick={click}>
        Cut
      </Item>
      <Item onClick={rename}>Rename</Item>
      <Separator />
      <Item disabled={!Boolean(parentGroupID)} onClick={ungroup}>
        Ungroup
      </Item>
      <Separator />
      <Item disabled={hasChildren} onClick={remove}>
        Remove
      </Item>
    </Menu>
  );
});
