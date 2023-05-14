import { useNavigate } from 'react-router-dom';
import { FormProvider } from 'react-hook-form';
import React, { useCallback } from 'react';
import { Box, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { TokensFields, TokensValue, useFormTokens } from '../utils/form';

import { useNotification } from '@/hooks/useNotification';

import { setTokens } from '@/redux/reducers/tokens';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { FormInputField } from '@/package';

const _MainPageModule = () => {
  const { createNotificationError } = useNotification();
  const dispatch = useAppDispatch();
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
    [createNotificationError, dispatch, navigate],
  );

  const { form, submit } = useFormTokens(onSubmit);
  return (
    <Box width={450} p='60px 0' m='0 auto'>
      <FormProvider {...form}>
        <Stack spacing={'20px'}>
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
        </Stack>
      </FormProvider>
    </Box>
  );
};

export const MainPageModule = React.memo(_MainPageModule);
