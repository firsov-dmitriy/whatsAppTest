import { ObjectSchema, AnyObjectSchema } from 'yup';
import { DeepPartial, FieldValues, useForm as useFormRHF } from 'react-hook-form';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

export type TOnSubmitFormAsyncCb<TSuccessFormValues> = (values: TSuccessFormValues) => Promise<any>;

export type TOnSubmitFormSyncCb<TSuccessFormValues> = (values: TSuccessFormValues) => void;

export type TOnSubmitFormCb<TSuccessFormValues> =
  | TOnSubmitFormAsyncCb<TSuccessFormValues>
  | TOnSubmitFormSyncCb<TSuccessFormValues>;

export type TSubmit =
  | ((e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>)
  | undefined;

export interface IUseFormOptions<TFormValues, TSuccessFormValues> {
  defaultValues: DeepPartial<TFormValues>;
  validateFormSchema?: AnyObjectSchema | ObjectSchema<any>;
  onSubmit?: TOnSubmitFormCb<TSuccessFormValues>;
  onChangeValues?: (values: TFormValues) => void;
  reValidateMode?: 'onBlur' | 'onChange' | 'onSubmit';
}

export const useForm = <TFormValues extends FieldValues, TSuccessFormValues = TFormValues>(
  options: IUseFormOptions<TFormValues, TSuccessFormValues>,
) => {
  const { onSubmit, validateFormSchema, defaultValues, reValidateMode } = options;

  const form = useFormRHF<TFormValues>({
    resolver: validateFormSchema ? yupResolver(validateFormSchema) : undefined,
    mode: 'onChange',
    defaultValues: defaultValues,
    reValidateMode: reValidateMode ? reValidateMode : 'onChange',
  });

  const submit = onSubmit
    ? form.handleSubmit(async (data) => {
        if (onSubmit instanceof Promise) onSubmit(data as unknown as TSuccessFormValues);
        else onSubmit(data as unknown as TSuccessFormValues);
      })
    : undefined;

  const formReset = form.reset;
  const reset = React.useCallback(() => {
    formReset();
  }, [formReset]);

  return {
    form,
    submit,
    reset,
  };
};
