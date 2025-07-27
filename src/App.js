import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { ThemeProvider as StyledThemeProvider, } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Usage from './pages/UsageGuide';
import BuildGuide from './pages/BuildGuide';
import PrePurchaseNotice from './pages/PrePurchaseNotice';
import VialSetupGuide from './pages/VialSetupGuide';
const muiTheme = createTheme({
    palette: {
        background: {
            default: '#f8f8f8', // オフホワイト基調
        },
        text: {
            primary: '#333', // ダークグレーのテキスト
        },
        primary: {
            main: '#6a6a6a', // 強調色
        },
    },
});
function App() {
    return (_jsx(MuiThemeProvider, { theme: muiTheme, children: _jsxs(StyledThemeProvider, { theme: muiTheme, children: [_jsx(CssBaseline, {}), _jsxs(Container, { children: [_jsx(Header, {}), _jsx(MainContent, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/usage", element: _jsx(Usage, {}) }), _jsx(Route, { path: "/build-guide", element: _jsx(BuildGuide, {}) }), _jsx(Route, { path: "/pre-purchase-notice", element: _jsx(PrePurchaseNotice, {}) }), _jsx(Route, { path: "/vial-setup-guide", element: _jsx(VialSetupGuide, {}) })] }) }), _jsx(Footer, {})] })] }) }));
}
export default App;
const Container = styled.div `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
`;
const MainContent = styled.main `
  flex-grow: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;
