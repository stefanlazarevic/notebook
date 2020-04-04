import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";

import AsideButton from "../Button/AsideButton";
import { openTrashDirectory } from "../../../../redux/drive/DriveActions";

export default function TrashButton(props: any) {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(openTrashDirectory());
  }

  return (
    <AsideButton onClick={onClick}>
      <FiTrash2 />
      <span>Recycle</span>
    </AsideButton>
  );
}
