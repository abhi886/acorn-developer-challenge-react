export type ComboBoxProps = {
    id: string;
    options: string[];
    value: string | null;
    onValueChange: (value: string) => void;
    label: string;
  };