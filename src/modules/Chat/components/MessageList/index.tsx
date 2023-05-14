import React, { useCallback, useEffect } from 'react';
import { useGetChatHistoryMutation } from '../../api/chatApi';
import { useAuthInfo } from '@/hooks/useAuthInfo';
import { Box, Chip, LinearProgress, Stack, Typography } from '@mui/material';
import { StyledMessageListWrapper } from './styles';
import { format } from 'date-fns';
import { ChatFields } from '../ChatFields';
import { useNotification } from '@/hooks/useNotification';

export type TMessageListProps = {
  chatId?: string;
};

const _MessageList = ({ chatId }: TMessageListProps) => {
  const [getChatHistory, { data: messageList, isLoading }] = useGetChatHistoryMutation();
  const { createNotificationError } = useNotification();
  const tokens = useAuthInfo();

  const refreshList = useCallback(
    async (number: string) => {
      if (tokens && !isLoading) {
        try {
          await getChatHistory({ number: number, ...tokens, limit: 5 }).unwrap();
        } catch (error) {
          createNotificationError('Ошибка');
        }
      }
    },
    [getChatHistory, createNotificationError],
  );

  useEffect(() => {
    if (chatId) refreshList(chatId);
  }, [refreshList]);

  return (
    <Box bgcolor='white' padding={1}>
      <StyledMessageListWrapper>
        {isLoading && <LinearProgress />}
        {messageList &&
          [...messageList]?.reverse().map((item) => {
            const date = format(new Date(item.timestamp * 1000), 'hh:mm:ss');
            return (
              <Stack flexDirection='row' alignItems='center' gap='5px' key={item.idMessage}>
                <Typography color='gray' fontSize='12px'>
                  {date}
                </Typography>
                <Chip label={item.textMessage} />
              </Stack>
            );
          })}
      </StyledMessageListWrapper>
      <ChatFields chatId={chatId} />
    </Box>
  );
};

export const MessageList = React.memo(_MessageList);
