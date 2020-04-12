import React from "react";
import { FiHelpCircle } from "react-icons/fi";

import Button from "../../../UI/Button";

export default function HelpButton() {
  const label = "Help";

  return (
    <Button title={label} aria-label={label}>
      <FiHelpCircle aria-hidden={true} />
    </Button>
  );
}
