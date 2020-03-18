import React from "react";

import "./Navigator.css";
import BackButton from "./components/BackButton/BackButton";
import { HomeButton } from "./components/HomeButton/HomeButton";
import { useDispatch, useSelector } from "react-redux";
import { openParentGroup, openGroup } from "../../redux/notes/actions";
import { NavigatorProps } from "./NavigatorProps";
import { AppState } from "../../redux/types";

export default function Navigator(props: NavigatorProps) {
  const dispatch = useDispatch();

  const currentGroupID = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const parentGroupID = useSelector(
    (state: AppState) => state.notes.groups[currentGroupID].parent
  );

  function goBack() {
    dispatch(openParentGroup(currentGroupID));
  }

  function goHome() {
    dispatch(openGroup("root"));
  }

  return (
    <div className="Navigator" data-open={Boolean(parentGroupID)}>
      <BackButton onClick={goBack} />
      <HomeButton onClick={goHome} />
    </div>
  );
}
