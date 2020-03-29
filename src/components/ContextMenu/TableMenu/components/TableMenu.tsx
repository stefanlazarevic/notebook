import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { Menu, Item } from "react-contexify";

import { showOverlay } from "../../../../redux/overlays/actions";
import { OverlayType } from "../../../../redux/overlays/types";
import { openEditor } from "../../../../redux/editor/actions";

export default forwardRef((props: any, ref) => {
  const dispatch = useDispatch();

  function createGroup({ event, props }: { event: any; props: any }) {
    event.preventDefault();

    dispatch(showOverlay(OverlayType.CREATE_GROUP));
  }

  function createRecord({ event, props }: { event: any; props: any }) {
    event.preventDefault();

    dispatch(openEditor());
  }

  return (
    <Menu id="table-menu">
      <Item onClick={createGroup}>Create Folder</Item>
      <Item onClick={createRecord}>Create Note</Item>
    </Menu>
  );
});
