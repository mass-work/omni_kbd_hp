import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BuildGuide from './pages/BuildGuide';
function App() {
    return (_jsxs(Container, { children: [_jsx(Header, {}), _jsx(MainContent, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/buildguide", element: _jsx(BuildGuide, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) })] }) }), _jsx(Footer, {})] }));
}
export default App;
const Container = styled.div `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  color: #333;
`;
const MainContent = styled.main `
  flex-grow: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;
