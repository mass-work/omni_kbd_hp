import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
/* --- 画像をインポート（例）--- */
import home01 from '../assets/home_01.jpg';
import home02 from '../assets/home_02.jpg';
import home04 from '../assets/home_04.jpg';
/* 画像配列（枚数は例） */
const images = [home01, home02, home04];
const Home = () => {
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    return (_jsxs(HomeContainer, { children: [_jsxs(SliderContainer, { children: [_jsx(ArrowButton, { onClick: prevSlide, style: { left: '1rem' }, children: "<" }), images.map((imgSrc, index) => (_jsx(FadeSlide, { style: {
                            opacity: current === index ? 1 : 0,
                        }, children: _jsx(SlideImage, { src: imgSrc, alt: `Slide ${index}` }) }, index))), _jsx(ArrowButton, { onClick: nextSlide, style: { right: '1rem' }, children: ">" })] }), _jsxs(IntroSection, { children: [_jsx(IntroTitle, { children: "omni CS" }), _jsxs(IntroText, { children: ["omni CS \u306F\u3001\u30C7\u30E5\u30A2\u30EB\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u3068\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u642D\u8F09\u3057\u305F40%\u30AD\u30FC\u30DC\u30FC\u30C9\u3067\u3059\u3002aa", _jsx("br", {}), "\u30D1\u30BD\u30B3\u30F3\u3078\u306E\u5165\u529B\u4F5C\u696D\u3092\u52B9\u7387\u5316\u3057\u3001\u5FEB\u9069\u306A\u4F5C\u696D\u74B0\u5883\u3092\u5F97\u308B\u305F\u3081\u306B\u958B\u767A\u3057\u307E\u3057\u305F\u3002", _jsx("br", {}), "\u5DE6\u53F3\u306B\u914D\u7F6E\u3055\u308C\u305F\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u3067\u3001\u30DE\u30A6\u30B9\u64CD\u4F5C\u3084\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u76F4\u611F\u7684\u306B\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u3001", _jsx("br", {}), "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u3001\u30A2\u30D7\u30EA\u3084\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u3092\u3044\u3064\u3067\u3082\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002"] }), _jsxs(SmallNote, { children: ["\u203B\u8A73\u7D30\u306F ", _jsx("a", { href: "/about", children: "About\u30DA\u30FC\u30B8" }), " \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002"] })] })] }));
};
export default Home;
/* ---- Styled Components ---- */
/* 画面全体をラップするコンテナ */
const HomeContainer = styled.div `
  width: 100%;
  height: auto;
  margin-top: 32px;
`;
/* スライダー全体を囲むコンテナ */
const SliderContainer = styled.div `
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;
  overflow: hidden;
  background-color: #000;
`;
/* フェード対象のスライド（絶対配置で重ねる） */
const FadeSlide = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.8s ease-in-out;
`;
/* 画像 */
const SlideImage = styled.img `
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
`;
/* 矢印ボタン */
const ArrowButton = styled.button `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #333;

  &:hover {
    background: #fff;
  }
`;
/* 紹介文セクション（Home向け） */
const IntroSection = styled.section `
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
`;
const IntroTitle = styled.h2 `
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const IntroText = styled.p `
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;
const SmallNote = styled.p `
  font-size: 0.875rem;
  color: #666;

  a {
    color: #0088cc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
