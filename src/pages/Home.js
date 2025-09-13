import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
/* --- 画像をインポート（例）--- */
import home01 from '../assets/home_01.jpg';
import home02 from '../assets/home_02.jpg';
import home04 from '../assets/home_04.jpg';
import omni_cs_pic from '../assets/omni_cs.jpg';
import omni_orth_pic from '../assets/omni_orth.jpg';
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
    return (_jsx(HomeContainer, { children: _jsxs(IntroSection, { children: [_jsx(IntroTitle, { children: "omni kbd" }), _jsxs(IntroText, { children: ["omni kbd\u306F\u3001\u30C7\u30E5\u30A2\u30EB\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u3068\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092\u642D\u8F09\u3057\u305F40%\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u81EA\u4F5C\u30AD\u30C3\u30C8\u3067\u3059\u3002", _jsx("br", {}), "\u30D1\u30BD\u30B3\u30F3\u3078\u306E\u5165\u529B\u4F5C\u696D\u3092\u52B9\u7387\u5316\u3057\u3001\u5FEB\u9069\u306A\u4F5C\u696D\u74B0\u5883\u3092\u5B9F\u73FE\u3059\u308B\u305F\u3081\u306B\u958B\u767A\u3057\u307E\u3057\u305F\u3002"] }), _jsxs(SliderContainer, { children: [_jsx(ArrowButton, { onClick: prevSlide, style: { left: '1rem' }, children: "<" }), images.map((imgSrc, index) => (_jsx(FadeSlide, { style: {
                                opacity: current === index ? 1 : 0,
                            }, children: _jsx(SlideImage, { src: imgSrc, alt: `Slide ${index}` }) }, index))), _jsx(ArrowButton, { onClick: nextSlide, style: { right: '1rem' }, children: ">" })] }), _jsxs(FeaturesSection, { children: [_jsxs(FlexFeature, { children: [_jsxs(FeatureText, { children: [_jsx(FeatureTitle, { children: "omni CS" }), _jsx(FeatureSubtitle, { children: "\u7279\u5FB4" }), _jsxs("ul", { children: [_jsx("li", { children: "\u914D\u5217: \u30AB\u30E9\u30E0\u30B9\u30BF\u30C3\u30AC\u30FC\u30C9" }), _jsx("li", { children: "\u30E1\u30A4\u30F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB: 44mm (\u30AA\u30D7\u30B7\u30E7\u30F3 34mm)" }), _jsx("li", { children: "\u30B5\u30D6\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB: 25mm" }), _jsx("li", { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4: \u6709\u308A" }), _jsx("li", { children: "\u30B9\u30A4\u30C3\u30C1: cherryMX" }), _jsx("li", { children: _jsx("a", { href: "https://masskb.booth.pm/items/6487849", target: "_blank", rel: "noreferrer", children: "shop" }) })] }), _jsx("p", { children: "\u30AD\u30FC\u5165\u529B\u3084\u30DE\u30A6\u30B9\u306E\u64CD\u4F5C\u6027\u306B\u91CD\u304D\u3092\u7F6E\u3044\u3066\u3044\u307E\u3059\u3002\u30C7\u30B9\u30AF\u4E0A\u306B\u636E\u3048\u7F6E\u304D\u3001\u300C\u3042\u3089\u3086\u308BPC\u4F5C\u696D\u3092\u52B9\u7387\u7684\u306B\u3053\u306A\u3059\u300D\u3092\u30B3\u30F3\u30BB\u30D7\u30C8\u306B\u8A2D\u8A08\u3057\u3066\u3044\u307E\u3059\u3002" })] }), _jsx(FeatureImage, { children: _jsx("img", { src: omni_cs_pic, alt: "omni CS", loading: "lazy", decoding: "async", style: { width: '100%', maxWidth: '320px', borderRadius: '8px' } }) })] }), _jsxs(FlexFeature, { reverse: true, children: [_jsxs(FeatureText, { children: [_jsx(FeatureTitle, { children: "omni orth" }), _jsx(FeatureSubtitle, { children: "\u7279\u5FB4" }), _jsxs("ul", { children: [_jsx("li", { children: "\u914D\u5217: \u30AA\u30FC\u30BD\u30EA\u30CB\u30A2" }), _jsx("li", { children: "\u5DE6\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB: 25mm" }), _jsx("li", { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4: \u6709\u308A" }), _jsx("li", { children: "\u30B9\u30A4\u30C3\u30C1: lofree low profile, choc v1" })] }), _jsx("p", { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306F\u5DE6\u53F3\u3068\u3082\u306B25mm\u3092\u63A1\u7528\u3002\u6253\u9375\u611F\u3068\u64CD\u4F5C\u6027\u306E\u30D0\u30E9\u30F3\u30B9\u3092\u91CD\u8996\u3057\u305F\u30ED\u30FC\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u5C02\u7528\u8A2D\u8A08\u3067\u3059\u3002" })] }), _jsx(FeatureImage, { children: _jsx("img", { src: omni_orth_pic, alt: "omni orth", loading: "lazy", decoding: "async", style: { width: '100%', maxWidth: '320px', borderRadius: '8px' } }) })] }), _jsxs(FlexFeature, { children: [_jsxs(FeatureText, { children: [_jsx(FeatureTitle, { children: "omni row" }), _jsx(FeatureSubtitle, { children: "\u7279\u5FB4" }), _jsxs("ul", { children: [_jsx("li", { children: "\u914D\u5217: \u30ED\u30A6\u30B9\u30BF\u30C3\u30AC\u30FC\u30C9" }), _jsx("li", { children: "\u5DE6\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB: \u30B5\u30A4\u30BA\u672A\u5B9A" }), _jsx("li", { children: "\u30B9\u30A4\u30C3\u30C1: \u672A\u5B9A" })] }), _jsx("p", { children: "\u203B\u958B\u767A\u4E2D\u30E2\u30C7\u30EB\u3067\u3059\u3002\u8A73\u7D30\u30FB\u5199\u771F\u306F\u4ECA\u5F8C\u8FFD\u52A0\u4E88\u5B9A\u3067\u3059\u3002" })] }), _jsx(FeatureImage, {})] })] }), _jsxs(SmallNote, { children: ["\u203B\u4F7F\u3044\u65B9\u306E\u8A73\u7D30\u306F ", _jsx("a", { href: "https://mass-work.github.io/omni_kbd_hp/#/usage", children: "Usage\u30DA\u30FC\u30B8" }), " \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002"] }), _jsx(NoticeLink, { children: _jsx("a", { href: "https://mass-work.github.io/omni_kbd_hp/#/pre-purchase-notice", children: "\u8CFC\u5165\u524D\u306E\u6CE8\u610F\u70B9" }) })] }) }));
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
  margin-bottom: 1.5rem;
`;
/* 特長セクション */
// const FeaturesSection = styled.section`
//   text-align: left;
//   margin-top: 2rem;
// `;
const FeaturesSection = styled.section `
  margin-top: 2rem;
`;
const FlexFeature = styled.div `
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const FeatureText = styled.div `
  flex: 1;
  text-align: left;

  ul {
    list-style: disc;
    padding-left: 1.25rem;
    margin: 0.5rem 0 0.25rem;
  }

  li {
    margin-bottom: 0.4rem;
    line-height: 1.6;
  }

  p {
    margin-top: 0.5rem;
    text-align: left;
  }
`;
const FeatureImage = styled.div `
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FeatureTitle = styled.h3 `
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;
`;
// const FeatureItem = styled.div`
//   margin-bottom: 1.5rem;
//   ul {
//     padding-left: 1.5rem;
//     list-style-type: disc;
//     li {
//       margin-bottom: 0.5rem;
//       line-height: 1.5;
//     }
//   }
// `;
const FeatureSubtitle = styled.h4 `
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;
const SmallNote = styled.p `
  font-size: 0.875rem;
  color: #666;
  margin-top: 2rem;

  a {
    color: #0088cc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const NoticeLink = styled.p `
  display: block;
  font-size: 1rem;
  color: #0070f3;
  text-decoration: none;
  margin-bottom: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;
