import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
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

const Editor = forwardRef((props: any, ref: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const draftEditorRef = useRef<any>();

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

  useImperativeHandle(ref, () => ({
    getPlainText() {
      return editorState.getCurrentContent().getPlainText();
    },
    focus() {
      draftEditorRef.current.focus();
    },
    blur() {
      draftEditorRef.current.blur();
    }
  }));

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
          ref={draftEditorRef}
          editorState={editorState}
          onChange={setEditorState}
          customStyleMap={customStyleMap}
        />
      </div>
    </div>
  );
});

export default Editor;
