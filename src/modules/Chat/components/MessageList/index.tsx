import React, { useCallback, useEffect } from 'react';
import { format } from 'date-fns';
import { Box, Chip, LinearProgress, Stack, Typography } from '@mui/material';

import { ChatFields } from '../ChatFields';
import { useGetChatHistoryMutation } from '../../api/chatApi';

import { useNotification } from '@/hooks/useNotification';
import { useAuthInfo } from '@/hooks/useAuthInfo';

import { StyledMessageListWrapper } from './styles';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    if (chatId) refreshList(chatId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box bgcolor='white' padding={1}>
      <StyledMessageListWrapper>
        {isLoading ? (
          <LinearProgress />
        ) : (
          <>
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
          </>
        )}
      </StyledMessageListWrapper>
      <ChatFields refreshMessage={refreshList} chatId={chatId} />
    </Box>
  );
};

export const MessageList = React.memo(_MessageList);
