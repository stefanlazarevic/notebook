import React from "react";

import "./Navigator.css";

import { NavigatorProps } from "./NavigatorProps";

import HomeButton from "./components/HomeButton/HomeButton";
import BackButton from "./components/BackButton/BackButton";
import AddressBar from "./components/AddressBar/AddressBar";

export default function Navigator(props: NavigatorProps) {
  return (
    <div className="Navigator" data-open={true}>
      <BackButton />
      <HomeButton />
      <AddressBar />
    </div>
  );
}
