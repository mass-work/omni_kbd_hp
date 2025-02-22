import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
export default function Footer() {
    return (_jsx(FooterContainer, { children: _jsx("p", { children: "\u00A9 2025 mass. all rights reserved." }) }));
}
const FooterContainer = styled.footer `
  background-color: #f8f8f8;
  border-top: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  color: #666;
`;
