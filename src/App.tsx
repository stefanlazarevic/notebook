import React from "react";
import { Container, Section, Bar } from "react-simple-resizer";
import AutoSizer from "react-virtualized-auto-sizer";

import "./App.css";

import AppHeader from "./components/AppHeader/AppHeader";
import Navigator from "./components/Navigator";
import AppEditorContainer from "./components/AppEditor";
import OverlayContainer from "./components/Overlay";
import RecordPrintContainer from "./components/RecordPrint";
import NotesTable from "./components/NotesTable/NotesTable";
import Aside from "./components/Aside/Aside";
import TableMenu from "./components/ContextMenu/TableMenu/TableMenu";
import FolderMenu from "./components/ContextMenu/FolderMenu/FolderMenu";
import FileMenu from "./components/ContextMenu/FileMenu/FileMenu";

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
                  <NotesTable />
                </Section>
              </Container>
            )}
          </AutoSizer>
        </div>
        <OverlayContainer />
        <TableMenu />
        <FolderMenu />
        <FileMenu />
      </div>
      <RecordPrintContainer />
    </>
  );
}

export default App;
