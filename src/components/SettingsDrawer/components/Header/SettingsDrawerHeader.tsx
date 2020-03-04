import React from "react";
import { MdClose } from "react-icons/md";

import "./SettingsDrawerHeader.css";

export default function SettingsDrawerHeader(props: any) {
  return (
    <header className="SettingsDrawerHeader">
      <h3 className="SettingsDrawerHeader__title">Settings</h3>
      <button className="SettingsDrawerHeader__button">
        <MdClose />
      </button>
    </header>
  );
}
