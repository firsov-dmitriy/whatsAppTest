import { Layout } from '@/modules';
import { ChatModule, usePostMessageMutation } from '@/modules/Chat';
import { useAppSelector } from '@/redux/hooks/useAppSelector';
import React, { useEffect } from 'react';

export type TChatProps = {};

const _Chat = ({}: TChatProps) => {
  const [sendMessage] = usePostMessageMutation();
  const tokens = useAppSelector((state) => state.tokens);
  console.log('✅ tokens    ', tokens);

  useEffect(() => {
    if (tokens.apiTokenInstance && tokens.idInstance) {
      sendMessage({ number: '89960661103', message: 'Test', ...tokens });
    }
  }, []);

  return (
    <Layout>
      <ChatModule />
    </Layout>
  );
};

export const Chat = React.memo(_Chat);
