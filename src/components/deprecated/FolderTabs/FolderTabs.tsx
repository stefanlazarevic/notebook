import React from "react";
import { useSelector } from "react-redux";

import "./FolderTabs.css";

import { AppState } from "../../redux/types";
import Tab from "./components/Tab";
import NewTabButton from "./components/NewTabButton";

export default function FolderTabs() {
  const length = useSelector((state: AppState) => state.tabs.records.length);

  return (
    <div className="FolderTabs">
      {React.Children.map(Array.from({ length }), (_: any, index: number) => {
        return <Tab index={index} />;
      })}
      <NewTabButton />
    </div>
  );
}
