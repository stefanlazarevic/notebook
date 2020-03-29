import React from "react";
import { FaRegStar } from "react-icons/fa";

import "./FavoriteButton.css";

export default function FavoriteButton(props: any) {
  return (
    <button
      className="FavoriteButton"
      aria-label="Add to favorite"
      title="Add to favorite"
    >
      <FaRegStar aria-hidden={true} />
    </button>
  );
}
