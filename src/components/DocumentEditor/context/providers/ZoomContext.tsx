import React, { createContext, useReducer } from "react";

export const ZoomContext = createContext<any>(undefined);

export default function ZoomContextProvider(props: any) {
  const [zoom, dispatch] = useReducer(zoomReducer, 100);

  function zoomReducer(state: number, action: any) {
    const { type, payload } = action;

    switch (type) {
      case "ZOOM_IN":
        return state + payload;
      case "ZOOM_OUT":
        return state - payload;
      default:
        return state;
    }
  }

  return (
    <ZoomContext.Provider value={[zoom, dispatch]}>
      {props.children}
    </ZoomContext.Provider>
  );
}
