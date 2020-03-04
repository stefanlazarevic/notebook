export type LabeledSwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  rounded?: boolean;
  disabled?: boolean;

  name?: string;
  id: string;
  label: string;

  onChange: () => void;
};
