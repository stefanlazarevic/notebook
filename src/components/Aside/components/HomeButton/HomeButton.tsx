import React from "react";
import { useDispatch } from "react-redux";
import { FiHardDrive } from "react-icons/fi";

import AsideButton from "../Button/AsideButton";
import { openGroup } from "../../../../redux/notes/actions";

export default function HomeButton(props: any) {
  const dispatch = useDispatch();

  function goHome() {
    dispatch(openGroup("root"));
  }

  return (
    <AsideButton onClick={goHome}>
      <FiHardDrive />
      <span>My Drive</span>
    </AsideButton>
  );
}
