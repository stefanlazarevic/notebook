import React from "react";

import "./Navigator.css";
import BackButton from "./components/BackButton/BackButton";

export default function Navigator(props: any) {
  function goBack() {
    if (typeof props.openParentGroup === "function") {
      props.openParentGroup(props.currentGroupID);
    }
  }

  return (
    <div className="Navigator" data-open={props.open}>
      <BackButton onClick={goBack} />
    </div>
  );
}
