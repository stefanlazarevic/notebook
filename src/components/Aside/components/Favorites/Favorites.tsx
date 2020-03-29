import React from "react";
import { useSelector } from "react-redux";
import { FiStar } from "react-icons/fi";
import { FaCaretLeft, FaCaretDown } from "react-icons/fa";
import { FixedSizeList as List } from "react-window";

import "./Favorites.css";

import Collapse, { Summary, Details } from "../../../UI/Collapse";
import { AppState } from "../../../../redux/types";
import AsideButton from "../Button/AsideButton";
import FavoriteFolder from "./components/Favorite/FavoriteFolder";

export default function Favorites(props: any) {
  const favorites = useSelector((state: AppState) => state.favorites);

  const length = favorites.length || 1;

  const height = length * 40;

  const Row = ({ index, style }: { index: number; style: any }) => {
    if (favorites.length === 0) {
      return (
        <AsideButton style={style} className="FavoriteFolder">
          No Favorites
        </AsideButton>
      );
    }

    return <FavoriteFolder id={favorites[index]} />;
  };

  return (
    <Collapse className="Favorites">
      <Summary>
        {(expanded: boolean) => (
          <h4>
            <FiStar />
            <span>Favorites</span>
            {expanded ? <FaCaretDown /> : <FaCaretLeft />}
          </h4>
        )}
      </Summary>
      <Details>
        <div className="Wrapper">
          <List height={height} itemCount={length} itemSize={40} width={280}>
            {Row}
          </List>
        </div>
      </Details>
    </Collapse>
  );
}
