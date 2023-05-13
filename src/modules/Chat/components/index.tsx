import React, { useState } from 'react';
import { ChatFields } from './ChatFields';
import { FormProvider, useForm } from 'react-hook-form';
import { ChatList } from './ChatList';
import { Box, Grid } from '@mui/material';
import { MessageList } from './MessageList';

export type TChatProps = {};

const _Chat = ({}: TChatProps) => {
  const form = useForm();
  const [chatId, setChatId] = useState<string | undefined>();

  const onClick = (chatId: string) => {
    if (chatId) {
      setChatId(chatId);
    }
  };
  return (
    <FormProvider {...form}>
      <Grid container gap={2} flexWrap='nowrap'>
        <Grid item xs={2}>
          <ChatList onClick={onClick} />
        </Grid>
        <Grid item xs={10}>
          <MessageList chatId={chatId} />
          <ChatFields />
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export const ChatModule = React.memo(_Chat);
