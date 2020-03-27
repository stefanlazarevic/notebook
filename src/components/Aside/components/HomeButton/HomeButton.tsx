import React from "react";
import AsideButton from "../Button/AsideButton";
import { MdHome } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../redux/types";
import { openGroup } from "../../../../redux/notes/actions";

export default function HomeButton(props: any) {
  const dispatch = useDispatch();

  const isHome = useSelector(
    (state: AppState) => state.notes.currentGroupID === "root"
  );

  function goHome() {
    dispatch(openGroup("root"));
  }

  return (
    <AsideButton active={isHome} onClick={goHome} className="AsideItem">
      <MdHome />
      <span>Home</span>
    </AsideButton>
  );
}
