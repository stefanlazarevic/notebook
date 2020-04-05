import React from "react";
import { useDispatch } from "react-redux";
import { MdCreateNewFolder } from "react-icons/md";

import Button from "../../../UI/Button";
import { showOverlay } from "../../../../redux/overlays/actions";
import { OverlayType } from "../../../../redux/overlays/types";

export default function CreateNewFolderButton() {
  const dispatch = useDispatch();

  const label = "Create Directory";

  function onClick() {
    dispatch(showOverlay(OverlayType.CREATE_DIRECTORY));
  }

  return (
    <Button onClick={onClick} title={label} aria-label={label}>
      <MdCreateNewFolder aria-hidden={true} />
    </Button>
  );
}
