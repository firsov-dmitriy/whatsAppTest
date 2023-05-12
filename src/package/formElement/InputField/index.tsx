import React from 'react';
import { Input as InputMui, InputProps } from '@mui/material';

export interface TInputFieldProps extends Omit<InputProps, 'error'> {
  error?: string | undefined;
}

const _InputField = ({ error, ...rest }: TInputFieldProps) => {
  return <InputMui {...rest} />;
};

export const InputField = React.memo(_InputField);
