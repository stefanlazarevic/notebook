import React from "react";
import { useDispatch } from "react-redux";
import { MdHome } from "react-icons/md";

import "./HomeButton.css";

import { openGroup } from "../../../../redux/notes/actions";

export default function HomeButton(props: any) {
  const dispatch = useDispatch();

  function goHome() {
    dispatch(openGroup("root"));
  }

  return (
    <button className="HomeButton" onClick={goHome} title="Back to root">
      <MdHome />
    </button>
  );
}
