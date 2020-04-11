import React, { createContext, useReducer } from "react";

export const FontSizeContext = createContext<any>(undefined);

export default function FontSizeContextProvider(props: any) {
  const [fontSize, dispatch] = useReducer(fontSizeReducer, 16);

  function fontSizeReducer(state: number, action: any) {
    const { type, payload } = action;

    switch (type) {
      case "CHANGE":
        return payload;
      default:
        return state;
    }
  }

  return (
    <FontSizeContext.Provider value={[fontSize, dispatch]}>
      {props.children}
    </FontSizeContext.Provider>
  );
}
