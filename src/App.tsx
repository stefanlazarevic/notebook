import React from "react";

import "./App.css";

import AppHeader from "./components/AppHeader/AppHeader";
import Navigator from "./components/Navigator";
import AppEditorContainer from "./components/AppEditor";
// import SettingsDrawerContainer from "./components/SettingsDrawer/SettingsDrawerContainer";
import NotesContainer from "./components/Notes";
import OverlayContainer from "./components/Overlay";
import RecordPrintContainer from "./components/RecordPrint";
import NotesTable from "./components/NotesTable/NotesTable";

function App() {
  return (
    <>
      <div className="App react-no-print">
        <AppHeader />
        <Navigator />
        {/* Test component */}
        <AppEditorContainer />
        {/* Test component */}
        {/* <SettingsDrawerContainer /> */}
        {/* Test component */}
        {/* <NotesContainer /> */}
        <NotesTable />
        <OverlayContainer />
      </div>
      <RecordPrintContainer />
    </>
  );
}

export default App;
