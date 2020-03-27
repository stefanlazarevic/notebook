import React from "react";

import BreadcrumbElement from "../../../../../UI/Breadcrumb/components/BreadcrumbElement/BreadcrumbElement";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../../../redux/types";
import { openGroup } from "../../../../../../redux/notes/actions";

export default function Step(props: any) {
  const dispatch = useDispatch();

  const title = useSelector(
    (state: AppState) => state.notes.groups[props.id].title
  );

  function onClick() {
    dispatch(openGroup(props.id));
  }

  return (
    <BreadcrumbElement
      tabIndex={props.tabIndex}
      role="link"
      title={title}
      onClick={onClick}
    >
      {title}
    </BreadcrumbElement>
  );
}
