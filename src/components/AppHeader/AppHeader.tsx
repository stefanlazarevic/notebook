import React from "react";

import "./AppHeader.css";

import AppHeaderProps from "./AppHeaderProps";
import AppHeaderMenu from "./components/AppHeaderMenu";

export default function AppHeader(props: AppHeaderProps) {
  return (
    <header id="AppHeader" className="AppHeader">
      <h1 className="AppHeader__title">Notebook</h1>
      <AppHeaderMenu />
    </header>
  );
}
