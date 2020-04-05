import React from "react";
import { Container, Section, Bar } from "react-simple-resizer";
import AutoSizer from "react-virtualized-auto-sizer";

import "./App.css";

import AppHeader from "./components/AppHeader";
import Navigator from "./components/Navigator";
import AppEditorContainer from "./components/AppEditor";
import OverlayContainer from "./components/Overlay";
import RecordPrintContainer from "./components/RecordPrint";
import Aside from "./components/Aside/Aside";
import FolderTabs from "./components/FolderTabs";
import Drive from "./components/Drive/Drive";

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
        <div className="AppPanel">
          <AutoSizer>
            {({ width, height }) => (
              <Container className="ResizeContainer" style={{ width, height }}>
                <Section
                  className="ResizeSection"
                  defaultSize={300}
                  maxSize={300}
                >
                  <Aside />
                </Section>
                <Bar size={5} className="ResizerBar" />
                <Section>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%"
                    }}
                  >
                    <Drive />
                    <FolderTabs />
                  </div>
                </Section>
              </Container>
            )}
          </AutoSizer>
        </div>
        <OverlayContainer />
      </div>
      <RecordPrintContainer />
    </>
  );
}

export default App;
