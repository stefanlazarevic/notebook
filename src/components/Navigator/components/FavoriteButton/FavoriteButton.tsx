import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

import "./FavoriteButton.css";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../../redux/types";
import {
  removeFromFavorites,
  addToFavorites
} from "../../../../redux/favorites/actions";

export default function FavoriteButton(props: any) {
  const dispatch = useDispatch();

  const currentFolderID = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const isFavorite = useSelector(
    (state: AppState) => state.notes.groups[currentFolderID].favorite
  );

  function toggleFavorite() {
    if (isFavorite) {
      dispatch(removeFromFavorites(currentFolderID));
    } else {
      dispatch(addToFavorites(currentFolderID));
    }
  }

  return (
    <button
      className="FavoriteButton"
      aria-label="Add to favorite"
      title="Add to favorite"
      onClick={toggleFavorite}
    >
      {isFavorite ? <FaStar /> : <FaRegStar aria-hidden={true} />}
    </button>
  );
}
