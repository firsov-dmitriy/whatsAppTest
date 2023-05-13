import React, { useEffect } from 'react';
import { useGetChatHistoryMutation } from '../../api/chatApi';
import { useAuthInfo } from '@/hooks/useAuthInfo';
import { Box } from '@mui/material';

export type TMessageListProps = {
  chatId?: string;
};

const _MessageList = ({ chatId }: TMessageListProps) => {
  const [getChatHistory, { data, isLoading }] = useGetChatHistoryMutation();
  const tokens = useAuthInfo();

  console.log('✅ data    ', data);
  useEffect(() => {
    if (chatId && tokens) {
      getChatHistory({ number: chatId, ...tokens });
    }
  }, [chatId]);
  return <Box></Box>;
};

export const MessageList = React.memo(_MessageList);
