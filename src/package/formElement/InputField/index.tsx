import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export interface TInputFieldProps extends Omit<TextFieldProps, 'error'> {
  error?: string;
  startAdornment?: string;
  readOnly?: boolean;
  showPassword?: boolean;
}

const _InputField = (props: TInputFieldProps) => {
  const {
    error,
    startAdornment,
    readOnly,
    type,
    value,
    fullWidth = true,
    InputLabelProps,
    InputProps,
    ...inputProps
  } = props;
  const valueGuard = value === undefined ? '' : value;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <TextField
        value={valueGuard}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : undefined}
        fullWidth={fullWidth}
        sx={{ background: '#fff', minHeight: '60px' }}
        InputLabelProps={{ sx: { color: '#B7B7B7' }, ...InputLabelProps }}
        helperText={error}
        InputProps={{
          sx: { paddingRight: '0' },
          readOnly,
          endAdornment: (
            <InputAdornment position='start' sx={{ margin: '0' }}>
              {type === 'password' && (
                <IconButton
                  aria-label='toggle_password_visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              )}
            </InputAdornment>
          ),
          ...InputProps,
        }}
        {...inputProps}
        error={!!error}
      />
    </>
  );
};

export const InputField = React.memo(_InputField);
