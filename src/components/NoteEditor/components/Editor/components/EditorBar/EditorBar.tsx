import React from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdStrikethroughS,
  MdFormatClear
} from "react-icons/md";

import "./EditorBar.css";

import EditorBarButton from "./components/Button/EditorBarButton";
import { EditorInlineStyleTypes } from "../../StyleMap";
import { EditorBarProps } from "./EditorBarProps";

export default function EditorBar(props: EditorBarProps) {
  function handleButtonClick(
    event: React.MouseEvent,
    action?: EditorInlineStyleTypes
  ) {
    if (typeof props.onAction === "function") {
      props.onAction(event, action);
    }
  }

  return (
    <div id="EditorBar" className="EditorBar">
      <EditorBarButton
        onClick={handleButtonClick}
        action={EditorInlineStyleTypes.BOLD}
        title="Bold"
        active={props.currentInlineStyles.has(EditorInlineStyleTypes.BOLD)}
      >
        <MdFormatBold />
      </EditorBarButton>
      <EditorBarButton
        onClick={handleButtonClick}
        action={EditorInlineStyleTypes.ITALIC}
        title="Italic"
        active={props.currentInlineStyles.has(EditorInlineStyleTypes.ITALIC)}
      >
        <MdFormatItalic />
      </EditorBarButton>
      <EditorBarButton
        onClick={handleButtonClick}
        action={EditorInlineStyleTypes.UNDERLINE}
        title="Underline"
        active={props.currentInlineStyles.has(EditorInlineStyleTypes.UNDERLINE)}
      >
        <MdFormatUnderlined />
      </EditorBarButton>
      <EditorBarButton
        onClick={handleButtonClick}
        action={EditorInlineStyleTypes.STRIKETHROUGH}
        title="Strikethrough"
        active={props.currentInlineStyles.has(
          EditorInlineStyleTypes.STRIKETHROUGH
        )}
      >
        <MdStrikethroughS />
      </EditorBarButton>
      <EditorBarButton onClick={props.onReset} title="Clear formatting">
        <MdFormatClear />
      </EditorBarButton>
    </div>
  );
}
