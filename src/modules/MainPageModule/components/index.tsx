import { useForm } from '@/hooks/useForm';
import { FormProvider } from 'react-hook-form';
import React, { useCallback } from 'react';
import { FormInputField } from '@/package';
import { Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TokensFields, TokensValue, useFormTokens } from '../utils/form';
import { useNotification } from '@/hooks/useNotification';
import { useDispatch } from 'react-redux';
import { setTokens } from '@/redux/reducers/tokens';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { useAppSelector } from '@/redux/hooks/useAppSelector';
export type TMainPageModuleProps = {};

const _MainPageModule = () => {
  const { createNotificationError } = useNotification();
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.tokens);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (values: Required<TokensValue>) => {
      try {
        dispatch(setTokens(values));

        navigate('chat');
      } catch (error) {
        createNotificationError('Произошла ошибка');
      }
    },
    [createNotificationError, setTokens],
  );

  const { form, submit } = useFormTokens(onSubmit);
  return (
    <Box width={450} p='60px 0' m='0 auto'>
      <FormProvider {...form}>
        <FormInputField
          name={TokensFields.IdInstance}
          placeholder='idInstance'
          variant='outlined'
          label='Введите ваш idInstance'
        />
        <FormInputField
          name={TokensFields.ApiToken}
          placeholder='apiTokenInstance'
          variant='outlined'
          label='Введите ваш apiTokenInstance'
        />
        <Button onClick={submit} endIcon={<ArrowForwardIcon />} fullWidth variant='contained'>
          Дальше
        </Button>
      </FormProvider>
    </Box>
  );
};

export const MainPageModule = React.memo(_MainPageModule);
