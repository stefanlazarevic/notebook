import React from "react";

import "./DocumentEditor.css";

import IDocumentEditorProps from "./DocumentEditorProps";

import FontSizeContextProvider from "./context/providers/FontSizeContext";
import ZoomContextProvider from "./context/providers/ZoomContext";
import EditorStateContextProvider from "./context/providers/EditorStateContext";

import EditorConsumer from "./context/consumers/EditorConsumer";

import StatusBar from "./components/StatusBar/StatusBar";
import Header from "./components/Header/Header";
import DocumentNameContextProvider from "./context/providers/DocumentNameContext";

export default function DocumentEditor(props: IDocumentEditorProps) {
  return (
    <section
      className={
        props.className ? `DocumentEditor ${props.className}` : "DocumentEditor"
      }
    >
      <DocumentNameContextProvider name={props.name}>
        <Header />
      </DocumentNameContextProvider>
      <EditorStateContextProvider editorState={props.editorState}>
        <ZoomContextProvider>
          <FontSizeContextProvider>
            <EditorConsumer />
          </FontSizeContextProvider>
          <StatusBar />
        </ZoomContextProvider>
      </EditorStateContextProvider>
    </section>
  );
}
