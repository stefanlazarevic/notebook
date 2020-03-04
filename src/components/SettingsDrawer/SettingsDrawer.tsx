import React from "react";

import "./SettingsDrawer.css";

import SettingsDrawerHeader from "./components/Header/SettingsDrawerHeader";
import SettingsDrawerFooter from "./components/Footer/SettingsDrawerFooter";

export default function SettingsDrawer(props: any) {
  return (
    <div className="SettingsDrawer">
      <div className="SettingsDrawer__container">
        <SettingsDrawerHeader />
        {/* FormComponent */}
        <div style={{ flex: 1 }} />
        <SettingsDrawerFooter />
      </div>
    </div>
  );
}
