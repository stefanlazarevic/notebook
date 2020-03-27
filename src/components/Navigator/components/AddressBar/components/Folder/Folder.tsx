import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadcrumbElement from "../../../../../UI/Breadcrumb/components/BreadcrumbElement/BreadcrumbElement";
import { openGroup } from "../../../../../../redux/notes/actions";
import { AppState } from "../../../../../../redux/types";
import { MdComputer } from "react-icons/md";

export default function Folder(props: any) {
  const dispatch = useDispatch();

  const title = useSelector(
    (state: AppState) => state.notes.groups[props.id].title
  );

  function open() {
    dispatch(openGroup(props.id));
  }

  return (
    <BreadcrumbElement onClick={open}>
      {props.id === "root" ? <MdComputer /> : <span>{title}</span>}
    </BreadcrumbElement>
  );
}
