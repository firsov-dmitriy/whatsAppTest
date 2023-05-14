import { Controller, useFormContext } from 'react-hook-form';
import React from 'react';

import { InputField, TInputFieldProps } from '@/package/formElement';
export interface TFormInputFieldProps extends Omit<TInputFieldProps, 'value' | 'onChange'> {
  name: string;
}

const _FormInputField = (props: TFormInputFieldProps) => {
  const { name, ...inputProps } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref: _, ...fieldWithoutRef }, fieldState: { error } }) => {
        return <InputField {...fieldWithoutRef} {...inputProps} error={error?.message} />;
      }}
    />
  );
};

export const FormInputField = React.memo(_FormInputField);
