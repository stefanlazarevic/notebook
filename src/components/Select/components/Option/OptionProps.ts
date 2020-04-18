import { OptionHTMLAttributes, SyntheticEvent } from "react";

export default interface OptionProps extends OptionHTMLAttributes<any> {
  index: number;

  selectedIndex: number;

  expanded: boolean;

  value: string | number;

  label: string;

  onSelected?: (
    event: SyntheticEvent,
    index: number,
    value: string | number
  ) => void;
}
