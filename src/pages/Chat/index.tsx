import { Layout } from '@/modules';
import { ChatModule, usePostMessageMutation } from '@/modules/Chat';
import { useAppSelector } from '@/redux/hooks/useAppSelector';
import React, { useEffect } from 'react';

export type TChatProps = {};

const _Chat = ({}: TChatProps) => {
  const tokens = useAppSelector((state) => state.tokens);

  return (
    <Layout>
      <ChatModule />
    </Layout>
  );
};

export const Chat = React.memo(_Chat);
