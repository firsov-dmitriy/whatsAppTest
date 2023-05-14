import React, { useCallback, useEffect } from 'react';
import { CircularProgress, Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { ChatFields } from '../ChatFields';
import { useDeleteNotificationMutation, useLazyGetNotificationQuery } from '../../api/chatApi';

import { useNotification } from '@/hooks/useNotification';
import { useAuthInfo } from '@/hooks/useAuthInfo';

export type TOneMessageProps = {
  chatId?: string;
};

const _OneMessage = ({ chatId }: TOneMessageProps) => {
  const [fetchMessage, { data: message, isLoading: messageLoading }] =
    useLazyGetNotificationQuery();
  const [deleteNotification] = useDeleteNotificationMutation();
  const tokens = useAuthInfo();
  const { createNotificationError, createNotificationSuccess } = useNotification();

  const onDelete = useCallback(
    async (receiptId?: number) => {
      if (tokens && receiptId) {
        try {
          await deleteNotification({ ...tokens, receiptId }).unwrap();
          createNotificationSuccess('Вы удалили уведомление!');
        } catch (error) {
          createNotificationError('При удалении произошла ошибка!');
        }
      }
    },
    [createNotificationError, createNotificationSuccess, deleteNotification, tokens],
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMessage(tokens);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [fetchMessage, tokens]);

  useEffect(() => {
    if (message?.body && message.body.sendByApi && tokens) {
      deleteNotification({ ...tokens, receiptId: message.receiptId });
    }
  }, [deleteNotification, message?.body, message?.receiptId, tokens]);
  return (
    <>
      {messageLoading ? (
        <CircularProgress />
      ) : (
        <>
          {message?.body?.messageData ? (
            <Box display='flex' alignItems='center' gap='10px'>
              <Typography>
                {message?.body?.messageData?.extendedTextMessageData?.text ||
                  message.body?.messageData?.textMessageData?.textMessage}
              </Typography>
              <IconButton onClick={() => onDelete(message?.receiptId)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ) : (
            <Typography>Сообщений нет</Typography>
          )}
        </>
      )}
      <ChatFields chatId={chatId} />
    </>
  );
};

export const OneMessage = React.memo(_OneMessage);
