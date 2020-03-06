import React from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatStrikethrough,
  MdFormatClear
} from "react-icons/md";

import "./EditorControls.css";

import { EditorControlButton } from "../EditorControlButton/EditorControlButton";
import { EditorCommand } from "../../layout/Editor/Commands";
import { EditorControlsProps } from "./EditorControlsProps";

export default function EditorControls(props: EditorControlsProps) {
  function handleControlButtonClick(
    event: React.MouseEvent,
    command: EditorCommand
  ) {
    event.preventDefault();

    if (typeof props.onClick === "function") {
      props.onClick(command);
    }
  }

  return (
    <div className="EditorControls">
      <EditorControlButton
        command={EditorCommand.BOLD}
        onClick={handleControlButtonClick}
        title="Bold"
        active={Boolean(props.inlineStyles?.has("BOLD"))}
        tabIndex={-1}
      >
        <MdFormatBold />
      </EditorControlButton>
      <EditorControlButton
        command={EditorCommand.ITALIC}
        onClick={handleControlButtonClick}
        title="Italic"
        active={Boolean(props.inlineStyles?.has("ITALIC"))}
        tabIndex={-1}
      >
        <MdFormatItalic />
      </EditorControlButton>
      <EditorControlButton
        command={EditorCommand.UNDERLINE}
        onClick={handleControlButtonClick}
        title="Underline"
        active={Boolean(props.inlineStyles?.has("UNDERLINE"))}
        tabIndex={-1}
      >
        <MdFormatUnderlined />
      </EditorControlButton>
      <EditorControlButton
        command={EditorCommand.STRIKETHROUGH}
        onClick={handleControlButtonClick}
        title="Strikethrough"
        active={Boolean(props.inlineStyles?.has("STRIKETHROUGH"))}
        tabIndex={-1}
      >
        <MdFormatStrikethrough />
      </EditorControlButton>
      <EditorControlButton
        command={EditorCommand.CLEAR}
        onClick={handleControlButtonClick}
        title="Clear formatting"
        active={false}
        tabIndex={-1}
      >
        <MdFormatClear />
      </EditorControlButton>
    </div>
  );
}
