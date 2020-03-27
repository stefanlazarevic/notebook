import React from "react";
import { useDispatch } from "react-redux";
import { MdComputer } from "react-icons/md";

import BreadcrumbElement from "../../../../../UI/Breadcrumb/components/BreadcrumbElement/BreadcrumbElement";
import { openGroup } from "../../../../../../redux/notes/actions";

export default function RootStep(props: any) {
  const dispatch = useDispatch();

  const label = "Open root folder";

  function open() {
    dispatch(openGroup("root"));
  }

  return (
    <BreadcrumbElement onClick={open} title={label} aria-label={label}>
      <MdComputer aria-hidden={true} />
    </BreadcrumbElement>
  );
}
