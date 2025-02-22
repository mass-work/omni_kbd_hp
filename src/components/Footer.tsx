import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <p>© 2025 mass. all rights reserved.</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  border-top: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  color: #666;
`;
