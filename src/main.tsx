import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './components/App';

function RootNode() {
  return (
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RootNode />);
