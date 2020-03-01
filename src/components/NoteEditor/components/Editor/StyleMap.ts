export enum EditorInlineStyleTypes {
  STRIKETHROUGH = "STRIKETHROUGH",
  BOLD = "BOLD",
  ITALIC = "ITALIC",
  UNDERLINE = "UNDERLINE",
  CODE = "CODE",
  HIGHLIGHT = "HIGHLIGHT"
}

export const customStyleMap = {
  [EditorInlineStyleTypes.STRIKETHROUGH]: {
    textDecoration: "line-through"
  },
  [EditorInlineStyleTypes.HIGHLIGHT]: {
    backgroundColor: "#b2ffb2"
  }
};

export const INLINE_STYLES = [
  EditorInlineStyleTypes.STRIKETHROUGH,
  EditorInlineStyleTypes.BOLD,
  EditorInlineStyleTypes.ITALIC,
  EditorInlineStyleTypes.UNDERLINE,
  EditorInlineStyleTypes.CODE,
  EditorInlineStyleTypes.HIGHLIGHT
];
