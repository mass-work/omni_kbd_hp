import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <HashRouter basename="/omni_kbd_hp/">
      <App />
    </HashRouter>
  </React.StrictMode>
);
