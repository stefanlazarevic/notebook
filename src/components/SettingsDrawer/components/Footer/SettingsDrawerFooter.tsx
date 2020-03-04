import React from "react";

import "./SettingsDrawerFooter.css";

export default function SettingsDrawerFooter(props: any) {
  return (
    <footer className="SettingsDrawerFooter">
      <button className="SettingsDrawerFooter__button apply">
        <span>Apply</span>
      </button>
      <button className="SettingsDrawerFooter__button reset">
        <span>Reset</span>
      </button>
    </footer>
  );
}
