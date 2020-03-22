import React from "react";
import { Container, Section, Bar } from "react-simple-resizer";
import AutoSizer from "react-virtualized-auto-sizer";

import "./App.css";

import AppHeader from "./components/AppHeader/AppHeader";
import Navigator from "./components/Navigator";
import AppEditorContainer from "./components/AppEditor";
// import SettingsDrawerContainer from "./components/SettingsDrawer/SettingsDrawerContainer";
// import NotesContainer from "./components/Notes";
import OverlayContainer from "./components/Overlay";
import RecordPrintContainer from "./components/RecordPrint";
import NotesTable from "./components/NotesTable/NotesTable";
import { MdHome, MdFolder } from "react-icons/md";
import { IoMdTrash, IoMdStar } from "react-icons/io";

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
              <Container style={{ width, height }}>
                <Section
                  style={{ background: "#27282d" }}
                  defaultSize={300}
                  maxSize={300}
                >
                  <div className="Aside">
                    <div className="AsideItem">
                      <MdHome /> Home
                    </div>
                    <div className="AsideItem">
                      <IoMdTrash /> Recycle
                    </div>
                    <hr />
                    <details className="AsideItem">
                      <summary>
                        <IoMdStar /> Favorites
                      </summary>
                      <div className="AsideItem">
                        <MdFolder /> Fakultet
                      </div>
                      <div className="AsideItem">
                        <MdFolder /> Ostalo
                      </div>
                    </details>
                  </div>
                </Section>
                <Bar
                  size={5}
                  style={{ background: "#888888", cursor: "col-resize" }}
                />
                <Section minSize={600}>
                  <NotesTable />
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
