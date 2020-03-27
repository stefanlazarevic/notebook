import React from "react";

import "./Navigator.css";

import HomeButton from "./components/HomeButton";
import BackButton from "./components/BackButton";
import AddressBar from "./components/AddressBar";
import HelpButton from "./components/HelpButton";

export default function Navigator() {
  return (
    <div className="Navigator" data-open={true}>
      <BackButton />
      <HomeButton />
      <AddressBar />
      <HelpButton />
    </div>
  );
}
