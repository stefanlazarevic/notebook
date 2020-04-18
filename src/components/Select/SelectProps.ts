import { SelectHTMLAttributes } from "react";

export default interface SelectProps extends SelectHTMLAttributes<any> {
  options: {
    id: string;
    value: string | number;
    label: string;
    selected?: boolean;
  }[];
}
