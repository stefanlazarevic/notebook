import React from "react";

import "./Aside.css";

import QuickAccess from "./components/QuickAccess/QuickAccess";
import Favorites from "./components/Favorites/Favorites";

export default function Aside(props: any) {
  return (
    <div className="Aside">
      <QuickAccess />
      <Favorites />
    </div>
  );
}
