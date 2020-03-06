import React from "react";

import "./App.css";

import AppHeader from "./components/AppHeader/AppHeader";
import AppEditorContainer from './components/AppEditor';

function App() {
  return (
    <div className="App">
      <AppHeader />
      {/* Test component */}
      <AppEditorContainer />
      {/* Test component */}
      {/* <SettingsDrawerContainer /> */}
    </div>
  );
}

export default App;
