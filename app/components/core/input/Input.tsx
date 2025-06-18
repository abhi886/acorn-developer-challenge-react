// components/CategoryComboBox.jsx
import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { InputProps } from './PropTypes';

// Styled MUI TextField
const StyledInput = styled(TextField)(() => ({
  backgroundColor: '#f9f9f9',
  borderRadius: 4,
}));

// Reusable Input component
const Input: FC<InputProps> = ({
  id,
  label,
  variant,
  fullWidth,
  value,
  onChange,
  // type,
  placeholder,
  slotProps,
}) => {
  return (
    <StyledInput
      id={id}
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      slotProps={slotProps}
    />
  );
};

export default Input;
