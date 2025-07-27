import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Title>omni kbd</Title>
        <NavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/usage">Usage</StyledLink>
          <StyledLink to="/build-guide">Guide</StyledLink>
          <StyledLink to="/pre-purchase-notice">Notice</StyledLink>
          <StyledLink to="/vial-setup-guide">Vial Setup</StyledLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f8f8f8;
  border-bottom: 1px solid #d1d5db;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
`;

const Title = styled.h1`
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

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
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
