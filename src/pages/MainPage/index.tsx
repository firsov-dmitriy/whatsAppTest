import React from 'react';

export type TMainPageProps = {};

const _MainPage = () => {
  console.log('✅ test    ');

  return <h1>Main pwwwwwwwwwwage</h1>;
};

export const MainPage = React.memo(_MainPage);
