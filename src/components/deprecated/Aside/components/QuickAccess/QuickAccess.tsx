import React from "react";
import { FiClock } from "react-icons/fi";
import { FaCaretLeft, FaCaretDown } from "react-icons/fa";

import HomeButton from "../HomeButton/HomeButton";
import TrashButton from "../TrashButton/TrashButton";
import Collapse, { Summary, Details } from "../../../UI/Collapse";

export default function QuickAccess(props: any) {
  return (
    <Collapse className="QuickAccess" open={true}>
      <Summary>
        {(expanded: boolean) => (
          <h4>
            <FiClock />
            <span>Quick Access</span>
            {expanded ? <FaCaretDown /> : <FaCaretLeft />}
          </h4>
        )}
      </Summary>
      <Details>
        <div className="Wrapper">
          <HomeButton />
          <TrashButton />
        </div>
      </Details>
    </Collapse>
  );
}
