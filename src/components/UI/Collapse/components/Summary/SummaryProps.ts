export interface SummaryPropCallbacks {
  onClick?: (open: boolean) => void;
}

export default interface SummaryProps extends SummaryPropCallbacks {
  open?: boolean;
  disabled?: boolean;
  children?: any;
  className?: string;
}
