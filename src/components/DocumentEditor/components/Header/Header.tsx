import React from "react";

import DocumentNameConsumer from "../../context/consumers/DocumentNameConsumer";

import IHeaderProps from "./HeaderProps";
import { CloseButton } from "../../../Button";

export default function Header(props: IHeaderProps) {
  return (
    <header className="Header">
      <DocumentNameConsumer />
      <CloseButton size={26} />
    </header>
  );
}
