import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(_jsxs(React.StrictMode, { children: [_jsx(GlobalStyle, {}), _jsx(HashRouter, { basename: "/omni_kbd_hp/", children: _jsx(App, {}) })] }));
