import React from "react";

import "./Aside.css";
import AsideButton from "./components/Button/AsideButton";
import { FiTrash } from "react-icons/fi";
import AsideDivider from "./components/Divider/AsideDivider";
import HomeButton from "./components/HomeButton/HomeButton";

export default function Aside(props: any) {
  return (
    <div className="Aside">
      <HomeButton />
      <AsideButton className="AsideItem">
        <FiTrash />
        <span>Recycle</span>
      </AsideButton>
      <AsideDivider />
    </div>
  );
}
