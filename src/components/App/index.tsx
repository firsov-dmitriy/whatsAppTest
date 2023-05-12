import { BrowserRouter } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import React from 'react';

import Router from '../Router';
import { DEFAULT_APP_TITLE } from '@/resource/constants';
import { Provider } from 'react-redux';
import { store } from '@/redux/storeInstance';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Helmet defaultTitle={DEFAULT_APP_TITLE} titleTemplate={`%s - ${DEFAULT_APP_TITLE}`}>
          <meta content='' name='description' />
          <meta content='' name='keywords' />
        </Helmet>

        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
