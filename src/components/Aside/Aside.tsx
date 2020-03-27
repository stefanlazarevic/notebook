import React from "react";
import { FaTrash, FaStar, FaChevronDown } from "react-icons/fa";

import "./Aside.css";

import AsideButton from "./components/Button/AsideButton";
import AsideDivider from "./components/Divider/AsideDivider";
import HomeButton from "./components/HomeButton/HomeButton";

export default function Aside(props: any) {
  return (
    <div className="Aside">
      <h4 style={{ fontWeight: 300, padding: "0 15px", marginBottom: 20 }}>
        Quick Access
      </h4>
      <HomeButton />
      <AsideButton className="AsideItem">
        <FaTrash />
        <span>Recycle</span>
      </AsideButton>
      <AsideDivider />
      <AsideButton>
        <FaStar />
        <span>Favorites</span>
        <FaChevronDown style={{ position: "absolute", right: 0 }} />
      </AsideButton>
    </div>
  );
}
