import React, { useState } from "react";
import { Editor as DraftEditor, EditorState, RichUtils } from "draft-js";

import "./Editor.css";

import EditorBar from "./components/EditorBar/EditorBar";
import {
  customStyleMap,
  BOLD,
  ITALIC,
  UNDERLINE,
  STRIKETHROUGH
} from "./StyleMap";

export default function Editor(props: any) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function handleContentBold(event?: React.MouseEvent) {
    if (event) {
      event.preventDefault();
    }

    setEditorState(RichUtils.toggleInlineStyle(editorState, BOLD));
  }

  function handleContentItalic(event?: React.MouseEvent) {
    if (event) {
      event.preventDefault();
    }

    setEditorState(RichUtils.toggleInlineStyle(editorState, ITALIC));
  }

  function handleContentUnderline(event?: React.MouseEvent) {
    if (event) {
      event.preventDefault();
    }

    setEditorState(RichUtils.toggleInlineStyle(editorState, UNDERLINE));
  }

  function handleContentStrikethrought(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    setEditorState(RichUtils.toggleInlineStyle(editorState, STRIKETHROUGH));
  }

  return (
    <div id="Editor" className="Editor">
      <div className="EditorBar__wrapper">
        <EditorBar
          onBold={handleContentBold}
          onItalic={handleContentItalic}
          onUnderline={handleContentUnderline}
          onStrikethrough={handleContentStrikethrought}
        />
      </div>
      <div className="DraftEditor__wrapper">
        <DraftEditor
          editorState={editorState}
          onChange={setEditorState}
          customStyleMap={customStyleMap}
        />
      </div>
    </div>
  );
}
