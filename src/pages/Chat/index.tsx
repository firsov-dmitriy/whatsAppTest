import React from 'react';

import { ChatModule } from '@/modules/Chat';
import { Layout } from '@/modules';

const _Chat = () => {
  return (
    <Layout>
      <ChatModule />
    </Layout>
  );
};

export const Chat = React.memo(_Chat);
