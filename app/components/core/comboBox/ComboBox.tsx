import React from 'react';
import { FunctionComponent } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

type ComboBoxProps = {
  options: string[];
  value: string;
  onChangeValue: (value: string | null) => void;
  label: string;
};

const StyledAutocomplete = styled(Autocomplete<string>)(() => ({
  backgroundColor: '#f9f9f9',
  borderRadius: 4,
}));

const ComboBox: FunctionComponent<ComboBoxProps> = ({
  options = [],
  value = '',
  onChangeValue,
  label,
}) => {
  return (
    <StyledAutocomplete
      fullWidth
      options={options}
      value={value}
      onChange={(_event, newValue) => {
        onChangeValue(newValue ?? '');
      }}
      renderInput={(params) => (
        <TextField {...params} label={label} aria-label={label} />
      )}
    />
  );
};

export default ComboBox;
