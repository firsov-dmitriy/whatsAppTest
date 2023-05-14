import React, { useCallback, useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ChatList } from './ChatList';
import { Grid } from '@mui/material';
import { MessageTab } from './MessageTab';

export type TChatProps = {};

const _Chat = ({}: TChatProps) => {
  const form = useForm();
  const [chatId, setChatId] = useState<string | undefined>();

  const memoChatId = useMemo(() => chatId, [chatId]);

  const onClick = useCallback(
    (chatId: string) => {
      if (chatId && memoChatId !== chatId) {
        setChatId(chatId);
      }
    },
    [setChatId],
  );

  return (
    <FormProvider {...form}>
      <Grid container gap={2} flexWrap='nowrap'>
        <Grid item xs={2}>
          <ChatList onClick={onClick} />
        </Grid>
        <Grid item xs={10}>
          {memoChatId && <MessageTab chatId={memoChatId} />}
        </Grid>
      </Grid>
    </FormProvider>
  );
};

export const ChatModule = React.memo(_Chat);
