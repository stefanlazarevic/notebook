import React from "react";
import { FiTrash2 } from "react-icons/fi";

import AsideButton from "../Button/AsideButton";

export default function RecycleButton(props: any) {
  return (
    <AsideButton>
      <FiTrash2 />
      <span>Recycle</span>
    </AsideButton>
  );
}
