import React from "react";

import "./AppHeader.css";
import AppHeaderControls from "./components/AppHeaderControls";

export default function AppHeader(props: any) {
  return (
    <header id="AppHeader" className="AppHeader">
      <h1 className="AppHeader__title">Notebook</h1>
      <AppHeaderControls />
    </header>
  );
}
