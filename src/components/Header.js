import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function Header() {
    return (_jsx(HeaderContainer, { children: _jsxs(Nav, { children: [_jsx(Title, { children: "omni kbd" }), _jsxs(NavLinks, { children: [_jsx(StyledLink, { to: "/", children: "Home" }), _jsx(StyledLink, { to: "/usage", children: "Usage" }), _jsx(StyledLink, { to: "/build-guide", children: "Guide" }), _jsx(StyledLink, { to: "/pre-purchase-notice", children: "Notice" }), _jsx(StyledLink, { to: "/vial-setup-guide", children: "Vial Setup" })] })] }) }));
}
const HeaderContainer = styled.header `
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f8f8f8;
  border-bottom: 1px solid #d1d5db;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;
const Nav = styled.nav `
  max-width: 1200px;
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
`;
const Title = styled.h1 `
  font-size: 2rem;
  font-weight: bold;
  color: #374151;
  margin: 2px;
  padding: 0.1rem ;

  /* スマホ(例:640px以下)のときはフォントサイズをアップ */
  /* @media (max-width: 450px) {
    font-size: 3rem;
  } */
`;
const NavLinks = styled.div `
  display: flex;
  gap: 1.5rem;
`;
const StyledLink = styled(Link) `
  font-size: 1.2rem;
  color: #374151;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #000;
  }
  /* @media (min-width: 450px) {
    font-size: 2rem;
  } */
`;
