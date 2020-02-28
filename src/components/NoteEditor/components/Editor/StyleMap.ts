export const STRIKETHROUGH = "STRIKETHROUGH";
export const BOLD = "BOLD";
export const ITALIC = "ITALIC";
export const UNDERLINE = "UNDERLINE";
export const CODE = "CODE";
export const HIGHLIGHT = "HIGHLIGHT";

export const customStyleMap = {
  [STRIKETHROUGH]: {
    textDecoration: "line-through"
  },
  [HIGHLIGHT]: {
    backgroundColor: "#b2ffb2"
  }
};

export const STYLES = [STRIKETHROUGH, BOLD, ITALIC, UNDERLINE, CODE, HIGHLIGHT];
