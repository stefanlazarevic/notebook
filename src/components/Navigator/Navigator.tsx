import React from "react";

import "./Navigator.css";

import HomeButton from "./components/HomeButton/HomeButton";
import BackButton from "./components/BackButton/BackButton";
import AddressBar from "./components/AddressBar/AddressBar";
import HelpButton from "./components/HelpButton/HelpButton";

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
