import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import {
  Editor as DraftEditor,
  EditorState,
  RichUtils,
  Modifier,
  ContentState,
  convertToRaw,
  DraftInlineStyle,
  getDefaultKeyBinding,
  DraftEditorCommand,
  DraftHandleValue
} from "draft-js";

import "./Editor.css";

import EditorBar from "./components/EditorBar/EditorBar";
import {
  customStyleMap,
  EditorInlineStyleTypes,
  INLINE_STYLES
} from "./StyleMap";
import KeyCodeMap from "./KeyBindings";
import { NoteEditorCustomCommand } from "./CustomActions";

const Editor = forwardRef((props: any, ref: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const draftEditorRef = useRef<any>();

  function updateEditorState(newEditorState: EditorState) {
    setEditorState(newEditorState);

    if (typeof props.onChange === "function" && props.saved) {
      const equalContents = newEditorState
        .getCurrentContent()
        .getBlockMap()
        .equals(editorState.getCurrentContent().getBlockMap());

      if (!equalContents) {
        props.onChange();
      }
    }
  }

  function toggleInlineStyle(
    event?: React.MouseEvent,
    style?: EditorInlineStyleTypes
  ) {
    if (event) {
      event.preventDefault();
    }

    if (style) {
      updateEditorState(RichUtils.toggleInlineStyle(editorState, style));
    }
  }

  function clearInlineStyles(event: React.MouseEvent) {
    if (event) {
      event.preventDefault();
    }

    updateEditorState(
      EditorState.forceSelection(
        EditorState.createWithContent(
          INLINE_STYLES.reduce(
            (
              contentState: ContentState,
              INLINE_STYLE: EditorInlineStyleTypes
            ) => {
              return Modifier.removeInlineStyle(
                contentState,
                editorState.getSelection(),
                INLINE_STYLE
              );
            },
            editorState.getCurrentContent()
          )
        ),
        editorState.getSelection()
      )
    );
  }

  useImperativeHandle(ref, () => ({
    getPlainText() {
      return editorState.getCurrentContent().getPlainText();
    },
    getHTML() {
      return convertToRaw(editorState.getCurrentContent());
    },
    focus() {
      draftEditorRef.current.focus();
    },
    blur() {
      draftEditorRef.current.blur();
    }
  }));

  function focus() {
    if (draftEditorRef && draftEditorRef.current && editorState) {
      if (!editorState.getSelection().getHasFocus()) {
        updateEditorState(EditorState.moveFocusToEnd(editorState));
      }
    }
  }

  function getCurrentBlockStyles(): DraftInlineStyle {
    return editorState.getCurrentInlineStyle();
  }

  function keyBindingFn(event: React.KeyboardEvent<any>): string | null {
    const isControlKey = event?.ctrlKey;
    const isShiftKey = event?.shiftKey;
    const keyCode = event?.keyCode;
    const key = KeyCodeMap.get(keyCode);

    if (isControlKey && key === "b") {
      return EditorInlineStyleTypes.BOLD;
    }

    if (isControlKey && key === "i") {
      return EditorInlineStyleTypes.ITALIC;
    }

    if (isControlKey && key === "u") {
      return EditorInlineStyleTypes.UNDERLINE;
    }

    // Control + Shift + S has higher priority in actions than Control + S. (FizzBuzz issue)
    if (isControlKey && isShiftKey && key === "s") {
      return EditorInlineStyleTypes.STRIKETHROUGH;
    }

    if (isControlKey && key === "s") {
      return NoteEditorCustomCommand.SAVE;
    }

    if (isControlKey && key === "z") {
      return NoteEditorCustomCommand.UNDO;
    }

    if (isControlKey && key === "y") {
      return NoteEditorCustomCommand.REDO;
    }

    return getDefaultKeyBinding(event);
  }

  function handleKeyCommand(
    command:
      | DraftEditorCommand
      | EditorInlineStyleTypes
      | NoteEditorCustomCommand
      | string,
    editorState: EditorState
  ): DraftHandleValue {
    switch (command) {
      case EditorInlineStyleTypes.BOLD:
        toggleInlineStyle(undefined, EditorInlineStyleTypes.BOLD);
        return "handled";
      case EditorInlineStyleTypes.ITALIC:
        toggleInlineStyle(undefined, EditorInlineStyleTypes.ITALIC);
        return "handled";
      case EditorInlineStyleTypes.UNDERLINE:
        toggleInlineStyle(undefined, EditorInlineStyleTypes.UNDERLINE);
        return "handled";
      case EditorInlineStyleTypes.STRIKETHROUGH:
        toggleInlineStyle(undefined, EditorInlineStyleTypes.STRIKETHROUGH);
        return "handled";
      case NoteEditorCustomCommand.UNDO:
        updateEditorState(EditorState.undo(editorState));
        return "handled";
      case NoteEditorCustomCommand.REDO:
        updateEditorState(EditorState.redo(editorState));
        return "handled";
      case NoteEditorCustomCommand.SAVE:
        return "handled";
      default:
        return "not-handled";
    }
  }

  return (
    <div id="Editor" className="Editor" onClick={focus}>
      <div className="EditorBar__wrapper">
        <EditorBar
          onAction={toggleInlineStyle}
          onReset={clearInlineStyles}
          currentInlineStyles={getCurrentBlockStyles()}
        />
      </div>
      <div className="DraftEditor__wrapper">
        <DraftEditor
          ref={draftEditorRef}
          editorState={editorState}
          onChange={updateEditorState}
          customStyleMap={customStyleMap}
          keyBindingFn={keyBindingFn}
          handleKeyCommand={handleKeyCommand}
          spellCheck={props.spellCheck}
        />
      </div>
    </div>
  );
});

export default Editor;
