export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  rounded?: boolean;
  disabled?: boolean;

  name?: string;
  id: string;

  onChange: () => void;
}
