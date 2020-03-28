import React from "react";
import Collapse from "@devlazarevic/react-collapse";
import { FiStar } from "react-icons/fi";
import { FaCaretLeft, FaCaretDown } from "react-icons/fa";

export default function Favorites(props: any) {
  return (
    <Collapse className="Favorites">
      <Collapse.Summary>
        {(expanded: boolean) => (
          <h4>
            <FiStar />
            <span>Favorites</span>
            {expanded ? <FaCaretDown /> : <FaCaretLeft />}
          </h4>
        )}
      </Collapse.Summary>
      <Collapse.Details></Collapse.Details>
    </Collapse>
  );
}
