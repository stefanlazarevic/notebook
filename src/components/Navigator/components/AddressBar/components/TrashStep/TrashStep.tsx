import React from "react";
import { useDispatch } from "react-redux";
import { FiTrash2 } from "react-icons/fi";

import BreadcrumbElement from "../../../../../UI/Breadcrumb/components/BreadcrumbElement/BreadcrumbElement";
import { openTrashDirectory } from "../../../../../../redux/drive/DriveActions";

export default function TrashStep(props: any) {
  const dispatch = useDispatch();

  const label = "Open trash";

  function open() {
    dispatch(openTrashDirectory());
  }

  return (
    <BreadcrumbElement
      onClick={open}
      tabIndex={props.tabIndex}
      role="link"
      title={label}
      aria-label={label}
    >
      <FiTrash2 aria-hidden={true} />
    </BreadcrumbElement>
  );
}
