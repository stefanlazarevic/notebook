import React, { useContext } from "react";

import { DocumentNameContext } from "../providers/DocumentNameContext";

import DocumentName from "../../components/DocumentName";

export default function DocumentNameConsumer() {
  const [name, setName] = useContext(DocumentNameContext);

  function updateName(
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) {
    setName(value);
  }

  return <DocumentName name={name} onChange={updateName} />;
}
