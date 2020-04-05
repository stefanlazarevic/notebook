import React from "react";

import BreadcrumbElement from "../../../../../UI/Breadcrumb/components/BreadcrumbElement/BreadcrumbElement";
import { useDispatch } from "react-redux";
import Path from "../../../../../../redux/drive/Path";
import { openDirectory } from "../../../../../../redux/drive/DriveActions";

export default function Step(props: any) {
  const dispatch = useDispatch();

  const name = Path.basename(props.path);

  console.log(name);

  function onClick() {
    dispatch(openDirectory(props.path));
  }

  return (
    <BreadcrumbElement
      tabIndex={props.tabIndex}
      role="link"
      title={name}
      onClick={onClick}
    >
      {name}
    </BreadcrumbElement>
  );
}
