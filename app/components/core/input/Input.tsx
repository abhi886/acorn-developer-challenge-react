// components/CategoryComboBox.jsx
import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled MUI TextField
const StyledInput = styled(TextField)(() => ({
  backgroundColor: '#f9f9f9',
  borderRadius: 4,
}));

// Reusable Input component
const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
