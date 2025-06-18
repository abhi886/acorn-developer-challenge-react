import React from 'react';
import { FunctionComponent } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ComboBoxProps } from './PropsTypes';

const StyledAutocomplete = styled(Autocomplete<string>)(() => ({
  backgroundColor: '#f9f9f9',
  borderRadius: 4,
}));

const ComboBox: FunctionComponent<ComboBoxProps> = ({
  options,
  value,
  onValueChange,
  label,
  id,
}) => {
  return (
    <StyledAutocomplete
      fullWidth
      id={id}
      options={options}
      value={value}
      onChange={(_event, newValue) => {
        onValueChange(newValue ?? '');
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
      // data-testid={`${id}-autocomplete`}
    />
  );
};

export default ComboBox;
