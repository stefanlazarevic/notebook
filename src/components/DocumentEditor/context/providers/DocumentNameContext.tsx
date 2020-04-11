import React, { createContext, useState } from "react";

export const DocumentNameContext = createContext<any>(undefined);

export default function DocumentNameContextProvider(props: any) {
  const [name, setName] = useState(props.name);

  return (
    <DocumentNameContext.Provider value={[name, setName]}>
      {props.children}
    </DocumentNameContext.Provider>
  );
}
