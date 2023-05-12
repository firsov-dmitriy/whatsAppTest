import { useForm } from '@/hooks/useForm';
import { FormProvider } from 'react-hook-form';
import React from 'react';
import { FormInputField } from '@/package';

export type TMainPageModuleProps = {};

const _MainPageModule = () => {
  const { form } = useForm({
    defaultValues: {},
  });
  return (
    <FormProvider {...form}>
      <FormInputField name='test' placeholder='test' />
    </FormProvider>
  );
};

export const MainPageModule = React.memo(_MainPageModule);
