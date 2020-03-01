import React from "react";

import "./AppHeader.css";
import { AppHeaderControlsContainer } from "./components/AppHeaderControls";

export default function AppHeader(props: any) {
  return (
    <header id="AppHeader" className="AppHeader">
      <h1 className="title">Notebook</h1>
      <AppHeaderControlsContainer />
    </header>
  );
}
