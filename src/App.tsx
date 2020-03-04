import React from "react";

import "./App.css";

import NoteEditorContainer from "./components/NoteEditor/NoteEditorContainer";
import AppHeader from "./components/AppHeader/AppHeader";
import SettingsDrawerContainer from "./components/SettingsDrawer/SettingsDrawerContainer";

function App() {
  return (
    <div className="App">
      <AppHeader />
      {/* Test component */}
      <NoteEditorContainer />
      {/* Test component */}
      <SettingsDrawerContainer />
    </div>
  );
}

export default App;
