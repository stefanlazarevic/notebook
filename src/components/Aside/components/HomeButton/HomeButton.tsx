import React from "react";
import { useDispatch } from "react-redux";
import { FiHardDrive } from "react-icons/fi";

import AsideButton from "../Button/AsideButton";
import { openRootDirectory } from "../../../../redux/drive/DriveActions";

export default function HomeButton(props: any) {
  const dispatch = useDispatch();

  function goHome() {
    dispatch(openRootDirectory());
  }

  return (
    <AsideButton onClick={goHome}>
      <FiHardDrive />
      <span>My Drive</span>
    </AsideButton>
  );
}
