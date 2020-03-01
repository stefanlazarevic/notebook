import React from "react";

import "./App.css";

import NoteEditorContainer from "./components/NoteEditor/NoteEditorContainer";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader />
      {/* Test component */}
      <NoteEditorContainer />
    </div>
  );
}

export default App;
