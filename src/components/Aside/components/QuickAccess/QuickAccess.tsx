import React from "react";
import Collapse from "@devlazarevic/react-collapse";
import { FiClock } from "react-icons/fi";
import { FaCaretLeft, FaCaretDown } from "react-icons/fa";

import HomeButton from "../HomeButton/HomeButton";
import RecycleButton from "../RecycleButton/RecycleButton";

export default function QuickAccess(props: any) {
  return (
    <Collapse className="QuickAccess" expanded={true}>
      <Collapse.Summary>
        {(expanded: boolean) => (
          <h4>
            <FiClock />
            <span>Quick Access</span>
            {expanded ? <FaCaretDown /> : <FaCaretLeft />}
          </h4>
        )}
      </Collapse.Summary>
      <Collapse.Details>
        <div className="Wrapper">
          <HomeButton />
          <RecycleButton />
        </div>
      </Collapse.Details>
    </Collapse>
  );
}
