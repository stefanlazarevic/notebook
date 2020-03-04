import React from "react";

export interface AppHeaderButtonProps {
  disabled?: boolean;
  children?: React.ReactNode;
  title?: string;

  onClick: (event?: React.MouseEvent) => void;
}
