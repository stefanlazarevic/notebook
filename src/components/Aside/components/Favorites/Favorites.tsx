import React from "react";
import { FiStar } from "react-icons/fi";
import { FaCaretLeft, FaCaretDown } from "react-icons/fa";
import Collapse, { Summary, Details } from "../../../UI/Collapse";

export default function Favorites(props: any) {
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
      <Details></Details>
    </Collapse>
  );
}
