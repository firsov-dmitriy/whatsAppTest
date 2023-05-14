import React, { useCallback, useState } from 'react';
import { Box, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { usePostMessageMutation } from '../../api/chatApi';

import { useNotification } from '@/hooks/useNotification';
import { useAuthInfo } from '@/hooks/useAuthInfo';

import { InputField } from '@/package';

export type TChatFieldsProps = {
  chatId?: string;
};

const _ChatFields = ({ chatId }: TChatFieldsProps) => {
  const [message, setMessage] = useState<string | undefined>();
  const { createNotificationError } = useNotification();
  const tokens = useAuthInfo();

  const [sendMessage] = usePostMessageMutation();
  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    setMessage(value);
  };
  const onSend = useCallback(async () => {
    if (message && tokens?.idInstance && chatId) {
      try {
        await sendMessage({ message, number: chatId, ...tokens }).unwrap();
        setMessage(undefined);
      } catch (error) {
        createNotificationError('Произошла ошибка');
      }
    }
  }, [chatId, createNotificationError, message, sendMessage, tokens]);
  return (
    <Box display='flex' alignItems='center'>
      <InputField
        name='message'
        label='Сообщение'
        size='small'
        placeholder='Введите сообщение'
        onChange={onChange}
        value={message}
      />
      <Button onClick={onSend} startIcon={<SendIcon sx={{ width: '1.5em', height: '2em' }} />} />
    </Box>
  );
};

export const ChatFields = React.memo(_ChatFields);
