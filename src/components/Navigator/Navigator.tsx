import React from "react";

import "./Navigator.css";
import BackButton from "./components/BackButton/BackButton";
import { HomeButton } from "./components/HomeButton/HomeButton";

export default function Navigator(props: any) {
  function goBack() {
    if (typeof props.openParentGroup === "function") {
      props.openParentGroup(props.currentGroupID);
    }
  }

  function goHome() {
    if (typeof props.openGroup === "function") {
      props.openGroup("root");
    }
  }

  return (
    <div className="Navigator" data-open={props.open}>
      <BackButton onClick={goBack} />
      <HomeButton onClick={goHome} />
    </div>
  );
}
