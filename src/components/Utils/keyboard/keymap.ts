import Key from "./key";

const KeyMap = new Map<number, number>();

KeyMap.set(8, Key.BACKSPACE);
KeyMap.set(9, Key.TAB);
KeyMap.set(13, Key.ENTER);
KeyMap.set(27, Key.ESCAPE);
KeyMap.set(32, Key.SPACE);
KeyMap.set(33, Key.PAGE_UP);
KeyMap.set(34, Key.PAGE_DOWN);
KeyMap.set(35, Key.END);
KeyMap.set(36, Key.HOME);
KeyMap.set(37, Key.ARROW_LEFT);
KeyMap.set(38, Key.ARROW_UP);
KeyMap.set(39, Key.ARROW_RIGHT);
KeyMap.set(40, Key.ARROW_DOWN);
KeyMap.set(46, Key.DELETE);

export default KeyMap;
