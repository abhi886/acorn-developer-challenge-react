import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAutocomplete = styled(Autocomplete)(() => ({
  backgroundColor: '#f9f9f9',
  borderRadius: 4,
}));

const ComboBox = ({ options = [], value, onChange, label }) => {
  return (
    <StyledAutocomplete
      fullWidth
      options={options}
      value={value || null}
      onChange={(event, newValue) => onChange(newValue || '')}
      renderInput={(params) => (
        <TextField {...params} label={label} aria-label={label} />
      )}
    />
  );
};

export default ComboBox;
