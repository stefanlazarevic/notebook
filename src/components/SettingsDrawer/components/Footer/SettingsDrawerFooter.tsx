import React from "react";

import "./SettingsDrawerFooter.css";

export default function SettingsDrawerFooter(props: any) {
  return (
    <footer className="SettingsDrawerFooter">
      <button
        className="SettingsDrawerFooter__button apply"
        onClick={props.onApply}
      >
        <span>Apply</span>
      </button>
      <button
        className="SettingsDrawerFooter__button reset"
        onClick={props.onReset}
      >
        <span>Reset</span>
      </button>
    </footer>
  );
}
