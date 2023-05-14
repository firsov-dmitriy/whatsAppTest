import React from 'react';

import { Layout, MainPageModule } from '@/modules';

const _MainPage = () => {
  return (
    <Layout>
      <MainPageModule />
    </Layout>
  );
};

export const MainPage = React.memo(_MainPage);
