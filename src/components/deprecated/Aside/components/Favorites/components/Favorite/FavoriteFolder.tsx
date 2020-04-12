import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaFolder } from "react-icons/fa";

import AsideButton from "../../../Button/AsideButton";
import { AppState } from "../../../../../../redux/types";
import { openGroup } from "../../../../../../redux/notes/actions";

export default function FavoriteFolder(props: any) {
  const dispatch = useDispatch();

  const title = useSelector(
    (state: AppState) => state.notes.groups[props.id].title
  );

  function open() {
    dispatch(openGroup(props.id));
  }

  return (
    <AsideButton
      className="FavoriteFolder"
      style={props.style}
      onClick={open}
      title={title}
    >
      <FaFolder aria-hidden={true} />
      <span>{title}</span>
    </AsideButton>
  );
}
