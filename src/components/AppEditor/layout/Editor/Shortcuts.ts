import { getDefaultKeyBinding } from "draft-js";
import { EditorCommand } from "./Commands";

export interface IKeycodeMap {
  [keyCode: number]: string;
}

export const KeycodeMap: IKeycodeMap = {
  66: "b",
  67: "c",
  73: "i",
  83: "s",
  85: "u",
  87: "y",
  97: "z"
};

export function keyBindingFunction(
  event: React.KeyboardEvent<any>
): string | null {
  const isControlKey = event.ctrlKey;
  const isShiftKey = event.shiftKey;
  const keyCode = event.keyCode;
  const key: string | undefined = KeycodeMap[keyCode];

  if (isControlKey && key === "b") {
    return EditorCommand.BOLD;
  }

  if (isControlKey && key === "i") {
    return EditorCommand.ITALIC;
  }

  if (isControlKey && key === "u") {
    return EditorCommand.UNDERLINE;
  }

  // Control + Shift + S has higher priority in actions than Control + S. (FizzBuzz issue)
  if (isControlKey && isShiftKey && key === "s") {
    return EditorCommand.STRIKETHROUGH;
  }

  if (isControlKey && key === "s") {
    return EditorCommand.SAVE;
  }

  if (isControlKey && key === "z") {
    return EditorCommand.UNDO;
  }

  if (isControlKey && key === "y") {
    return EditorCommand.REDO;
  }

  if (isControlKey && isShiftKey && key === "c") {
    return EditorCommand.CLEAR;
  }

  return getDefaultKeyBinding(event);
}
