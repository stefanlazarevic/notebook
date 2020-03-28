import React from "react";

import "./Ribbon.css";

import ItemCounter from "./components/ItemCounter/ItemCounter";

export default function Ribbon(props: any) {
  return (
    <div className="Ribbon">
      <ItemCounter length={props.length} />
    </div>
  );
}
