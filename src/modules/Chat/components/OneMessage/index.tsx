import { CircularProgress, Box, Typography, IconButton } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useDeleteNotificationMutation, useLazyGetNotificationQuery } from '../../api/chatApi';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuthInfo } from '@/hooks/useAuthInfo';
import { useNotification } from '@/hooks/useNotification';
import { ChatFields } from '../ChatFields';

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
    [deleteNotification, createNotificationSuccess, createNotificationError],
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMessage(tokens);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [fetchMessage, deleteNotification]);

  useEffect(() => {
    if (message?.body && message.body.sendByApi && tokens) {
      deleteNotification({ ...tokens, receiptId: message.receiptId });
    }
  }, [message, deleteNotification]);
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
