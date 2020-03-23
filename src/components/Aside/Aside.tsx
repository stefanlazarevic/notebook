import React from "react";

import "./Aside.css";
import { useDispatch, useSelector } from "react-redux";
import { openGroup } from "../../redux/notes/actions";
import { AppState } from "../../redux/types";
import AsideButton from "./components/Button/AsideButton";
import { MdHome } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import AsideDivider from "./components/Divider/AsideDivider";

export default function Aside(props: any) {
  const dispatch = useDispatch();

  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  function navigateToHome() {
    dispatch(openGroup("root"));
  }

  return (
    <div className="Aside">
      <AsideButton
        className="AsideItem"
        onClick={navigateToHome}
        active={currentGroupId === "root"}
      >
        <MdHome />
        <span>Home</span>
      </AsideButton>
      <AsideButton className="AsideItem">
        <FiTrash />
        <span>Recycle</span>
      </AsideButton>
      <AsideDivider />
    </div>
  );
}
