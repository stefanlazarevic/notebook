import React from "react";

export type NoteEditorHeaderButtonProps = {
  children?: React.ReactNode;
  title?: string;

  /** Fallback property which is used when component children's are absent. */
  text?: string;
  tabIndex?: number;

  onClick: () => void;
};
