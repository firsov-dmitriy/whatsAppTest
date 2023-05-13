import { Layout, MainPageModule } from '@/modules';
import React from 'react';

export type TMainPageProps = {};

const _MainPage = () => {
  return (
    <Layout>
      <MainPageModule />
    </Layout>
  );
};

export const MainPage = React.memo(_MainPage);
