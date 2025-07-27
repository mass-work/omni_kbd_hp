import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
import { CodeBlock, dracula } from 'react-code-blocks';
//
// ▼▼▼ CopyableCodeBlock: react-code-blocks + コピー機能付きコンポーネント ▼▼▼
//
const CopyableCodeBlock = ({ code, language = 'bash' }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
        catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    return (_jsxs(CodeWrapper, { children: [_jsx(CopyButton, { onClick: handleCopy, children: copied ? 'Copied!' : 'Copy' }), _jsx(CodeBlock, { text: code, language: language, showLineNumbers: false, theme: dracula })] }));
};
//
// ▼▼▼ UsageGuideコンポーネント本体 ▼▼▼
//
const UsageGuide = () => {
    return (_jsxs(Container, { children: [_jsx(Title, { children: "omni kbd Readme" }), _jsx(Description, { children: "omni kbd\u306F\u30C7\u30E5\u30A2\u30EB\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u3092\u642D\u8F09\u3057\u305F\u4E00\u4F53\u578B40%\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u81EA\u4F5C\u30AD\u30C3\u30C8\u30B7\u30EA\u30FC\u30BA\u3067\u3059\u3002 \u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u7279\u5FB4\u3001\u4F7F\u3044\u65B9\u3001\u8A2D\u5B9A\u65B9\u6CD5\u306A\u3069\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_top.jpg`, alt: "omni kbd" }), _jsx(NoticeLink, { children: _jsx("a", { href: "https://mass-work.github.io/omni_kbd_hp/#/pre-purchase-notice", children: "\u8CFC\u5165\u524D\u306E\u6CE8\u610F\u70B9" }) }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "omni kbd\u30B7\u30EA\u30FC\u30BA\u306B\u3064\u3044\u3066" }), _jsxs(Product, { children: [_jsx(ProductTitle, { children: "omni CS" }), _jsxs(ProductDetails, { children: [_jsx("li", { children: "\u914D\u5217: \u30AB\u30E9\u30E0\u30B9\u30BF\u30C3\u30AC\u30FC\u30C9" }), _jsx("li", { children: "\u30E1\u30A4\u30F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB: 44mm (\u30AA\u30D7\u30B7\u30E7\u30F3 34mm)" }), _jsx("li", { children: "\u30B5\u30D6\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB: 25mm" }), _jsx("li", { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4: \u6709\u308A" }), _jsx("li", { children: "\u30B9\u30A4\u30C3\u30C1: cherryMX" }), _jsx("li", { children: _jsx("a", { href: "https://masskb.booth.pm/items/6487849", target: "_blank", rel: "noreferrer", children: "shop" }) })] }), _jsx("p", { children: "\u30AD\u30FC\u5165\u529B\u3084\u30DE\u30A6\u30B9\u306E\u64CD\u4F5C\u6027\u306B\u91CD\u304D\u3092\u7F6E\u3044\u3066\u3044\u307E\u3059\u3002\u30C7\u30B9\u30AF\u4E0A\u306B\u636E\u3048\u7F6E\u304D\u3001 \u300C\u3042\u3089\u3086\u308BPC\u4F5C\u696D\u3092\u52B9\u7387\u7684\u306B\u3053\u306A\u3059\u300D\u3092\u30B3\u30F3\u30BB\u30D7\u30C8\u306B\u8A2D\u8A08\u3057\u3066\u3044\u307E\u3059\u3002" })] }), _jsxs(Product, { children: [_jsx(ProductTitle, { children: "omni orth" }), _jsxs(ProductDetails, { children: [_jsx("li", { children: "\u914D\u5217: \u30AA\u30FC\u30BD\u30EA\u30CB\u30A2" }), _jsx("li", { children: "\u5DE6\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB: 25mm" }), _jsx("li", { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4: \u6709\u308A" }), _jsx("li", { children: "\u30B9\u30A4\u30C3\u30C1: lofree low profile, choc v1" })] }), _jsx("p", { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306F\u5DE6\u53F3\u3068\u3082\u306B25mm\u3092\u63A1\u7528\u3002\u6253\u9375\u611F\u3068\u64CD\u4F5C\u6027\u306E\u30D0\u30E9\u30F3\u30B9\u3092\u91CD\u8996\u3057\u305F\u30ED\u30FC\u30D7\u30ED\u30D5\u30A1\u30A4\u30EB\u5C02\u7528\u8A2D\u8A08\u3067\u3059\u3002" })] }), _jsxs(Product, { children: [_jsx(ProductTitle, { children: "omni row" }), _jsxs(ProductDetails, { children: [_jsx("li", { children: "\u914D\u5217: \u30ED\u30A6\u30B9\u30BF\u30C3\u30AC\u30FC\u30C9" }), _jsx("li", { children: "\u5DE6\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB: \u30B5\u30A4\u30BA\u672A\u5B9A" }), _jsx("li", { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4: \u672A\u5B9A" }), _jsx("li", { children: "\u30B9\u30A4\u30C3\u30C1: \u672A\u5B9A" })] })] })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "\u30AD\u30FC\u30DE\u30C3\u30D7" }), _jsxs("p", { children: ["\u30AD\u30FC\u30DE\u30C3\u30D7\u306F", _jsx("a", { href: "https://vial.rocks/", target: "_blank", rel: "noreferrer", children: "Vial" }), "\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002 Vial\u306E\u4F7F\u3044\u65B9\u306B\u3064\u3044\u3066\u306F\u89E3\u8AAC\u8A18\u4E8B\u304C\u8C4A\u5BCC\u306A\u306E\u3067\u3001\u516C\u5F0F\u30B5\u30A4\u30C8\u3084\u30D6\u30ED\u30B0\u3092\u53C2\u8003\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"] }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_vial_allkeymap.jpg`, alt: "Vial \u30AD\u30FC\u30DE\u30C3\u30D7" })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9" }), _jsx("p", { children: "omni kbd\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3059\u308B\u305F\u3081\u306E\u30AD\u30FC\u30B3\u30FC\u30C9\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002" }), _jsx("p", { children: "\u753B\u50CF\u4E0B\u6BB5\u306E\u300CUser\u300D\u30BF\u30D6\u304B\u3089\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002\u3002" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_custom_keycode.jpg`, alt: "\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9" }), _jsxs("ol", { children: [_jsx("li", { children: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u5207\u66FF\uFF1ATcKey\u3001TbTun\u3001Swget\u3001KeyMp\u3067\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002" }), _jsx("li", { children: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8272\u5909\u66F4\uFF1A\u3007\u3007H\u3001S\u3001V\u3001\u306E\u5024\u3092\u00B1\u3059\u308B\u3053\u3068\u3067\u7279\u5B9A\u306E\u30E2\u30FC\u30C9\u3067\u753B\u9762\u3084\u6587\u5B57\u306E\u8272\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002" }), _jsx("li", { children: "\u53F3\u624B\u30DC\u30FC\u30EB\u30B9\u30AF\u30ED\u30FC\u30EB\uFF1ATbrCg\u3092\u62BC\u3057\u3066\u3044\u308B\u9593\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u3067\u30B9\u30AF\u30ED\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002" }), _jsx("li", { children: "\u30AA\u30FC\u30C8\u30DE\u30A6\u30B9\u30EC\u30A4\u30E4\u30FC\uFF1AAmlTg\u3067\u6709\u52B9/\u7121\u52B9\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002" })] })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4" }), _jsx("p", { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u8A2D\u5B9A\u3055\u308C\u305F\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9\u3092\u62BC\u4E0B\u3059\u308B\u3053\u3068\u3067\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002" }), _jsx("p", { children: "\u521D\u671F\u72B6\u614B\u3067\u306F\u30EC\u30A4\u30E4\u30FC3\u306E\u53F3\u624B\u5074\u4E0A\u6BB5\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002" }), _jsxs("ol", { children: [_jsx("li", { children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9\uFF1A\u5186\u5468\u4E0A\u306B\u914D\u7F6E\u3055\u308C\u305F\u30DC\u30BF\u30F3\u3092\u30BF\u30C3\u30C1\u3059\u308B\u3053\u3068\u3067\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30E2\u30FC\u30C9\uFF1A\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u52D5\u304D\u3092\u8ABF\u6574\u3059\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002" }), _jsx("li", { children: "\u30B9\u30EF\u30A4\u30D7\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC\u30E2\u30FC\u30C9(\u30D9\u30FC\u30BF)\uFF1A\u30B9\u30EF\u30A4\u30D7\u3059\u308B\u3053\u3068\u3067\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30AD\u30FC\u30DE\u30C3\u30D7\u8868\u793A\u30E2\u30FC\u30C9(\u30D9\u30FC\u30BF)\uFF1AJIS\u914D\u5217\u306E\u30AD\u30FC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3057\u305F\u6587\u5B57\u3084\u8A18\u53F7\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8868\u793A\u3057\u307E\u3059\u3002" })] })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9" }), _jsx("p", { children: "\u30A2\u30A4\u30B3\u30F3\u3068\u30AD\u30FC\u5165\u529B\u3092\u767B\u9332\u3067\u304D\u307E\u3059\u3002" }), _jsx("p", { children: "\u203B\u30BF\u30C3\u30C1\u30AD\u30FC\u306F\u30EC\u30A4\u30E4\u30FC\u30AD\u30FC\u304C\u62BC\u3055\u308C\u3066\u3044\u306A\u3044\u72B6\u614B(\u30EC\u30A4\u30E4\u30FC0)\u3067\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_vial_touchkeymap.jpg`, alt: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30DE\u30C3\u30D7" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_icon_change.gif`, alt: "\u30A2\u30A4\u30B3\u30F3\u5909\u66F4", style: { width: '300px' } }), _jsxs("ol", { children: [_jsx("li", { children: "layer0 \u306B\u5165\u529B\u3057\u305F\u3044\u30AD\u30FC\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u3053\u306E\u6642\u306B\u30DE\u30AF\u30ED\u30DC\u30BF\u30F3\u3092\u767B\u9332\u3059\u308B\u3053\u3068\u3067\u3001\u69D8\u3005\u306A\u6A5F\u80FD\u3092\u4ED8\u4E0E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002" }), _jsx("li", { children: "layer1 \u3067\u547C\u3073\u51FA\u3059\u30A2\u30A4\u30B3\u30F3\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30DE\u30AF\u30ED\u30DC\u30BF\u30F3\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u5404\u30DC\u30BF\u30F3\u306B\u5BFE\u5FDC\u3057\u305F\u30A2\u30A4\u30B3\u30F3\u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002" })] }), _jsxs("ol", { children: ["\u203B\u547C\u3073\u51FA\u3055\u308C\u308B\u30A2\u30A4\u30B3\u30F3\u306F\u300C", _jsx("a", { href: "https://github.com/mass-work/omni_kbd/blob/main/icon.md", target: "_blank", rel: "noreferrer", children: "\u3053\u3061\u3089" }), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"] })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30E2\u30FC\u30C9" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_tbtune.jpg`, alt: "TBTUNE", style: { width: '300px' } }), _jsx("p", { children: "\u5404\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u79FB\u52D5\u91CF\u3068\u901F\u5EA6\u306E\u30D0\u30E9\u30F3\u30B9\u3092\u8ABF\u6574\u3067\u304D\u307E\u3059\u3002" }), _jsx("p", { children: "\u753B\u9762\u5DE6\u5074\u304C\u5DE6\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u3001\u53F3\u5074\u304C\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u8A2D\u5B9A\u306B\u306A\u308A\u307E\u3059\u3002" }), _jsxs("ol", { children: [_jsx("li", { children: "\u5404\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u53F3\u5074\u306E\u00B1\u3092\u30BF\u30C3\u30C1\u3057\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u901F\u5EA6\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u5404\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u5DE6\u5074\u306E\u00B1\u3092\u30BF\u30C3\u30C1\u3057\u3086\u3063\u304F\u308A\u52D5\u304B\u3057\u305F\u6642/\u65E9\u304F\u52D5\u304B\u3057\u305F\u6642\u306E\u30D0\u30E9\u30F3\u30B9\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "1.2.\u3092\u7E70\u308A\u8FD4\u3057\u64CD\u4F5C\u611F\u304C\u3088\u304F\u306A\u3063\u305F\u3089\u8ABF\u6574\u7D42\u4E86\u3067\u3059\u3002" }), _jsx("li", { children: "\uD83D\uDCBE\u30DC\u30BF\u30F3\u3092\u30BF\u30C3\u30D7\u3059\u308B\u3068\u8A2D\u5B9A\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059" })] })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "\u30B9\u30EF\u30A4\u30D7\u30B8\u30A7\u30B9\u30C1\u30E3\u2015\u30E2\u30FC\u30C9(\u30D9\u30FC\u30BF\u7248)" }), _jsxs("ul", { children: [_jsx("li", { children: "\u30B9\u30EF\u30A4\u30D7\u306B\u3088\u308A\u3001\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u306E\u5165\u529B\u7B49\u304C\u51FA\u6765\u307E\u3059\u3002" }), _jsxs("li", { children: ["\u30EC\u30A4\u30E4\u30FC0", _jsxs("ul", { children: [_jsx("li", { children: "\u5DE6\uFF1ACtrl+Z" }), _jsx("li", { children: "\u53F3\uFF1ACtrl+Y" }), _jsx("li", { children: "\u4E0A\uFF1ACtrl+S" })] })] }), _jsxs("li", { children: ["\u30EC\u30A4\u30E4\u30FC1", _jsxs("ul", { children: [_jsx("li", { children: "\u5DE6\uFF1ACtrl+PgUp" }), _jsx("li", { children: "\u53F3\uFF1ACtrl+PgDown" }), _jsx("li", { children: "\u4E0A\uFF1ACtrl+N" })] })] }), _jsxs("li", { children: ["\u30EC\u30A4\u30E4\u30FC2", _jsxs("ul", { children: [_jsx("li", { children: "\u5DE6\uFF1ACtrl+Win+\u2190" }), _jsx("li", { children: "\u53F3\uFF1ACtrl+Win+\u2192" }), _jsx("li", { children: "\u4E0A\uFF1ACtrl+Win+D" })] })] }), _jsxs("li", { children: ["\u30EC\u30A4\u30E4\u30FC3", _jsxs("ul", { children: [_jsx("li", { children: "\u5DE6\uFF1AF14" }), _jsx("li", { children: "\u53F3\uFF1AF13" }), _jsx("li", { children: "\u4E0A\uFF1AF15" })] })] }), _jsx("li", { children: "\u672C\u6A5F\u80FD\u306F\u30D9\u30FC\u30BF\u7248\u3068\u306A\u308B\u306E\u3067\u3001\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u306B\u306F\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306E\u66F8\u304D\u63DB\u3048\u304C\u5FC5\u8981\u3067\u3059\u3002" })] })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "\u30AD\u30FC\u30DE\u30C3\u30D7\u8868\u793A\u30E2\u30FC\u30C9(\u30D9\u30FC\u30BF)\uFF1A" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_keymap_view.jpg`, alt: "TBTUNE", style: { width: '300px' } }), _jsx("p", { children: "JIS\u914D\u5217\u306E\u30AD\u30FC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3057\u305F\u6587\u5B57\u3084\u8A18\u53F7\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8868\u793A\u3057\u307E\u3059\u3002" }), _jsx("p", { children: "\u30EC\u30A4\u30E4\u30FC\u5207\u308A\u66FF\u3048\u6642\u306F\u5207\u308A\u66FF\u3048\u305F\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30FC\u30B3\u30FC\u30C9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002" }), _jsx("p", { children: "\u203B\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306B\u767B\u9332\u306E\u306A\u3044\u30AD\u30FC\u30B3\u30FC\u30C9\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002" })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306E\u66F4\u65B0" }), _jsxs("ol", { children: [_jsx("li", { children: "\u672C\u4F53\u80CC\u9762\u306EUSB\u5DEE\u3057\u8FBC\u307F\u53E3\u96A3\u306B\u3042\u308B\u30DC\u30BF\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u304C\u7ACB\u3061\u4E0A\u304C\u308B\u306E\u3067\u3001UF2\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30E9\u30C3\u30B0&\u30C9\u30ED\u30C3\u30D7\u3057\u307E\u3059\u3002" })] }), _jsx("img", { src: `${import.meta.env.BASE_URL}img/build_10_01.jpg`, alt: "Build 10 01", style: { width: '500px' } })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "\u30B5\u30DD\u30FC\u30C8\u3084\u30A2\u30A4\u30C7\u30A2" }), _jsxs("p", { children: [_jsx("a", { href: "https://discord.gg/dQM3sVPgT6", style: { width: '300px' }, children: "Discord" }), "\u306B\u3066\u3001omni kbd\u30B7\u30EA\u30FC\u30BA\u306E\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002 \u30B5\u30DD\u30FC\u30C8\u3084\u3054\u76F8\u8AC7\u306F\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3067\u53D7\u3051\u4ED8\u3051\u3066\u3044\u307E\u3059\u3002"] }), _jsxs("p", { children: ["\u8FD4\u4FE1\u304C\u306A\u3044\u5834\u5408\u306F\u3001", _jsx("a", { href: "https://x.com/mass_0X00", target: "_blank", rel: "noreferrer", children: "X" }), "\u306EDM\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002"] })] })] }));
};
export default UsageGuide;
const Container = styled.div `
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: 'Inter', sans-serif;
`;
const Title = styled.h1 `
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
const Description = styled.p `
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;
const Image = styled.img `
  width: 100%;
  max-width: 800px;
  margin-bottom: 1.5rem;
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
const Section = styled.section `
  margin-bottom: 2rem;
`;
const Subtitle = styled.h2 `
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const Product = styled.div `
  margin-bottom: 1.5rem;
`;
const ProductTitle = styled.h3 `
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const ProductDetails = styled.ul `
  margin-left: 1.5rem;
  list-style-type: disc;
`;
//
// ▼▼▼ react-code-blocks 用ラッパコンポーネントのスタイル ▼▼▼
//
const CodeWrapper = styled.div `
  position: relative;
  margin: 1rem 0;
`;
const CopyButton = styled.button `
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  background-color: #363636;
  color: #fff;
  font-size: 0.9rem;
  &:hover {
    opacity: 0.8;
  }
`;
