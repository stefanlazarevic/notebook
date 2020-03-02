export type SwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  rounded?: boolean;
  name?: string;
  id: string;

  onChange: () => void;
};
