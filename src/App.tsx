import React from "react";

import "./App.css";

import AppHeader from "./components/AppHeader/AppHeader";
import NavigatorContainer from "./components/Navigator";
import AppEditorContainer from "./components/AppEditor";
// import SettingsDrawerContainer from "./components/SettingsDrawer/SettingsDrawerContainer";
import NotesContainer from "./components/Notes";
import OverlayContainer from "./components/Overlay";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <NavigatorContainer />
      {/* Test component */}
      <AppEditorContainer />
      {/* Test component */}
      {/* <SettingsDrawerContainer /> */}
      {/* Test component */}
      <NotesContainer />
      <OverlayContainer />
    </div>
  );
}

export default App;
