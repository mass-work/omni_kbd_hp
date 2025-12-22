import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export default function Header() {
  return (
    <>
      <HeaderContainer role="banner">
        <Nav aria-label="Primary">
          <BrandArea>
            <Title>omni kbd</Title>
          </BrandArea>

          {/* タイトルのすぐ右に常時表示。左寄せ & コンパクト */}
          <NavLinks id="main-nav">
            <Item>
              <StyledLink to="/">Home</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/usage">Usage</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/build-guide">Guide</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/pre-purchase-notice">Notice</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/vial-setup-guide">Vial Setup</StyledLink>
            </Item>
          </NavLinks>
        </Nav>
      </HeaderContainer>

      {/* 固定ヘッダーぶんの余白 */}
      <HeaderSpacer />
    </>
  );
}

/* ====== constants ====== */
const HEADER_H = 48; // ← 56→48にして高さをさらに圧縮

/* ====== styled ====== */
const HeaderContainer = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  height: ${HEADER_H}px;
  padding-top: env(safe-area-inset-top, 0px);
  background: rgba(248, 248, 248, 0.86);
  backdrop-filter: saturate(140%) blur(6px);
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.06);
  z-index: 50;

  /* はみ出し防止：子孫すべてを border-box に */
  box-sizing: border-box;
  & *,
  & *::before,
  & *::after {
    box-sizing: inherit;
  }
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 clamp(10px, 4vw, 24px);

  /* 左寄せでタイトに配置（右寄せしない） */
  display: flex;
  align-items: center;
  gap: clamp(6px, 1.2vw, 14px);
`;

const BrandArea = styled.div`
  display: flex;
  align-items: center;
  min-height: ${HEADER_H}px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 800;
  color: #111827;
  letter-spacing: 0.2px;

  /* さらにコンパクト */
  font-size: clamp(1rem, 2.8vw, 1.15rem);
`;

const NavLinks = styled.ul`
  /* タイトルのすぐ右に少しだけスペース */
  margin: 0 0 0 clamp(8px, 1.6vw, 16px);

  list-style: none;
  display: flex;
  align-items: center;
  gap: clamp(6px, 1.2vw, 14px);
  padding: 0;

  /* どうしても収まらない時だけ、ヘッダー内で横スクロール */
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  max-width: 100%;

  /* スクロール端の切れをやわらげる（任意） */
  mask-image: linear-gradient(to right, transparent 0, black 10px, black calc(100% - 10px), transparent 100%);
`;

const Item = styled.li`
  flex: 0 0 auto; /* 折り返さず横スクロールに載せる */
  border-radius: 8px;
  overflow: hidden;
`;

const focusRing = css`
  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
    border-radius: 8px;
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  /* タップ目安を保ちつつ極力タイトに */
  height: 36px;
  padding: 0 8px;

  font-size: clamp(0.86rem, 2.8vw, 0.95rem);
  color: #374151;
  text-decoration: none;
  transition: color 0.18s ease-in-out;
  ${focusRing}

  &:hover {
    color: #111827;
  }
  &:active {
    background: #f3f4f6;
  }
`;

/* コンテンツをヘッダーの下に押し出すためのスペーサー */
export const HeaderSpacer = styled.div`
  height: calc(${HEADER_H}px + env(safe-area-inset-top, 0px));
`;
