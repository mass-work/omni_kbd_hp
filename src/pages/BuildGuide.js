import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
/* グローバルスタイル（モノトーンベース） */
const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    background-color: #efefef; /* 背景：やや暗めのグレー */
    color: #6a6a6a;           /* テキストは淡いホワイト系にしてコントラスト確保 */
    scroll-behavior: smooth;
  }
`;
const CollapsibleSection = ({ title, id, defaultOpen = true, children, }) => {
    const [open, setOpen] = useState(defaultOpen);
    return (_jsxs(SectionWrapper, { id: id, children: [_jsxs(CollapsibleHeader, { onClick: () => setOpen(!open), children: [_jsx(CollapsibleTitle, { children: title }), _jsx("span", { children: open ? '−' : '+' })] }), _jsx(CollapsibleContent, { open: open, children: children })] }));
};
/* BackToTop コンポーネント */
const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        setVisible(window.pageYOffset > 300);
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (_jsx(BackToTopButton, { onClick: scrollToTop, visible: visible, "aria-label": "Back to top", children: "\u2191" }));
};
/* スムーススクロール用ハンドラ */
const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
};
/* TableOfContents コンポーネント */
const TableOfContents = () => {
    return (_jsxs(TocNav, { children: [_jsx(TocHeading, { children: "\u76EE\u6B21" }), _jsxs(TocList, { children: [_jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u30AD\u30C3\u30C8\u5185\u5BB9\u3068\u5FC5\u8981\u306A\u3082\u306E\u306E\u78BA\u8A8D", onClick: handleSmoothScroll, children: "\u30AD\u30C3\u30C8\u5185\u5BB9\u3068\u5FC5\u8981\u306A\u3082\u306E\u306E\u78BA\u8A8D" }) }), _jsxs(TocListItem, { children: [_jsx(TocLink, { href: "#\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9\u306E\u7D44\u307F\u7ACB\u3066", onClick: handleSmoothScroll, children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9\u306E\u7D44\u307F\u7ACB\u3066" }), _jsxs(TocList, { children: [_jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u5DE6\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9", onClick: handleSmoothScroll, children: "\u5DE6\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9" }) }), _jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9", onClick: handleSmoothScroll, children: "\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9" }) })] })] }), _jsxs(TocListItem, { children: [_jsx(TocLink, { href: "#\u306F\u3093\u3060\u4ED8\u3051", onClick: handleSmoothScroll, children: "\u306F\u3093\u3060\u4ED8\u3051" }), _jsxs(TocList, { children: [_jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u30C0\u30A4\u30AA\u30FC\u30C9\u3001\u30BD\u30B1\u30C3\u30C8\u3001\u30EA\u30BB\u30C3\u30C8\u30B9\u30A4\u30C3\u30C1\u3001L\u5B57\u30D4\u30F3\u30D8\u30C3\u30C0\u306E\u306F\u3093\u3060\u4ED8\u3051", onClick: handleSmoothScroll, children: "\u30C0\u30A4\u30AA\u30FC\u30C9\u3001\u30BD\u30B1\u30C3\u30C8\u3001\u30EA\u30BB\u30C3\u30C8\u30B9\u30A4\u30C3\u30C1\u3001L\u5B57\u30D4\u30F3\u30D8\u30C3\u30C0\u306E\u306F\u3093\u3060\u4ED8\u3051" }) }), _jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u30DE\u30A4\u30B3\u30F3\u306E\u306F\u3093\u3060\u4ED8\u3051", onClick: handleSmoothScroll, children: "\u30DE\u30A4\u30B3\u30F3\u306E\u306F\u3093\u3060\u4ED8\u3051" }) }), _jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u30BB\u30F3\u30B5\u30FC\u306E\u306F\u3093\u3060\u4ED8\u3051", onClick: handleSmoothScroll, children: "\u30BB\u30F3\u30B5\u30FC\u306E\u306F\u3093\u3060\u4ED8\u3051" }) }), _jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u57FA\u677F\u3068\u914D\u7DDA\u306E\u306F\u3093\u3060\u4ED8\u3051", onClick: handleSmoothScroll, children: "\u57FA\u677F\u3068\u914D\u7DDA\u306E\u306F\u3093\u3060\u4ED8\u3051" }) })] })] }), _jsxs(TocListItem, { children: [_jsx(TocLink, { href: "#\u7D44\u307F\u7ACB\u3066", onClick: handleSmoothScroll, children: "\u7D44\u307F\u7ACB\u3066" }), _jsxs(TocList, { children: [_jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u53D6\u308A\u4ED8\u3051", onClick: handleSmoothScroll, children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u53D6\u308A\u4ED8\u3051" }) }), _jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u57FA\u677F\u306E\u30C6\u30B9\u30C8", onClick: handleSmoothScroll, children: "\u57FA\u677F\u306E\u30C6\u30B9\u30C8" }) }), _jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u672C\u4F53\u306E\u7D44\u307F\u7ACB\u3066", onClick: handleSmoothScroll, children: "\u672C\u4F53\u306E\u7D44\u307F\u7ACB\u3066" }) })] })] }), _jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u5B8C\u6210", onClick: handleSmoothScroll, children: "\u5B8C\u6210" }) }), _jsx(TocListItem, { children: _jsx(TocLink, { href: "#\u6700\u5F8C\u306B", onClick: handleSmoothScroll, children: "\u6700\u5F8C\u306B" }) })] })] }));
};
/* BuildGuide コンポーネント */
const BuildGuide = () => {
    return (_jsxs(BuildGuideContainer, { children: [_jsx(GlobalStyle, {}), _jsx(HeaderWrapper, { children: _jsxs(HeaderContainer, { children: [_jsx(HeaderImage, { src: "img/readme_top.jpg", alt: "Readme Top" }), _jsx(TextContainer, { children: "omni CS build guide" })] }) }), _jsxs(ContentContainer, { children: [_jsx(Aside, { children: _jsx(TableOfContents, {}) }), _jsxs(MainContent, { children: [_jsxs(CollapsibleSection, { title: "\u30AD\u30C3\u30C8\u5185\u5BB9\u3068\u5FC5\u8981\u306A\u3082\u306E\u306E\u78BA\u8A8D", id: "\u30AD\u30C3\u30C8\u5185\u5BB9\u3068\u5FC5\u8981\u306A\u3082\u306E\u306E\u78BA\u8A8D", children: [_jsx(SectionHeading, { children: "\u30AD\u30C3\u30C8\u5185\u5BB9" }), _jsx(StyledTableWrapper, { children: _jsxs(StyledTable, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx(StyledTh, { children: "No." }), _jsx(StyledTh, { children: "\u90E8\u54C1\u540D" }), _jsx(StyledTh, { children: "\u6570\u91CF" }), _jsx(StyledTh, { children: "\u5099\u8003" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx(StyledTd, { children: "1" }), _jsx(StyledTd, { children: "\u30E1\u30A4\u30F3\u57FA\u677F" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "2" }), _jsx(StyledTd, { children: "\u30C8\u30E9\u30DC\u57FA\u677F" }), _jsx(StyledTd, { children: "2\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "3" }), _jsx(StyledTd, { children: "\u30E1\u30A4\u30F3\u30B1\u30FC\u30B9" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "4" }), _jsx(StyledTd, { children: "\u30DC\u30C8\u30E0\u30D7\u30EC\u30FC\u30C8" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "5" }), _jsx(StyledTd, { children: "\u30C8\u30E9\u30DC\u30B1\u30FC\u30B9(\u53F3)" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "6" }), _jsx(StyledTd, { children: "\u30C8\u30E9\u30DC\u30B1\u30FC\u30B9(\u5DE6)" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "7" }), _jsx(StyledTd, { children: "\u30E1\u30A4\u30F3PCB\u30D9\u30FC\u30B9(\u53F3)" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "8" }), _jsx(StyledTd, { children: "\u30E1\u30A4\u30F3PCB\u30D9\u30FC\u30B9(\u5DE6)" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "9" }), _jsx(StyledTd, { children: "\u30C8\u30E9\u30DCPCB\u30D9\u30FC\u30B9(\u53F3)" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "10" }), _jsx(StyledTd, { children: "\u30C8\u30E9\u30DCPCB\u30D9\u30FC\u30B9(\u5DE6)" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "11" }), _jsx(StyledTd, { children: "\u30A2\u30B8\u30E3\u30B9\u30BF" }), _jsx(StyledTd, { children: "2\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "12" }), _jsx(StyledTd, { children: "\u30A2\u30B8\u30E3\u30B9\u30BF\u30D9\u30FC\u30B9" }), _jsx(StyledTd, { children: "2\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "13" }), _jsx(StyledTd, { children: "\u30B4\u30E0\u811A" }), _jsx(StyledTd, { children: "4\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "14" }), _jsx(StyledTd, { children: "\u914D\u7DDA" }), _jsx(StyledTd, { children: "\u4E00\u5F0F" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "15" }), _jsx(StyledTd, { children: "\u30D9\u30A2\u30EA\u30F3\u30B0\u30E6\u30CB\u30C3\u30C8" }), _jsx(StyledTd, { children: "3\u500B" }), _jsx(StyledTd, { children: "\u30C8\u30E9\u30DC\u30B1\u30FC\u30B9(\u53F3)\u306B\u7D44\u307F\u8FBC\u307F\u6E08\u307F\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "16" }), _jsx(StyledTd, { children: "\u652F\u6301\u7403" }), _jsx(StyledTd, { children: "3\u500B" }), _jsx(StyledTd, { children: "\u30C8\u30E9\u30DC\u30B1\u30FC\u30B9(\u5DE6)\u306B\u7D44\u307F\u8FBC\u307F\u6E08\u307F\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "17" }), _jsx(StyledTd, { children: "\u30DE\u30A6\u30B9\u30BB\u30F3\u30B5\u30FC(PMW3360)" }), _jsx(StyledTd, { children: "2\u500B" }), _jsx(StyledTd, { children: "\u7D44\u307F\u8FBC\u307F\u6E08\u307F\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "18" }), _jsx(StyledTd, { children: "\u30BD\u30B1\u30C3\u30C8" }), _jsx(StyledTd, { children: "47\u500B" }), _jsx(StyledTd, { children: "\u7D44\u307F\u8FBC\u307F\u6E08\u307F\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "19" }), _jsx(StyledTd, { children: "\u30C0\u30A4\u30AA\u30FC\u30C9" }), _jsx(StyledTd, { children: "53\u500B" }), _jsx(StyledTd, { children: "\u7D44\u307F\u8FBC\u307F\u6E08\u307F\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "20" }), _jsx(StyledTd, { children: "L\u5B57\u30D4\u30F3\u30D8\u30C3\u30C0(13\u30D4\u30F3)" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, { children: "\u7D44\u307F\u8FBC\u307F\u6E08\u307F\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "21" }), _jsx(StyledTd, { children: "\u6A39\u8102\u7528\u30BF\u30C3\u30D4\u30F3\u30B0\u306D\u3058M2.6" }), _jsx(StyledTd, { children: "40\u500B" }), _jsx(StyledTd, { children: "3D\u30D7\u30EA\u30F3\u30C8\u54C1\u7DE0\u7D50\u7528" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "22" }), _jsx(StyledTd, { children: "\u6A39\u8102\u7528\u30BF\u30C3\u30D4\u30F3\u30B0\u306D\u3058M2" }), _jsx(StyledTd, { children: "12\u500B" }), _jsx(StyledTd, { children: "\u30E1\u30A4\u30F3\u57FA\u677F\u3001\u30C8\u30E9\u30DC\u57FA\u677F\u7528" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "23" }), _jsx(StyledTd, { children: "\u306D\u3058M2" }), _jsx(StyledTd, { children: "4\u672C" }), _jsx(StyledTd, { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u7528" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "24" }), _jsx(StyledTd, { children: "\u30EA\u30BB\u30C3\u30C8\u30B9\u30A4\u30C3\u30C1" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, { children: "\u7D44\u307F\u8FBC\u307F\u6E08\u307F\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "-" }), _jsx(StyledTd, { children: "25mmPOM\u7403(\u9ED2)" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, {})] })] })] }) }), _jsx(SectionHeading, { children: "\u5225\u9014\u8CFC\u5165\u304C\u5FC5\u8981\u306A\u90E8\u54C1" }), _jsx(StyledTableWrapper, { children: _jsxs(StyledTable, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx(StyledTh, { children: "No." }), _jsx(StyledTh, { children: "\u90E8\u54C1\u540D" }), _jsx(StyledTh, { children: "\u6570\u91CF" }), _jsx(StyledTh, { children: "\u5099\u8003" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx(StyledTd, { children: "25" }), _jsx(StyledTd, { children: "Raspberry Pi Pico" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "26" }), _jsx(StyledTd, { children: "\u30D4\u30F3\u30D8\u30C3\u30C0 1x20(\u9AD8\u30552.5mm)" }), _jsx(StyledTd, { children: "2\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "27" }), _jsx(StyledTd, { children: "1.28\u30A4\u30F3\u30C1\u5186\u5F62\u30BF\u30C3\u30C1\u30B9\u30AF\u30EA\u30FC\u30F3\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4 (WaveShare)" }), _jsx(StyledTd, { children: "1\u500B" }), _jsx(StyledTd, { children: _jsx("a", { href: "https://www.waveshare.com/1.28inch-Touch-LCD.htm", target: "_blank", rel: "noopener noreferrer", style: { color: '#a9a9a9', textDecoration: 'none' }, children: "\u30EA\u30F3\u30AF" }) })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "-" }), _jsx(StyledTd, { children: "\u30AD\u30FC\u30B9\u30A4\u30C3\u30C1" }), _jsx(StyledTd, { children: "47\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "-" }), _jsx(StyledTd, { children: "\u30AD\u30FC\u30AD\u30E3\u30C3\u30D7" }), _jsx(StyledTd, { children: "1U:46\u500B\u30011\uFF5E1.5U:1\u500B" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "-" }), _jsx(StyledTd, { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB" }), _jsx(StyledTd, { children: "44mm(34mmOP\u306E\u5834\u5408\u306F34mm)" }), _jsx(StyledTd, { children: "44mm\u306FProtoArc EM03\u3001ELECOM DEFT PRO\u304B\u3089\u90E8\u54C1\u53D6\u308A\u3001\u307E\u305F\u306F\u6D77\u5916\u901A\u8CA9\u30B5\u30A4\u30C8\u3067\u8CFC\u5165\u53EF\u80FD\u3067\u3059\u3002" })] })] })] }) }), _jsx(SectionHeading, { children: "\u5DE5\u5177\u3001\u305D\u306E\u4ED6" }), _jsx(StyledTableWrapper, { children: _jsxs(StyledTable, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx(StyledTh, { children: "\u5DE5\u5177\u540D" }), _jsx(StyledTh, { children: "\u6570\u91CF" }), _jsx(StyledTh, { children: "\u5099\u8003" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx(StyledTd, { children: "\u306F\u3093\u3060" }), _jsx(StyledTd, { children: "\u9069\u91CF" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u306F\u3093\u3060\u3054\u3066" }), _jsx(StyledTd, { children: "-" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u30DE\u30B9\u30AD\u30F3\u30B0\u30C6\u30FC\u30D7" }), _jsx(StyledTd, { children: "-" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u30AB\u30C3\u30BF\u30FC" }), _jsx(StyledTd, { children: "-" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u30CB\u30C3\u30D1\u30FC" }), _jsx(StyledTd, { children: "-" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u30EF\u30A4\u30E4\u30FC\u30B9\u30C8\u30EA\u30C3\u30D1\u30FC" }), _jsx(StyledTd, { children: "-" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u63A5\u7740\u5264(\u30A8\u30DD\u30AD\u30B7\u7CFB2\u6DB2\u6DF7\u5408\u30BF\u30A4\u30D7)" }), _jsx(StyledTd, { children: "-" }), _jsx(StyledTd, {})] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u30D7\u30E9\u30B9\u30C9\u30E9\u30A4\u30D0\u30FC(#0, #1)" }), _jsx(StyledTd, { children: "-" }), _jsx(StyledTd, {})] })] })] }) }), _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_02_01.jpg", alt: "Build 02 01", style: { width: '600px' } }), _jsx("img", { src: "img/build_02_02.jpg", alt: "Build 02 02", style: { width: '600px' } })] })] }), _jsxs(CollapsibleSection, { title: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9\u306E\u7D44\u307F\u7ACB\u3066", id: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9\u306E\u7D44\u307F\u7ACB\u3066", children: [_jsxs(SectionContainer, { id: "\u5DE6\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9", children: [_jsx(SectionHeading, { children: "\u5DE6\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9" }), _jsx("p", { children: "\u30A8\u30DD\u30AD\u30B7\u7CFB\u306E\u63A5\u7740\u5264\u3067\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9\u306B\u652F\u6301\u7403\u3092\u63A5\u7740\u3057\u307E\u3059\u3002" }), _jsxs(OrderedList, { children: [_jsx("li", { children: "\u63A5\u7740\u5264\u3092\u722A\u694A\u679D\u306A\u3069\u3067\u6DF7\u305C\u307E\u3059\u3002" }), _jsxs("li", { children: ["\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9\u306E\u304F\u307C\u307F3\u304B\u6240\u306B\u5C11\u91CF\u5857\u5E03\u3057\u307E\u3059\u3002", _jsxs(FlexWrap, { children: [_jsx("img", { src: "img/build_03_01.jpg", alt: "Build 03 01", style: { width: '300px' } }), _jsx("img", { src: "img/build_03_02.jpg", alt: "Build 03 02", style: { width: '169px' } })] })] }), _jsx("li", { children: "\u30D4\u30F3\u30BB\u30C3\u30C8\u306A\u3069\u3067\u652F\u6301\u7403\u3092\u304F\u307C\u307F\u306B\u5165\u308C\u307E\u3059\u3002" }), _jsxs("li", { children: ["\u8EFD\u304F\u6307\u306E\u8179\u3067\u62BC\u3048\u3001\u652F\u6301\u7403\u306E\u6D6E\u304D\u304C\u306A\u3044\u3088\u3046\u306B\u3057\u307E\u3059\u3002", _jsxs(FlexWrap, { children: [_jsx("img", { src: "img/build_03_03.jpg", alt: "Build 03 03", style: { width: '300px' } }), _jsx("img", { src: "img/build_03_04.jpg", alt: "Build 03 04", style: { width: '300px' } })] })] })] })] }), _jsxs(SectionContainer, { id: "\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9", children: [_jsx(SectionHeading, { children: "\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9" }), _jsx("p", { children: "\u30D9\u30A2\u30EA\u30F3\u30B0\u30E6\u30CB\u30C3\u30C8\u3092\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9\u306B\u53D6\u308A\u4ED8\u3051\u307E\u3059\u3002" }), _jsxs(OrderedList, { children: [_jsx("li", { children: "\u30B1\u30FC\u30B9\u306E\u30D9\u30A2\u30EA\u30F3\u30B0\u633F\u5165\u90E8\u306B\u4E0D\u8981\u306A\u5857\u819C\u304C\u3064\u3044\u3066\u3044\u306A\u3044\u304B\u78BA\u8A8D\u3057\u307E\u3059\u3002\u5857\u88C5\u304C\u3064\u3044\u3066\u3044\u308B\u5834\u5408\u306F\u3001\u30C9\u30E9\u30A4\u30D0\u30FC\u3084\u7D30\u3044\u3084\u3059\u308A\u3067\u9664\u53BB\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }), _jsxs("li", { children: ["\u30D9\u30A2\u30EA\u30F3\u30B0\u30E6\u30CB\u30C3\u30C8\u3092\u30B1\u30FC\u30B9\u306B\u4E57\u305B\u3001\u8EF8\u3092\u62BC\u3057\u8FBC\u307F\u307E\u3059\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_04_01.jpg", alt: "Build 04 01", style: { width: '300px' } }), _jsx("img", { src: "img/build_04_02.jpg", alt: "Build 04 02", style: { width: '300px' } })] }), _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_04_03.jpg", alt: "Build 04 03", style: { width: '300px' } }), _jsx("img", { src: "img/build_04_04.jpg", alt: "Build 04 04", style: { width: '300px' } })] })] })] })] })] }), _jsxs(CollapsibleSection, { title: "\u306F\u3093\u3060\u4ED8\u3051", id: "\u306F\u3093\u3060\u4ED8\u3051", children: [_jsx(AlertGray, { children: _jsxs("p", { children: [_jsx("strong", { children: "TIP:" }), ' ', "\u306F\u3093\u3060\u4ED8\u3051\u304C\u521D\u3081\u3066\u306E\u5834\u5408\u306F\u3001\u4E8B\u524D\u306B\u30CD\u30C3\u30C8\u30B7\u30E7\u30C3\u30D7\u306A\u3069\u3067\u8CA9\u58F2\u3057\u3066\u3044\u308B\u7DF4\u7FD2\u30AD\u30C3\u30C8\u3067\u7DF4\u7FD2\u3057\u3066\u304A\u304F\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002", _jsx("br", {}), "\u30B9\u30EB\u30FC\u30DB\u30FC\u30EB\u306E\u306F\u3093\u3060\u4ED8\u3051\u3001SMD(\u8868\u9762\u5B9F\u88C5)\u306E\u306F\u3093\u3060\u4ED8\u3051\u3092\u51FA\u6765\u308B\u3088\u3046\u306B\u3057\u3066\u304B\u3089\u7D44\u307F\u7ACB\u3066\u3092\u884C\u3046\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002", _jsx("br", {}), "\u30B9\u30EB\u30FC\u30DB\u30FC\u30EB\u306E\u306F\u3093\u3060\u4ED8\u3051\u5F8C\u3001\u98DB\u3073\u51FA\u3057\u305F\u90E8\u5206\u3092\u30AB\u30C3\u30C8\u3059\u308B\u5DE5\u7A0B\u304C\u3042\u308A\u307E\u3059\u304C\u3001\u30AB\u30C3\u30C8\u5F8C\u306B\u518D\u5EA6\u30B3\u30C6\u3092\u3042\u3066\u3001\u306F\u3093\u3060\u3092\u6EB6\u304B\u3059\u3053\u3068\u3067\u3001\u5185\u90E8\u5FDC\u529B\u3092\u9664\u53BB\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002", _jsx("br", {}), "(\u3053\u306E\u4F5C\u696D\u306F\u5FC5\u9808\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u9577\u671F\u7684\u306B\u4F7F\u7528\u3057\u305F\u5834\u5408\u306B\u3001\u306F\u3093\u3060\u304C\u5272\u308C\u308B\u30EA\u30B9\u30AF\u304C\u4E0B\u304C\u308A\u307E\u3059\u3002)"] }) }), _jsxs(SectionContainer, { id: "\u30C0\u30A4\u30AA\u30FC\u30C9\u3001\u30BD\u30B1\u30C3\u30C8\u3001\u30EA\u30BB\u30C3\u30C8\u30B9\u30A4\u30C3\u30C1\u3001L\u5B57\u30D4\u30F3\u30D8\u30C3\u30C0\u306E\u306F\u3093\u3060\u4ED8\u3051", children: [_jsx(SectionHeading, { children: "\u30C0\u30A4\u30AA\u30FC\u30C9\u3001\u30BD\u30B1\u30C3\u30C8\u3001\u30EA\u30BB\u30C3\u30C8\u30B9\u30A4\u30C3\u30C1\u3001L\u5B57\u30D4\u30F3\u30D8\u30C3\u30C0\u306E\u306F\u3093\u3060\u4ED8\u3051" }), _jsxs("p", { children: ["\u203B\u3053\u306E\u9805\u76EE\u306FPCBA\u306B\u3088\u308A\u3042\u3089\u304B\u3058\u3081\u53D6\u308A\u4ED8\u3051\u6E08\u307F\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002", _jsx("br", {}), "\u305D\u306E\u5834\u5408\u306F\u8A72\u5F53\u7B87\u6240\u3092\u98DB\u3070\u3057\u3066\u9032\u3081\u3066\u304F\u3060\u3055\u3044\u3002"] }), _jsxs(OrderedList, { children: [_jsxs("li", { children: ["\u5168\u3066\u306E\u30C0\u30A4\u30AA\u30FC\u30C9\u3068\u30BD\u30B1\u30C3\u30C8\u53D6\u308A\u4ED8\u3051\u90E8\u306E\u7247\u5074\u306B\u4E88\u5099\u306F\u3093\u3060\u3092\u3057\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_05_02.jpg", alt: "Build 05 02", style: { width: '300px' } }) })] }), _jsxs("li", { children: ["\u30C0\u30A4\u30AA\u30FC\u30C9\u3068\u30B7\u30EB\u30AF\u304C\u56F3\u306E\u5411\u304D\u306B\u306A\u308B\u3088\u3046\u306B\u7F6E\u304D\u3001\u30D4\u30F3\u30BB\u30C3\u30C8\u3067\u30C0\u30A4\u30AA\u30FC\u30C9\u3092\u62BC\u3048\u306A\u304C\u3089\u4E88\u5099\u306F\u3093\u3060\u3057\u305F\u3068\u3053\u308D\u306B\u306F\u3093\u3060\u4ED8\u3051\u3057\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_05_01.jpg", alt: "Build 05 01", style: { width: '300px' } }) })] }), _jsxs("li", { children: ["\u5168\u3066\u306E\u30C0\u30A4\u30AA\u30FC\u30C9\u306E\u7247\u5074\u3092\u306F\u3093\u3060\u4ED8\u3051\u3057\u305F\u3089\u3001\u5404\u30C0\u30A4\u30AA\u30FC\u30C9\u306E\u53CD\u5BFE\u5074\u306B\u3082\u306F\u3093\u3060\u4ED8\u3051\u3092\u3057\u307E\u3059\u3002", _jsxs(AlertGrayWarning, { children: [_jsxs("p", { children: [_jsx("strong", { children: "WARNING:" }), ' ', "\u30C0\u30A4\u30AA\u30FC\u30C9\u306E\u5411\u304D\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30C0\u30A4\u30AA\u30FC\u30C9\u306B\u306F\u6975\u6027\u304C\u3042\u308A\u3001\u5411\u304D\u3092\u9593\u9055\u3048\u308B\u3068\u6B63\u5E38\u306B\u52D5\u4F5C\u3057\u307E\u305B\u3093\u3002", _jsx("br", {}), "\u57FA\u677F\u306E\u30B7\u30EB\u30AF\u306E\u5207\u308A\u6B20\u304D(\u30B3)\u306B\u5408\u308F\u305B\u56F3\u306E\u69D8\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"] }), _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_05_03.jpg", alt: "Build 05 03", style: { width: '300px' } }) })] })] }), _jsxs("li", { children: ["\u540C\u3058\u8981\u9818\u3067\u30BD\u30B1\u30C3\u30C8\u3092\u306F\u3093\u3060\u4ED8\u3051\u3057\u307E\u3059\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_05_05.jpg", alt: "Build 05 05", style: { width: '300px' } }), _jsx("img", { src: "img/build_05_06.jpg", alt: "Build 05 06", style: { width: '300px' } })] })] }), _jsxs("li", { children: ["\u30EA\u30BB\u30C3\u30C8\u30B9\u30A4\u30C3\u30C1\u3092\u88CF\u5074\u304B\u3089\u5165\u308C\u3001\u8868\u5074\u304B\u3089\u306F\u3093\u3060\u4ED8\u3051\u3057\u307E\u3059\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_05_10.jpg", alt: "Build 05 10", style: { width: '300px' } }), _jsx("img", { src: "img/build_05_11.jpg", alt: "Build 05 11", style: { width: '300px' } })] })] }), _jsx("li", { children: "L\u5B57\u30D4\u30F3\u30D8\u30C3\u30C0\u3092\u306F\u3093\u3060\u4ED8\u3051\u3057\u307E\u3059\u3002" }), _jsxs("li", { children: ["\u88CF\u5074\u304B\u3089L\u5B57\u30D4\u30F3\u30D8\u30C3\u30C0\u5DEE\u3057\u8FBC\u307F\u3001\u50BE\u304B\u306A\u3044\u3088\u3046\u306B\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306EQI\u30B3\u30CD\u30AF\u30BF\u3092\u4E21\u7AEF\u306B\u3055\u3057\u30DE\u30B9\u30AD\u30F3\u30B0\u30C6\u30FC\u30D7\u3067\u56FA\u5B9A\u3057\u307E\u3059\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_05_07.jpg", alt: "Build 05 07", style: { width: '300px' } }), _jsx("img", { src: "img/build_05_08.jpg", alt: "Build 05 08", style: { width: '300px' } })] })] }), _jsxs("li", { children: ["\u8868\u5074\u304B\u3089\u306F\u3093\u3060\u4ED8\u3051\u3057\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_05_09.jpg", alt: "Build 05 09", style: { width: '300px' } }) })] })] })] }), _jsxs(SectionContainer, { id: "\u30DE\u30A4\u30B3\u30F3\u306E\u306F\u3093\u3060\u4ED8\u3051", children: [_jsx(SectionHeading, { children: "\u30DE\u30A4\u30B3\u30F3\u306E\u306F\u3093\u3060\u4ED8\u3051" }), _jsxs(OrderedList, { children: [_jsxs("li", { children: ["\u57FA\u677F\u88CF\u5074\u306B1x20\u306E\u30D4\u30F3\u30D8\u30C3\u30C0\u30922\u3064\u8F09\u305B\u3001\u305D\u306E\u4E0A\u306BRaspberry Pi Pico\u3092\u8F09\u305B\u307E\u3059\u3002", _jsx("br", {}), "\u3053\u306E\u6642\u306B\u57FA\u677F\u8868\u5074\u3078\u306E\u30D4\u30F3\u306E\u98DB\u3073\u51FA\u3057\u304C\u5C0F\u3055\u304F\u306A\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002", _jsx("br", {}), "(\u98DB\u3073\u51FA\u3057\u304C\u5927\u304D\u3044\u5834\u5408\u306F\u30AB\u30C3\u30C8\u3057\u3066\u4E0B\u3055\u3044\u3002\u57FA\u677F\u50741mm\u4EE5\u4E0B\u3001Pico\u50743mm\u4EE5\u4E0B\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002)", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_06_01.jpg", alt: "Build 06 01", style: { width: '300px' } }), _jsx("img", { src: "img/build_06_02.jpg", alt: "Build 06 02", style: { width: '300px' } })] })] }), _jsxs("li", { children: ["\u57FA\u677F\u5074\u3068Pico\u5074\u304C\u6D6E\u304B\u306A\u3044\u3088\u3046\u306B\u306F\u3093\u3060\u4ED8\u3051\u3092\u884C\u3044\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_06_03.jpg", alt: "Build 06 03", style: { width: '300px' } }) })] })] }), _jsx(AlertGrayNote, { children: _jsxs("p", { children: [_jsx("strong", { children: "NOTE:" }), ' ', "\u307E\u305A\u306F1\u7B87\u6240\u306F\u3093\u3060\u4ED8\u3051\u3057\u3001Pico\u3092\u62BC\u3048\u306A\u304C\u3089\u4ECA\u4ED8\u3051\u305F\u7B87\u6240\u306B\u518D\u5EA6\u306F\u3093\u3060\u3054\u3066\u3092\u5F53\u3066\u6EB6\u304B\u3059\u3068\u5BC6\u7740\u3055\u305B\u3084\u3059\u3044\u3067\u3059\u3002", _jsx("br", {}), "\u6700\u521D\u306E\u6570\u304B\u6240\u306F\u9806\u306B\u4E0A\u8A18\u624B\u9806\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u3067\u3001Pico\u3001\u57FA\u677F\u304C\u30BD\u30B1\u30C3\u30C8\u306B\u5BC6\u7740\u3057\u307E\u3059\u3002"] }) })] }), _jsxs(SectionContainer, { id: "\u30BB\u30F3\u30B5\u30FC\u306E\u306F\u3093\u3060\u4ED8\u3051", children: [_jsx(SectionHeading, { children: "\u30BB\u30F3\u30B5\u30FC\u306E\u306F\u3093\u3060\u4ED8\u3051" }), _jsxs("p", { children: ["\u203BPMW3360\u306F\u3042\u3089\u304B\u3058\u3081\u53D6\u308A\u4ED8\u3051\u6E08\u307F\u306E\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002", _jsx("br", {}), "\u305D\u306E\u5834\u5408\u306F\u8A72\u5F53\u7B87\u6240\u3092\u98DB\u3070\u3057\u3066\u9032\u3081\u3066\u304F\u3060\u3055\u3044\u3002"] }), _jsxs(OrderedList, { children: [_jsx("li", { children: "\u30C8\u30E9\u30DC\u57FA\u677F\u306BPMW3360\u3092\u306F\u3093\u3060\u4ED8\u3051\u3057\u307E\u3059\u3002" }), _jsxs("li", { children: ["\u5411\u304D\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002", _jsx("br", {}), "\u30BB\u30F3\u30B5\u30FC\u306E\u767D\u4E38\u304C\u3042\u308B\u3068\u3053\u308D\u304C\u3001\u57FA\u677F\u30B7\u30EB\u30AF\u306EC13\u5074\u306B\u306A\u308B\u3088\u3046\u30BB\u30F3\u30B5\u30FC\u3092\u53D6\u308A\u4ED8\u3051\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_07_01.jpg", alt: "Build 07 01", style: { width: '300px' } }) })] }), _jsxs("li", { children: ["\u6D6E\u304D\u304C\u306A\u3044\u3088\u3046\u306B\u30DE\u30B9\u30AD\u30F3\u30B0\u30C6\u30FC\u30D7\u306A\u3069\u3067\u4EEE\u56FA\u5B9A\u3057\u3001\u306F\u3093\u3060\u4ED8\u3051\u3092\u884C\u3044\u307E\u3059\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_07_02.jpg", alt: "Build 07 02", style: { width: '300px' } }), _jsx("img", { src: "img/build_07_03.jpg", alt: "Build 07 03", style: { width: '300px' } })] })] }), _jsx("li", { children: "\u30DE\u30B9\u30AD\u30F3\u30B0\u30C6\u30FC\u30D7\u3092\u5265\u304C\u3057\u307E\u3059\u3002" })] })] }), _jsxs(SectionContainer, { id: "\u57FA\u677F\u3068\u914D\u7DDA\u306E\u306F\u3093\u3060\u4ED8\u3051", children: [_jsx(SectionHeading, { children: "\u57FA\u677F\u3068\u914D\u7DDA\u306E\u306F\u3093\u3060\u4ED8\u3051" }), _jsxs(OrderedList, { children: [_jsxs("li", { children: ["\u914D\u7DDA\u306E\u88AB\u8986\u30925mm\u7A0B\u5EA6\u5411\u304D\u3001\u4E88\u5099\u306F\u3093\u3060\u3092\u3057\u3066\u304A\u304D\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_08_01.jpg", alt: "Build 08 01", style: { width: '300px' } }) })] }), _jsxs("li", { children: ["\u30C8\u30E9\u30DC\u57FA\u677F\u3068\u30E1\u30A4\u30F3\u57FA\u677F\u306E\u914D\u7DDA\u306E\u5BFE\u5FDC\u306F\u4E0B\u56F3\u306E\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002", _jsx("br", {}), "\u4E0B\u56F3\u3067\u307F\u3048\u3066\u3044\u308B\u5074\u304B\u3089\u5DEE\u3057\u8FBC\u307F\u3001\u53CD\u5BFE\u5074\u304B\u3089\u306F\u3093\u3060\u4ED8\u3051\u3057\u3066\u3044\u304D\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_08_05.jpg", alt: "Build 08 05", style: { width: '300px' } }) }), _jsx(StyledTableWrapper, { children: _jsxs(StyledTable, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx(StyledTh, { children: "\u914D\u7DDA\u9577\u3055(mm)" }), _jsx(StyledTh, { children: "\u53F3\u7528(\u56F3\u3067\u306F\u5DE6\u5074)" }), _jsx(StyledTh, { children: "\u5DE6\u7528(\u56F3\u3067\u306F\u53F3\u5074)" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx(StyledTd, { children: "\u9ED2" }), _jsx(StyledTd, { children: "230" }), _jsx(StyledTd, { children: "270" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u8D64" }), _jsx(StyledTd, { children: "230" }), _jsx(StyledTd, { children: "265" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u767D" }), _jsx(StyledTd, { children: "235" }), _jsx(StyledTd, { children: "260" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u9EC4" }), _jsx(StyledTd, { children: "235" }), _jsx(StyledTd, { children: "255" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u9752" }), _jsx(StyledTd, { children: "240" }), _jsx(StyledTd, { children: "250" })] }), _jsxs("tr", { children: [_jsx(StyledTd, { children: "\u7DD1" }), _jsx(StyledTd, { children: "240" }), _jsx(StyledTd, { children: "245" })] })] })] }) })] }), _jsxs("li", { children: ["\u30C8\u30E9\u30DC\u57FA\u677F\u306B\u914D\u7DDA\u3092\u5DEE\u3057\u8FBC\u307F\u3001\u30DE\u30B9\u30AD\u30F3\u30B0\u30C6\u30FC\u30D7\u3067\u4EEE\u6B62\u3081\u3057\u3001\u306F\u3093\u3060\u4ED8\u3051\u3057\u307E\u3059\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_08_02.jpg", alt: "Build 08 02", style: { width: '300px' } }), _jsx("img", { src: "img/build_08_03.jpg", alt: "Build 08 03", style: { width: '300px' } })] })] }), _jsxs("li", { children: ["\u30E1\u30A4\u30F3\u57FA\u677F\u3082\u540C\u69D8\u306B\u914D\u7DDA\u3092\u5DEE\u3057\u8FBC\u307F\u306F\u3093\u3060\u4ED8\u3051\u3057\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_08_06.jpg", alt: "Build 08 06", style: { width: '300px' } }) })] }), _jsxs("li", { children: ["\u306F\u3093\u3060\u4ED8\u3051\u5F8C\u5148\u7AEF\u306E\u4F59\u5206\u306B\u98DB\u3073\u51FA\u3057\u3066\u3044\u308B\u90E8\u5206\u306F\u30AB\u30C3\u30C8\u3057\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_08_04.jpg", alt: "Build 08 04", style: { width: '300px' } }) })] })] })] })] }), _jsxs(CollapsibleSection, { title: "\u7D44\u307F\u7ACB\u3066", id: "\u7D44\u307F\u7ACB\u3066", children: [_jsxs(SectionContainer, { id: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u53D6\u308A\u4ED8\u3051", children: [_jsx(SectionHeading, { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u53D6\u308A\u4ED8\u3051" }), _jsxs(OrderedList, { children: [_jsxs("li", { children: ["L\u5B57\u30D4\u30F3\u30D8\u30C3\u30C0\u306BQI\u30B3\u30CD\u30AF\u30BF\u3092\u5DEE\u3057\u8FBC\u307F\u3001\u57FA\u677F\u306E\u7A74\u304B\u3089\u30B3\u30CD\u30AF\u30BF\u3092\u8868\u5074\u306B\u51FA\u3057\u307E\u3059\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_09_01.jpg", alt: "Build 09 01", style: { width: '200px' } }), _jsx("img", { src: "img/build_09_02.jpg", alt: "Build 09 02", style: { width: '200px' } }), _jsx("img", { src: "img/build_09_03.jpg", alt: "Build 09 03", style: { width: '200px' } })] })] }), _jsxs("li", { children: ["\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3068\u30B3\u30CD\u30AF\u30BF\u3092\u63A5\u7D9A\u3057\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_09_04.jpg", alt: "Build 09 04", style: { width: '200px' } }) })] }), _jsxs("li", { children: ["\u57FA\u677F\u3001\u30B9\u30DA\u30FC\u30B5\u3001\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3092M2\u306E\u30CD\u30B8\u3067\u56FA\u5B9A\u3057\u307E\u3059\u3002 \u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30CD\u30B8\u7A74\u304C\u30B7\u30FC\u30EB\u3067\u4FDD\u8B77\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u53D6\u308A\u4ED8\u3051\u524D\u306B\u5265\u304C\u3057\u3066\u304F\u3060\u3055\u3044\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_09_05.jpg", alt: "Build 09 05", style: { width: '200px' } }), _jsx("img", { src: "img/build_09_06.jpg", alt: "Build 09 06", style: { width: '200px' } }), _jsx("img", { src: "img/build_09_07.jpg", alt: "Build 09 07", style: { width: '200px' } }), _jsx("img", { src: "img/build_09_08.jpg", alt: "Build 09 08", style: { width: '400px' } })] })] })] })] }), _jsxs(SectionContainer, { id: "\u57FA\u677F\u306E\u30C6\u30B9\u30C8", children: [_jsx(SectionHeading, { children: "\u57FA\u677F\u306E\u30C6\u30B9\u30C8" }), _jsxs(OrderedList, { children: [_jsxs("li", { children: [_jsx("a", { href: "../build", style: { color: '#a9a9a9', textDecoration: 'none' }, children: "\u3053\u3061\u3089" }), "\u304B\u3089omni_cs_00_00_00_vial.uf2\u306Efirmware\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002(\u6570\u5024\u90E8\u5206\u306F\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u3088\u3063\u3066\u7570\u306A\u308A\u307E\u3059)"] }), _jsx("li", { children: "Raspberry Pi Pico\u306Eboot\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u306A\u304C\u3089USB\u306B\u3055\u3057\u307E\u3059\u3002" }), _jsxs("li", { children: ["\u4E0B\u56F3\u306E\u753B\u9762\u304C\u7ACB\u3061\u4E0A\u304C\u3063\u305F\u3089\u3001\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u305Ffirmware\u3092\u30C9\u30E9\u30C3\u30B0\u30A2\u30F3\u30C9\u30C9\u30ED\u30C3\u30D7\u3067\u79FB\u3057\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_10_01.jpg", alt: "Build 10 01", style: { width: '500px' } }) })] })] }), _jsx("p", { style: { fontWeight: 'bold', marginTop: '1rem' }, children: "\u78BA\u8A8D\u9805\u76EE" }), _jsxs(UnorderedList, { children: [_jsx("li", { children: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u304B" }), _jsx("li", { children: "\u30B9\u30EF\u30A4\u30D7\u3084\u9577\u62BC\u3057(3\u79D2\u4EE5\u4E0A)\u304C\u53CD\u5FDC\u3059\u308B\u304B" }), _jsx("li", { children: "\u30EC\u30F3\u30BA\u304C\u3064\u3044\u305F\u72B6\u614B\u3067\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30BB\u30F3\u30B5\u30FC\u304C\u53CD\u5FDC\u3059\u308B\u304B(\u6307\u3067\u306A\u305E\u308A\u30AB\u30FC\u30BD\u30EB\u3001\u30B9\u30AF\u30ED\u30FC\u30EB\u304C\u52D5\u304F\u304B)" }), _jsxs("li", { children: ["\u30AD\u30FC\u30B9\u30A4\u30C3\u30C1\u304C\u53CD\u5FDC\u3059\u308B\u304B(\u5404\u30AD\u30FC\u306E\u30D4\u30F3\u3092\u30D4\u30F3\u30BB\u30C3\u30C8\u306A\u3069\u3067\u89E6\u308A\u5C0E\u901A\u3055\u305B\u3066\u304F\u3060\u3055\u3044\u3002)", _jsx(FlexCenter, { children: _jsx("img", { src: "img/readme_layer.gif", alt: "Readme Layer", style: { width: '300px' } }) })] })] })] }), _jsxs(SectionContainer, { id: "\u672C\u4F53\u306E\u7D44\u307F\u7ACB\u3066", children: [_jsx(SectionHeading, { children: "\u672C\u4F53\u306E\u7D44\u307F\u7ACB\u3066" }), _jsxs(OrderedList, { children: [_jsxs("li", { children: ["PCB\u30D9\u30FC\u30B9\u306B\u57FA\u677F\u3092\u4EEE\u6B62\u3081\u3057\u307E\u3059\u3002(\u4E00\u5EA6\u7DE0\u7D50\u3057\u305F\u5F8C\u306B1/4\u56DE\u8EE2\u7A0B\u5EA6\u30CD\u30B8\u3092\u623B\u3057\u3066\u304F\u3060\u3055\u3044\u3002) PCB\u30D9\u30FC\u30B9LR\u306B2\u30AB\u6240\u305A\u3064\u7A81\u8D77\u304C\u3042\u308B\u306E\u3067\u3001\u57FA\u677F\u306E\u4F4D\u7F6E\u6C7A\u3081\u7A74\u306B\u5408\u308F\u305B\u3066\u304F\u3060\u3055\u3044\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_12_01.jpg", alt: "Build 12 01", style: { width: '400px' } }), _jsx("img", { src: "img/build_12_02.jpg", alt: "Build 12 02", style: { width: '400px' } })] })] }), _jsxs("li", { children: ["\u30C8\u30E9\u30DC\u57FA\u677F\u3068\u30C8\u30E9\u30DCPCB\u30D9\u30FC\u30B9\u3092\u30CD\u30B8\u3067\u56FA\u5B9A\u3057\u305F\u5F8C\u3001\u914D\u7DDA\u3092\u56FA\u5B9A\u3057\u307E\u3059\u3002", _jsx("br", {}), "\u30C8\u30E9\u30DCPCB\u30D9\u30FC\u30B9\u306F\u89D2\u5EA6\u304C\u5782\u76F4\u306B\u8FD1\u3044\u65B9\u304C\u5DE6\u624B\u7528(25mm\u7528)\u306B\u306A\u308A\u307E\u3059\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_12_03.jpg", alt: "Build 12 03", style: { width: '400px' } }), _jsx("img", { src: "img/build_12_04.jpg", alt: "Build 12 04", style: { width: '400px' } })] })] }), _jsxs("li", { children: ["\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u914D\u7DDA\u306F\u30DE\u30B9\u30AD\u30F3\u30B0\u30C6\u30FC\u30D7\u3067\u6B62\u3081\u3001\u30BB\u30F3\u30B5\u30FC\u306E\u914D\u7DDA\u3092PCB\u30D9\u30FC\u30B9\u306B\u6CBF\u308F\u305B\u3066\u56FA\u5B9A\u3057\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_12_05.jpg", alt: "Build 12 05", style: { width: '400px' } }) }), _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_12_06.jpg", alt: "Build 12 06", style: { width: '400px' } }), _jsx("img", { src: "img/build_12_07.jpg", alt: "Build 12 07", style: { width: '400px' } })] })] }), _jsxs("li", { children: ["PCB\u30D9\u30FC\u30B9\u3068\u30DC\u30C8\u30E0\u30D7\u30EC\u30FC\u30C8\u3092\u4EEE\u6B62\u3081\u3057\u307E\u3059(\u4E00\u5EA6\u7DE0\u7D50\u3057\u305F\u5F8C\u306B1/4\u56DE\u8EE2\u7A0B\u5EA6\u30CD\u30B8\u3092\u623B\u3057\u3066\u304F\u3060\u3055\u3044\u3002)\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_12_08.jpg", alt: "Build 12 08", style: { width: '400px' } }), _jsx("img", { src: "img/build_12_09.jpg", alt: "Build 12 09", style: { width: '400px' } })] })] }), _jsxs("li", { children: ["\u5148\u307B\u3069\u4EEE\u6B62\u3081\u3057\u305F\u57FA\u677F\u3068PCB\u30D9\u30FC\u30B9\u306E\u30CD\u30B8\u3092\u7DE0\u3081\u3066\u56FA\u5B9A\u3057\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_12_02.jpg", alt: "Build 12 02", style: { width: '400px' } }) })] }), _jsxs("li", { children: ["\u30DC\u30C8\u30E0\u30D7\u30EC\u30FC\u30C8\u306B\u30C8\u30E9\u30DCPCB\u30D9\u30FC\u30B9\u3092\u53D6\u308A\u4ED8\u3051\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_12_10.jpg", alt: "Build 12 10", style: { width: '400px' } }) })] }), _jsxs("li", { children: ["\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u4FDD\u8B77\u30B7\u30FC\u30EB\u3092\u5265\u304C\u3057\u3001\u30E1\u30A4\u30F3\u30B1\u30FC\u30B9\u3092\u30DC\u30C8\u30E0\u30D7\u30EC\u30FC\u30C8\u306B\u8F09\u305B\u307E\u3059\u3002", _jsx("br", {}), "\u4E09\u679A\u76EE\u306E\u3088\u3046\u306B\u5965\u5074\u304B\u3089\u5165\u308C\u308B\u3068\u53D6\u308A\u4ED8\u3051\u3084\u3059\u3044\u3067\u3059\u3002", _jsxs(HorizontalScrollContainer, { children: [_jsx("img", { src: "img/build_12_11.jpg", alt: "Build 12 11", style: { width: '400px' } }), _jsx("img", { src: "img/build_12_13.jpg", alt: "Build 12 13", style: { width: '400px' } }), _jsx("img", { src: "img/build_12_12.jpg", alt: "Build 12 12", style: { width: '180px' } })] })] }), _jsxs("li", { children: ["\u4E21\u7AEF\u306E4\u7B87\u6240\u306B\u30AD\u30FC\u30B9\u30A4\u30C3\u30C1\u3092\u5165\u308C\u307E\u3059\u3002", _jsx("br", {}), "\u203B\u57FA\u677F\u304C\u5C11\u3057\u52D5\u304F\u72B6\u614B\u3067\u30B9\u30A4\u30C3\u30C1\u3067PCB\u3068\u30E1\u30A4\u30F3\u30B1\u30FC\u30B9\u306E\u4F4D\u7F6E\u5408\u308F\u305B\u3092\u3057\u3066\u3044\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_12_14.jpg", alt: "Build 12 14", style: { width: '400px' } }) })] }), _jsxs("li", { children: ["\u30DC\u30C8\u30E0\u30D7\u30EC\u30FC\u30C8\u306B\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9\u3092\u8F09\u305B\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_12_15.jpg", alt: "Build 12 15", style: { width: '400px' } }) })] }), _jsxs("li", { children: ["\u30E1\u30A4\u30F3\u30B1\u30FC\u30B9\u3001\u30DC\u30FC\u30EB\u30B1\u30FC\u30B9\u306BM2.6\u306E\u30CD\u30B8\u53D6\u308A\u4ED8\u3051\u3001\u4EEE\u6B62\u3081\u3057\u3066\u3044\u305F\u30CD\u30B8\u3092\u5168\u3066\u7DE0\u3081\u307E\u3059\u3002", _jsx("br", {}), "\u305D\u306E\u5F8C\u3001\u30A2\u30B8\u30E3\u30B9\u30BF\u30FC\u3001\u30B4\u30E0\u811A\u3092\u4ED8\u3051\u307E\u3059\u3002", _jsx("br", {}), "\u8D64\u4E38\u90E8\u306F\u30CD\u30B8\u3092\u53D6\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u3002", _jsx("br", {}), "\u305D\u306E\u4ED6\u306E\u7A74\u306F\u30DC\u30C8\u30E0\u30D7\u30EC\u30FC\u30C8\u3068\u306E\u9593\u306B\u9699\u9593\u304C\u3042\u308B\u5834\u5408\u306A\u3069\u3001\u6C17\u306B\u306A\u308B\u5834\u5408\u306F\u53D6\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/build_12_16.jpg", alt: "Build 12 16", style: { width: '400px' } }) })] }), _jsxs("li", { children: ["\u6B8B\u308A\u306E\u30AD\u30FC\u30B9\u30A4\u30C3\u30C1\u3001\u30AD\u30FC\u30AD\u30E3\u30C3\u30D7\u3001\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u3092\u53D6\u308A\u4ED8\u3051\u307E\u3059\u3002", _jsx(FlexCenter, { children: _jsx("img", { src: "img/readme_top.jpg", alt: "Readme Top", style: {
                                                                        width: '100%',
                                                                        maxWidth: '400px',
                                                                        borderRadius: '0.375rem',
                                                                    } }) })] })] })] })] }), _jsx(CollapsibleSection, { title: "\u5B8C\u6210", id: "\u5B8C\u6210", children: _jsxs("p", { children: ["\u7D44\u307F\u7ACB\u3066\u304A\u75B2\u308C\u3055\u307E\u3067\u3057\u305F\u3002", _jsx("br", {}), "\u3053\u308C\u3067omni CS\u306E\u5B8C\u6210\u306B\u306A\u308A\u307E\u3059\u3002", _jsx("br", {}), "\u4F7F\u3044\u65B9\u306F", _jsx("a", { href: "../readme.md", style: { color: '#a9a9a9', textDecoration: 'none' }, children: "readme" }), "\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002"] }) }), _jsx(CollapsibleSection, { title: "\u6700\u5F8C\u306B", id: "\u6700\u5F8C\u306B", children: _jsxs("p", { children: ["\u3082\u3057\u3088\u308D\u3057\u3051\u308C\u3070\u3001\u5B8C\u6210\u54C1\u3092", _jsx("a", { href: "https://x.com/home", style: { color: '#a9a9a9', textDecoration: 'none' }, children: "X" }), "\u306A\u3069\u306ESNS\u306B\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0", _jsx("code", { children: "#omni_kbd" }), "\u3092\u4ED8\u3051\u3066\u6295\u7A3F\u3044\u305F\u3060\u3051\u308B\u3068\u3046\u308C\u3057\u3044\u3067\u3059\u3002", _jsx("br", {}), "\u307E\u305F\u3001\u30B5\u30DD\u30FC\u30C8\u304C\u5FC5\u8981\u306A\u5834\u5408\u3084\u3054\u610F\u898B\u306A\u3069\u3042\u308A\u307E\u3057\u305F\u3089\u3001\u30C7\u30A3\u30B9\u30B3\u30FC\u30C9\u306E\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u307E\u3067\u3054\u9023\u7D61\u4E0B\u3055\u3044\u3002"] }) })] })] }), _jsx(BackToTop, {})] }));
};
export default BuildGuide;
/* 全体レイアウト */
const BuildGuideContainer = styled.div `
  min-height: 100vh;
  background-color: transparent; /* 背景はグローバルスタイルで統一 */
`;
/* ヘッダー */
const HeaderWrapper = styled.header `
  /* background-color: #6a6a6a;  */
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); */
  margin-bottom: 1rem;
`;
const HeaderContainer = styled.div `
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const HeaderImage = styled.img `
  width: 10rem;
  border-radius: 0.375rem;
  @media (min-width: 450px) {
    width: 24rem;
  }
`;
const TextContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  text-align: center;
  color: #6a6a6a;
  font-weight: bold;
  font-size: 1.25rem;
  @media (min-width: 450px) {
    margin-top: 0;
    margin-left: 1rem;
    text-align: left;
  }
`;
/* メインレイアウト */
const ContentContainer = styled.div `
  max-width: 1000px;
  background-color: #fff;
  width: auto;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 450px) {
    flex-direction: row;
  }
`;
const Aside = styled.aside `
  width: 100%;
  margin-bottom: 2rem;
  @media (min-width: 450px) {
    width: 25%;
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
`;
const MainContent = styled.main `
  width: 100%;
  @media (min-width: 450px) {
    width: 75%;
  }
`;
const TocNav = styled.nav `
  position: sticky;
  top: 1rem;
  padding: 1rem;
  background-color: #efefef;
  border: 1px solid #636363;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

  /* 幅を固定 or 最大幅で制限 */
  width: 150px;
  /* もしくは max-width: 200px; として可変にすることも可能 */
`;
const TocHeading = styled.h3 `
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #6a6a6a;
`;
const TocList = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0;
`;
const TocListItem = styled.li `
  margin-bottom: 0.5rem;
  ul {
    margin-left: 1rem;
    list-style: disc;
  }
`;
const TocLink = styled.a `
  color: #6a6a6a;
  text-decoration: none;

  /* ここで省略表示 */
  display: block; /* block or inline-block が必要 */
  width: 100%; /* 親要素の幅いっぱいに合わせる */
  white-space: nowrap; /* 折り返しをしない */
  overflow: hidden; /* はみ出しを隠す */
  text-overflow: ellipsis; /* 文字があふれたら「…」を付ける */

  &:hover {
    text-decoration: underline;
  }
`;
/* CollapsibleSection 用スタイル */
const SectionWrapper = styled.section `
  margin-bottom: 3rem;
  border: 1px solid #3a3a3a;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
`;
const CollapsibleHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6e6e6;
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
`;
const CollapsibleTitle = styled.h2 `
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;
const CollapsibleContent = styled.div `
  padding: ${({ open }) => (open ? '1rem' : '0 1rem')};
  transition: all 0.3s;
  max-height: ${({ open }) => (open ? '200000px' : '0')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  overflow: hidden;
`;
/* BackToTop ボタン */
const BackToTopButton = styled.button `
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  padding: 0.75rem;
  background-color: #efefef;
  color: #6a6a6a;
  border: none;
  border-radius: 9999px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  cursor: pointer;
`;
/* テーブル用スタイル */
const StyledTableWrapper = styled.div `
  overflow-x: auto;
  margin-bottom: 0.1rem;
`;
const StyledTable = styled.table `
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #444;
`;
const StyledTh = styled.th `
  border: 1px solid #444;
  padding: 0.5rem;
  background-color: #efefef;
  color: #6a6a6a;
`;
const StyledTd = styled.td `
  border: 1px solid #444;
  padding: 0.1rem 0.5rem;
  color: #6a6a6a;
  font-size: 0.8rem;
`;
/* アラート（モノトーン版） */
const AlertGray = styled.div `
  background-color: #efefef;
  border-left: 4px solid #666;
  color: #6a6a6a;
  padding: 1rem;
  margin-bottom: 2rem;
`;
const AlertGrayWarning = styled(AlertGray) `
  border-left-color: #888;
`;
const AlertGrayNote = styled(AlertGray) `
  border-left-color: #555;
`;
/* リスト */
const OrderedList = styled.ol `
  list-style-type: decimal;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  li {
    margin-bottom: 0.5rem;
  }
`;
const UnorderedList = styled.ul `
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  li {
    margin-bottom: 0.5rem;
  }
`;
/* 画像等のフレックスコンテナ */
const FlexWrap = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`;
const FlexCenter = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;
// const FlexWrapCenter = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
//   margin-top: 0.5rem;
//   justify-content: center;
// `;
/* 各セクションのコンテナ */
const SectionContainer = styled.section `
  margin-bottom: 2rem;
`;
/* セクション見出し */
const SectionHeading = styled.h3 `
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #6a6a6a;
`;
const HorizontalScrollContainer = styled.div `
  display: flex; /* フレックスコンテナで横方向に並べる */
  flex-wrap: nowrap; /* 折り返ししない */
  gap: 1rem; /* 画像同士の隙間 */
  overflow-x: auto; /* 横スクロールを許可 */
  overflow-y: hidden; /* 縦方向のスクロールバーは表示しない（必要に応じて） */
  margin-top: 1rem; /* 余白調整 */

  /* 画像の基本スタイル */
  img {
    flex: 0 0 auto; /* 要素幅を自動で決める（収まり切らない場合は横スクロール） */
    max-width: 300px; /* 必要に応じて画像の最大幅を制限 */
    height: auto;
    border-radius: 0.375rem;
  }
`;
