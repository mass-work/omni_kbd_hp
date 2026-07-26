import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
import { CodeBlock, dracula } from 'react-code-blocks';
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
const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el)
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
const UsageGuideVer010000 = () => {
    return (_jsxs(Container, { children: [_jsx(Title, { children: "omni kbd \u4F7F\u3044\u65B9 Ver01.00.00" }), _jsxs(Content, { children: [_jsx(Aside, { children: _jsxs(Toc, { children: [_jsx("strong", { children: "\u76EE\u6B21" }), _jsxs("ul", { children: [_jsx("li", { children: _jsx("a", { href: "#keymap", onClick: go('keymap'), children: "\u30AD\u30FC\u30DE\u30C3\u30D7" }) }), _jsx("li", { children: _jsx("a", { href: "#os-detect", onClick: go('os-detect'), children: "OS\u81EA\u52D5\u691C\u51FA\u3068\u624B\u52D5\u5207\u66FF" }) }), _jsx("li", { children: _jsx("a", { href: "#custom-keycodes", onClick: go('custom-keycodes'), children: "\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9" }) }), _jsx("li", { children: _jsx("a", { href: "#touch-display", onClick: go('touch-display'), children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4" }) }), _jsx("li", { children: _jsx("a", { href: "#touch-key-mode", onClick: go('touch-key-mode'), children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9" }) }), _jsx("li", { children: _jsx("a", { href: "#tb-tuning", onClick: go('tb-tuning'), children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0" }) }), _jsx("li", { children: _jsx("a", { href: "#status-mode", onClick: go('status-mode'), children: "\u30B9\u30C6\u30FC\u30BF\u30B9\u7BA1\u7406\u30E2\u30FC\u30C9" }) }), _jsx("li", { children: _jsx("a", { href: "#keymap-view", onClick: go('keymap-view'), children: "\u30AD\u30FC\u30DE\u30C3\u30D7\u8868\u793A(\u03B2)" }) }), _jsx("li", { children: _jsx("a", { href: "#firmware-update", onClick: go('firmware-update'), children: "\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u66F4\u65B0" }) }), _jsx("li", { children: _jsx("a", { href: "#support", onClick: go('support'), children: "\u30B5\u30DD\u30FC\u30C8" }) })] })] }) }), _jsxs(Main, { children: [_jsxs(Section, { id: "keymap", children: [_jsx(Subtitle, { children: "\u30AD\u30FC\u30DE\u30C3\u30D7" }), _jsxs("p", { children: ["\u30AD\u30FC\u30DE\u30C3\u30D7\u306F", _jsx("a", { href: "https://vial.rocks/", target: "_blank", rel: "noreferrer", children: _jsx("strong", { children: "Vial" }) }), "\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002Vial\u306E\u57FA\u672C\u7684\u306A\u4F7F\u3044\u65B9\u306B\u3064\u3044\u3066\u306F\u3001", _jsx("a", { href: "https://get.vial.today/manual/layers.html", target: "_blank", rel: "noreferrer", children: _jsx("strong", { children: "\u516C\u5F0F\u30B5\u30A4\u30C8" }) }), "\u3084\u30D6\u30ED\u30B0\u8A18\u4E8B\u3092\u53C2\u8003\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"] }), _jsx(Callout, { children: "Ver01.00.00\u3067\u306F\u30AD\u30FC\u30DE\u30C3\u30D7\u306E\u30EC\u30A4\u30A2\u30A6\u30C8\u3068\u5404\u6A5F\u80FD\u306E\u767B\u9332\u5834\u6240\u304C\u5909\u66F4\u3055\u308C\u3066\u3044\u307E\u3059\u3002 \u65E7\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30AD\u30FC\u30DE\u30C3\u30D7\u3092\u305D\u306E\u307E\u307E\u4F7F\u7528\u305B\u305A\u3001\u4E0B\u306E\u30AD\u30FC\u30DE\u30C3\u30D7\u753B\u50CF\u3092\u78BA\u8A8D\u3057\u3066\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_v01_vial_allkeymap.jpg`, alt: "Ver01.00.00 Vial \u30AD\u30FC\u30DE\u30C3\u30D7" }), _jsx(Subheading, { children: "\u30AD\u30FC\u30DE\u30C3\u30D7\u304B\u3089\u8A2D\u5B9A\u3067\u304D\u308B\u6A5F\u80FD" }), _jsxs("ul", { children: [_jsx("li", { children: "\u901A\u5E38\u306E\u30AD\u30FC\u5165\u529B\u3001\u30EC\u30A4\u30E4\u30FC\u5207\u308A\u66FF\u3048\u3001\u30DE\u30AF\u30ED" }), _jsx("li", { children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9\u3078\u5207\u308A\u66FF\u3048\u308B\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9" }), _jsx("li", { children: "\u5DE6\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u64CD\u4F5C" }), _jsx("li", { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u30B9\u30EF\u30A4\u30D7\u64CD\u4F5C" })] }), _jsx(Subheading, { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u64CD\u4F5C\u306E\u8A2D\u5B9A" }), _jsx("p", { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u5404\u64CD\u4F5C\u306F\u3001\u30AD\u30FC\u30DE\u30C3\u30D7\u4E0A\u306E\u5C02\u7528\u4F4D\u7F6E\u306B\u30AD\u30FC\u30B3\u30FC\u30C9\u3092\u767B\u9332\u3057\u3066\u5909\u66F4\u3067\u304D\u307E\u3059\u3002 \u5DE6\u53F3\u306E\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306B\u7570\u306A\u308B\u64CD\u4F5C\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002" }), _jsx(Subheading, { children: "\u30B9\u30EF\u30A4\u30D7\u64CD\u4F5C\u306E\u8A2D\u5B9A" }), _jsx("p", { children: "\u4E0A\u30FB\u4E0B\u30FB\u5DE6\u30FB\u53F3\u306E\u30B9\u30EF\u30A4\u30D7\u64CD\u4F5C\u306B\u5BFE\u5FDC\u3059\u308B\u30AD\u30FC\u5165\u529B\u3092\u30AD\u30FC\u30DE\u30C3\u30D7\u304B\u3089\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 \u30B9\u30EF\u30A4\u30D7\u64CD\u4F5C\u306F\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9\u5185\u3067\u4F7F\u7528\u3057\u307E\u3059\u3002" })] }), _jsxs(Section, { id: "os-detect", children: [_jsx(Subtitle, { children: "OS\u81EA\u52D5\u691C\u51FA\u3068\u624B\u52D5\u5207\u66FF" }), _jsxs("p", { children: ["omni kbd \u306F ", _jsx("strong", { children: "Windows / macOS \u3092\u81EA\u52D5\u691C\u51FA" }), "\u3057\u3066\u30C7\u30D5\u30A9\u30EB\u30C8\u30EC\u30A4\u30E4\u30FC\u304C\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002 ", _jsx("br", {}), "\u203B\u74B0\u5883\u306B\u3088\u308A\u691C\u51FA\u3067\u304D\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 ", _jsx("br", {}), "\u81EA\u52D5\u691C\u51FA\u306B\u5931\u6557\u3059\u308B\u5834\u5408\u3001\u305D\u306E\u4ED6\u306E OS \u3092\u4F7F\u3046\u5834\u5408\u306F", _jsx("strong", { children: "\u624B\u52D5\u5207\u66FF" }), "\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002"] }), _jsx("h3", { children: "\u30EC\u30A4\u30E4\u30FC\u306E\u524D\u63D0" }), _jsxs("ul", { children: [_jsx("li", { children: "\u30EC\u30A4\u30E4\u30FC0 \uFF1A Base or Windows " }), _jsx("li", { children: "\u30EC\u30A4\u30E4\u30FC1 \uFF1A Sub or macOS" }), "\u30EC\u30A4\u30E4\u30FC0\u306B\u30AD\u30FC\u30DE\u30C3\u30D7\u3092\u8A2D\u5B9A\u5F8C\u3001\u30EC\u30A4\u30E4\u30FC1\u306B\u5909\u66F4\u3057\u305F\u3044\u30AD\u30FC\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002", _jsx("br", {}), "Win/Mac\u4F75\u7528\u306E\u74B0\u5883\u3067\u4F7F\u3046\u5834\u5408\u3001\u30EC\u30A4\u30E4\u30FC1\u306E\u307FCtrl\u3068Gui\u3092\u5165\u308C\u66FF\u3048\u308B\u3068Win/Mac\u3067\u64CD\u4F5C\u611F\u304C\u8FD1\u304F\u306A\u308A\u307E\u3059\u3002", _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_base_sub_keymap.jpg`, alt: "Vial \u30AD\u30FC\u30DE\u30C3\u30D7" }), "\u5171\u901A\u3067\u4F7F\u3046\u6A5F\u80FD\u30EC\u30A4\u30E4\u30FC\u306F ", _jsx("strong", { children: "2 \u4EE5\u964D" }), "\u306B\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044\u3002\uFF08\u6570\u5B57/\u8A18\u53F7 \u306A\u3069\uFF09"] }), _jsx("h3", { children: "\u81EA\u52D5\u691C\u51FA\u306E\u30BF\u30A4\u30DF\u30F3\u30B0" }), _jsxs("ul", { children: [_jsx("li", { children: "\u30AD\u30FC\u30DC\u30FC\u30C9\u304C\u8D77\u52D5(PC\u8D77\u52D5\u6642\u3084\u30EA\u30BB\u30C3\u30C8\u306A\u3069)\u3057\u305F\u30BF\u30A4\u30DF\u30F3\u30B0\u3067 OS \u3092\u5224\u5B9A\u3057\u307E\u3059\u3002" }), _jsxs("li", { children: ["\u5224\u5B9A\u306B\u6210\u529F\u3059\u308B\u3068\u3001Windows \u306F", _jsx("strong", { children: "\u30EC\u30A4\u30E4\u30FC0" }), "\u3001macOS \u306F", _jsx("strong", { children: "\u30EC\u30A4\u30E4\u30FC1" }), "\u306B\u81EA\u52D5\u3067\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002"] })] }), _jsx("h3", { children: "\u624B\u52D5\u3067\u5207\u308A\u66FF\u3048\u308B" }), _jsxs("ol", { children: [_jsxs("li", { children: ["\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E", _jsx("strong", { children: "\u30B9\u30C6\u30FC\u30BF\u30B9\u7BA1\u7406\u30E2\u30FC\u30C9" }), "\u3092\u958B\u304F\u3002"] }), _jsxs("li", { children: [_jsx("strong", { children: "OS" }), "\uFF1A\u81EA\u52D5\u691C\u51FA\u306E ON/OFF \u3092\u5207\u66FF\u3002"] }), _jsxs("li", { children: ["\u81EA\u52D5\u691C\u51FA\u3092", _jsx("strong", { children: "OFF" }), "\u306B\u3057\u305F\u72B6\u614B\u3067\u3001 ", _jsx("strong", { children: "Bas / Sub" }), " \u3092\u9078\u629E \uFF08Bas = \u30EC\u30A4\u30E4\u30FC0\u3001Sub = \u30EC\u30A4\u30E4\u30FC1\uFF09\u3002"] })] }), _jsx("h3", { children: "\u3046\u307E\u304F\u3044\u304B\u306A\u3044\u3068\u304D" }), _jsxs("ul", { children: [_jsx("li", { children: "\u81EA\u52D5\u691C\u51FA\u3092 OFF \u306B\u3057\u3066\u624B\u52D5\u5207\u66FF\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }), _jsx("li", { children: "\u80CC\u9762\u306E\u30EA\u30BB\u30C3\u30C8\u30DC\u30BF\u30F3\u30921\u56DE\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002" })] })] }), _jsxs(Section, { id: "custom-keycodes", children: [_jsx(Subtitle, { children: "\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9" }), _jsx("p", { children: "omni kbd\u56FA\u6709\u306E\u6A5F\u80FD\u306F\u3001Vial\u4E0B\u6BB5\u306E\u300CUser\u300D\u30BF\u30D6\u306B\u3042\u308B\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9\u304B\u3089\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_v01_custom_keycode.jpg`, alt: "Ver01.00.00 \u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9" }), _jsxs("ol", { children: [_jsx("li", { children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9\u5207\u66FF\uFF1A\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9\u3092\u8868\u793A\u3059\u308B\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9\u3092\u4EFB\u610F\u306E\u30AD\u30FC\u3078\u767B\u9332\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\uFF1A\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u8ABF\u6574\u753B\u9762\u3092\u8868\u793A\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30AD\u30FC\u30DE\u30C3\u30D7\u8868\u793A\uFF1A\u30AD\u30FC\u30DE\u30C3\u30D7\u8868\u793A\u30E2\u30FC\u30C9\u3078\u5207\u308A\u66FF\u3048\u307E\u3059\u3002" }), _jsx("li", { children: "\u30B9\u30C6\u30FC\u30BF\u30B9\u7BA1\u7406\uFF1A\u30B9\u30C6\u30FC\u30BF\u30B9\u7BA1\u7406\u30E2\u30FC\u30C9\u3078\u5207\u308A\u66FF\u3048\u307E\u3059\u3002" }), _jsx("li", { children: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u30AB\u30E9\u30FC\uFF1A\u5404\u30E2\u30FC\u30C9\u306E\u753B\u9762\u8272\u3084\u6587\u5B57\u8272\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002" })] }), _jsx("p", { children: "\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9\u306E\u8868\u793A\u540D\u306F\u3001Vial\u4E0A\u306E\u300CUser\u300D\u30BF\u30D6\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002" })] }), _jsxs(Section, { id: "touch-display", children: [_jsx(Subtitle, { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4" }), _jsx("p", { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8868\u793A\u30E2\u30FC\u30C9\u306F\u3001\u30AD\u30FC\u30DE\u30C3\u30D7\u306B\u767B\u9332\u3057\u305F\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9\u3067\u5207\u308A\u66FF\u3048\u307E\u3059\u3002" }), _jsx("p", { children: "\u5404\u30E2\u30FC\u30C9\u306E\u547C\u3073\u51FA\u3057\u4F4D\u7F6E\u306F\u3001Ver01.00.00\u306E\u521D\u671F\u30AD\u30FC\u30DE\u30C3\u30D7\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }), _jsx(VideoWrap, { children: _jsx("iframe", { src: "https://www.youtube.com/embed/cclZfxZU33Y?si=RFPv1jGXqeazWUuZ", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", referrerPolicy: "strict-origin-when-cross-origin", allowFullScreen: true, loading: "lazy" }) }), _jsxs("ol", { children: [_jsx("li", { children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9\uFF1A\u30BF\u30C3\u30C1\u30DC\u30BF\u30F3\u3068\u30B9\u30EF\u30A4\u30D7\u64CD\u4F5C\u3067\u3001\u30AD\u30FC\u30DE\u30C3\u30D7\u306B\u8A2D\u5B9A\u3057\u305F\u30AD\u30FC\u5165\u529B\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30E2\u30FC\u30C9\uFF1A\u5DE6\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u52D5\u304D\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30AD\u30FC\u30DE\u30C3\u30D7\u8868\u793A\u30E2\u30FC\u30C9(\u03B2)\uFF1AJIS\u914D\u5217\u306E\u30AD\u30FC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3057\u305F\u6587\u5B57\u3084\u8A18\u53F7\u3092\u8868\u793A\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30B9\u30C6\u30FC\u30BF\u30B9\u7BA1\u7406\u30E2\u30FC\u30C9\uFF1AOS\u5207\u66FF\u3001\u30AA\u30FC\u30C8\u30DE\u30A6\u30B9\u30EC\u30A4\u30E4\u30FC\u3001\u30CF\u30D7\u30C6\u30A3\u30C3\u30AF\u3001\u30BF\u30C3\u30C1\u64CD\u4F5C\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002" })] })] }), _jsxs(Section, { id: "touch-key-mode", children: [_jsx(Subtitle, { children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9" }), _jsxs("p", { children: ["\u5186\u5468\u4E0A\u306E\u30BF\u30C3\u30C1\u30DC\u30BF\u30F3\u3068\u30B9\u30EF\u30A4\u30D7\u64CD\u4F5C\u306B\u3001\u30AD\u30FC\u5165\u529B\u3084\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002", _jsx("br", {}), "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9\u3078\u306E\u5207\u308A\u66FF\u3048\u306F\u3001\u30AD\u30FC\u30DE\u30C3\u30D7\u306B\u767B\u9332\u3057\u305F\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9\u304B\u3089\u884C\u3044\u307E\u3059\u3002", _jsx("br", {}), "\u203B\u30BF\u30C3\u30C1\u30AD\u30FC\u306F\u30EC\u30A4\u30E4\u30FC\u30AD\u30FC\u304C\u62BC\u3055\u308C\u3066\u3044\u306A\u3044\u72B6\u614B\u3067\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002"] }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_v01_touchkeymap.jpg`, alt: "Ver01.00.00 \u30BF\u30C3\u30C1\u30AD\u30FC\u30DE\u30C3\u30D7" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_icon_change.gif`, alt: "\u30A2\u30A4\u30B3\u30F3\u5909\u66F4", style: { width: '300px' } }), _jsx(Subheading, { children: "\u30BF\u30C3\u30C1\u30DC\u30BF\u30F3\u306E\u8A2D\u5B9A" }), _jsxs("ol", { children: [_jsx("li", { children: "Vial\u3067\u30BF\u30C3\u30C1\u30AD\u30FC\u7528\u306E\u767B\u9332\u4F4D\u7F6E\u3092\u958B\u304D\u307E\u3059\u3002" }), _jsx("li", { children: "\u5404\u30BF\u30C3\u30C1\u30DC\u30BF\u30F3\u3078\u3001\u5B9F\u884C\u3057\u305F\u3044\u30AD\u30FC\u5165\u529B\u307E\u305F\u306F\u30DE\u30AF\u30ED\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u3001\u30EC\u30A4\u30E4\u30FC\u3054\u3068\u306B\u7570\u306A\u308B\u64CD\u4F5C\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002" })] }), _jsx(Subheading, { children: "\u30B9\u30EF\u30A4\u30D7\u64CD\u4F5C\u306E\u8A2D\u5B9A" }), _jsxs("ol", { children: [_jsx("li", { children: "\u30AD\u30FC\u30DE\u30C3\u30D7\u4E0A\u306E\u30B9\u30EF\u30A4\u30D7\u7528\u767B\u9332\u4F4D\u7F6E\u3092\u958B\u304D\u307E\u3059\u3002" }), _jsx("li", { children: "\u4E0A\u30FB\u4E0B\u30FB\u5DE6\u30FB\u53F3\u3078\u3001\u5B9F\u884C\u3057\u305F\u3044\u30AD\u30FC\u5165\u529B\u307E\u305F\u306F\u30DE\u30AF\u30ED\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9\u3067\u753B\u9762\u3092\u30B9\u30EF\u30A4\u30D7\u3059\u308B\u3068\u3001\u767B\u9332\u3057\u305F\u64CD\u4F5C\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002" })] }), _jsx(Subheading, { children: "\u30A2\u30A4\u30B3\u30F3\u306E\u8A2D\u5B9A" }), _jsx("p", { children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u306B\u8868\u793A\u3059\u308B\u30A2\u30A4\u30B3\u30F3\u306F\u3001omni-app\u304B\u3089\u767B\u9332\u3067\u304D\u307E\u3059\u3002\u30A2\u30A4\u30B3\u30F3\u3068\u30AD\u30FC\u5165\u529B\u3092\u7D44\u307F\u5408\u308F\u305B\u308B\u3053\u3068\u3067\u3001 \u4F7F\u7528\u3059\u308B\u6A5F\u80FD\u3092\u753B\u9762\u4E0A\u3067\u5206\u304B\u308A\u3084\u3059\u304F\u8868\u793A\u3067\u304D\u307E\u3059\u3002" })] }), _jsxs(Section, { id: "tb-tuning", children: [_jsx(Subtitle, { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30E2\u30FC\u30C9" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_tbtune.jpg`, alt: "TBTUNE", style: { width: '300px' } }), _jsx("p", { children: "\u5404\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u79FB\u52D5\u91CF\u3068\u901F\u5EA6\u306E\u30D0\u30E9\u30F3\u30B9\u3092\u8ABF\u6574\u3067\u304D\u307E\u3059\u3002" }), _jsx("p", { children: "\u753B\u9762\u5DE6\u5074\u304C\u5DE6\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u3001\u53F3\u5074\u304C\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u8A2D\u5B9A\u306B\u306A\u308A\u307E\u3059\u3002" }), _jsxs("ol", { children: [_jsx("li", { children: "\u5404\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u53F3\u5074\u306E\u00B1\u3092\u30BF\u30C3\u30C1\u3057\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u901F\u5EA6\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u5404\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u5DE6\u5074\u306E\u00B1\u3092\u30BF\u30C3\u30C1\u3057\u3086\u3063\u304F\u308A\u52D5\u304B\u3057\u305F\u6642/\u65E9\u304F\u52D5\u304B\u3057\u305F\u6642\u306E\u30D0\u30E9\u30F3\u30B9\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "1.2.\u3092\u7E70\u308A\u8FD4\u3057\u64CD\u4F5C\u611F\u304C\u3088\u304F\u306A\u3063\u305F\u3089\u8ABF\u6574\u7D42\u4E86\u3067\u3059\u3002" }), _jsx("li", { children: "\uD83D\uDCBE\u30DC\u30BF\u30F3\u3092\u30BF\u30C3\u30D7\u3059\u308B\u3068\u8A2D\u5B9A\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059" })] })] }), _jsxs(Section, { id: "status-mode", children: [_jsx(Subtitle, { children: "\u30B9\u30C6\u30FC\u30BF\u30B9\u7BA1\u7406\u30E2\u30FC\u30C9" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_v01_status.jpg`, alt: "Ver01.00.00 \u30B9\u30C6\u30FC\u30BF\u30B9\u7BA1\u7406\u30E2\u30FC\u30C9", style: { width: '300px' } }), _jsxs("p", { children: ["omni kbd\u306E\u52D5\u4F5C\u8A2D\u5B9A\u3092\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304B\u3089\u5909\u66F4\u3057\u307E\u3059\u3002", _jsx("br", {}), "\u5404\u9805\u76EE\u3092\u30BF\u30C3\u30C1\u3059\u308B\u3068ON/OFF\u3092\u5207\u308A\u66FF\u3048\u3089\u308C\u307E\u3059\u3002", _jsx("br", {}), "\u8ABF\u6574\u30D0\u30FC\u304C\u8868\u793A\u3055\u308C\u308B\u9805\u76EE\u306F\u3001\u30D0\u30FC\u3092\u30BF\u30C3\u30C1\u3057\u3066\u5024\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002"] }), _jsxs(Table, { children: [_jsx(Thead, { children: _jsxs(Trow, { children: [_jsx(Th, { children: "\u8868\u793A" }), _jsx(Th, { children: "\u6982\u8981" }), _jsx(Th, { children: "\u8AAC\u660E" })] }) }), _jsxs("tbody", { children: [_jsxs(Trow, { children: [_jsx(Td, { children: "OS" }), _jsx(Td, { children: "OS\u81EA\u52D5\u691C\u51FA" }), _jsx(Td, { children: "Windows / macOS\u306E\u81EA\u52D5\u691C\u51FA\u3092ON/OFF\u3057\u307E\u3059\u3002" })] }), _jsxs(Trow, { children: [_jsx(Td, { children: "Win / Mac / Bas / Sub" }), _jsx(Td, { children: "\u30C7\u30D5\u30A9\u30EB\u30C8\u30EC\u30A4\u30E4\u30FC" }), _jsxs(Td, { children: ["\u81EA\u52D5\u691C\u51FAON\u6642\u306F\u691C\u51FA\u3057\u305FOS\u3092\u8868\u793A\u3057\u307E\u3059\u3002", _jsx("br", {}), "\u81EA\u52D5\u691C\u51FAOFF\u6642\u306FBas / Sub\u3092\u624B\u52D5\u3067\u5207\u308A\u66FF\u3048\u307E\u3059\u3002"] })] }), _jsxs(Trow, { children: [_jsx(Td, { children: "AML" }), _jsx(Td, { children: "Auto mouse layer" }), _jsx(Td, { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u64CD\u4F5C\u6642\u306B\u30DE\u30A6\u30B9\u7528\u30EC\u30A4\u30E4\u30FC\u3078\u81EA\u52D5\u3067\u5207\u308A\u66FF\u3048\u308B\u6A5F\u80FD\u3092ON/OFF\u3057\u307E\u3059\u3002" })] }), _jsxs(Trow, { children: [_jsx(Td, { children: "HPB" }), _jsx(Td, { children: "Trackball haptic" }), _jsx(Td, { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u64CD\u4F5C\u306B\u9023\u52D5\u3059\u308B\u30CF\u30D7\u30C6\u30A3\u30C3\u30AF\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092ON/OFF\u3057\u307E\u3059\u3002" })] }), _jsxs(Trow, { children: [_jsx(Td, { children: "HPT" }), _jsx(Td, { children: "Touch display haptic" }), _jsx(Td, { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u64CD\u4F5C\u6642\u306E\u30CF\u30D7\u30C6\u30A3\u30C3\u30AF\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092ON/OFF\u3057\u307E\u3059\u3002" })] }), _jsxs(Trow, { children: [_jsx(Td, { children: "TOC" }), _jsx(Td, { children: "Touch repeat interval" }), _jsx(Td, { children: "\u30BF\u30C3\u30C1\u64CD\u4F5C\u3092\u62BC\u3057\u7D9A\u3051\u305F\u3068\u304D\u306E\u9023\u7D9A\u5165\u529B\u958B\u59CB\u6642\u9593\u3068\u30012\u56DE\u76EE\u4EE5\u964D\u306E\u5165\u529B\u9593\u9694\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002" })] })] })] })] }), _jsxs(Section, { id: "keymap-view", children: [_jsx(Subtitle, { children: "\u30AD\u30FC\u30DE\u30C3\u30D7\u8868\u793A\u30E2\u30FC\u30C9(\u30D9\u30FC\u30BF)\uFF1A" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_keymap_view.jpg`, alt: "TBTUNE", style: { width: '300px' } }), _jsx("p", { children: "JIS\u914D\u5217\u306E\u30AD\u30FC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3057\u305F\u6587\u5B57\u3084\u8A18\u53F7\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8868\u793A\u3057\u307E\u3059\u3002" }), _jsx("p", { children: "\u30EC\u30A4\u30E4\u30FC\u5207\u308A\u66FF\u3048\u6642\u306F\u5207\u308A\u66FF\u3048\u305F\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30FC\u30B3\u30FC\u30C9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002" }), _jsx("p", { children: "\u203B\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306B\u767B\u9332\u306E\u306A\u3044\u30AD\u30FC\u30B3\u30FC\u30C9\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002" })] }), _jsxs(Section, { id: "firmware-update", children: [_jsx(Subtitle, { children: "\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306E\u66F4\u65B0" }), _jsxs("ol", { children: [_jsx("li", { children: "\u672C\u4F53\u80CC\u9762\u306EUSB\u5DEE\u3057\u8FBC\u307F\u53E3\u96A3\u306B\u3042\u308B\u30DC\u30BF\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u304C\u7ACB\u3061\u4E0A\u304C\u308B\u306E\u3067\u3001UF2\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30E9\u30C3\u30B0&\u30C9\u30ED\u30C3\u30D7\u3057\u307E\u3059\u3002" })] }), _jsx("img", { src: `${import.meta.env.BASE_URL}img/build_10_01.jpg`, alt: "Build 10 01", style: { width: '500px' } })] }), _jsxs(Section, { id: "support", children: [_jsx(Subtitle, { children: "\u30B5\u30DD\u30FC\u30C8\u3084\u30A2\u30A4\u30C7\u30A2" }), _jsxs("p", { children: [_jsx("a", { href: "https://discord.gg/dQM3sVPgT6", style: { width: '300px' }, children: "Discord" }), "\u306B\u3066\u3001omni kbd\u30B7\u30EA\u30FC\u30BA\u306E\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002 \u30B5\u30DD\u30FC\u30C8\u3084\u3054\u76F8\u8AC7\u306F\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3067\u53D7\u3051\u4ED8\u3051\u3066\u3044\u307E\u3059\u3002"] }), _jsxs("p", { children: ["\u8FD4\u4FE1\u304C\u306A\u3044\u5834\u5408\u306F\u3001", _jsx("a", { href: "https://x.com/mass_0X00", target: "_blank", rel: "noreferrer", children: "X" }), "\u306EDM\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002"] })] })] })] })] }));
};
export default UsageGuideVer010000;
const Container = styled.div `
  /* はみ出し根絶：パディング込みの幅計算を全子孫に継承 */
  box-sizing: border-box;
  & *, & *::before, & *::after { box-sizing: inherit; }
  & * { min-width: 0; }

  width: min(100%, 1100px);
  margin: 0 auto;
  padding: clamp(10px, 4vw, 24px);

  font-family: 'Inter','Noto Sans JP', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  /* スマホ字を一段小さく */
  font-size: clamp(14px, 1.45vw, 16px);
  line-height: 1.85;

  /* 日本語は自然、長い英数は必ず折り返す */
  word-break: normal;
  overflow-wrap: anywhere;
  line-break: strict;
  text-spacing: ideograph-alpha ideograph-numeric;

  /* すべての <img> を安全に縮小（inline style の width を上書き） */
  img { max-width: 100% !important; height: auto !important; display: block; }
`;
const Content = styled.div `
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
/* TOC */
const Aside = styled.aside `
  position: sticky;
  top: 72px;
  align-self: start;

  @media (max-width: 900px) {
    position: static;
    width: 100%;
    order: -1; /* スマホで先頭に */
  }
`;
const Main = styled.main `
  min-width: 0;
`;
const Title = styled.h1 `
  font-weight: 800;
  margin-bottom: 1.2rem;
  /* スマホで過大にならない */
  font-size: clamp(20px, 5vw, 28px);
`;
const Image = styled.img `
  /* 本コンポーネント経由の画像も確実に縮小 */
  max-width: 100% !important;
  height: auto !important;
  display: block;
`;
const Toc = styled.nav `
  max-width: 100%;
  overflow-x: auto;
`;
const Section = styled.section `
  margin: 2rem 0;
  scroll-margin-top: 5rem;
`;
const Subtitle = styled.h2 `
  font-weight: 800;
  margin: 1.4rem 0 0.9rem;
  padding-left: 0.7rem;
  border-left: 6px solid #7c3aed;
  line-height: 1.25;
  /* スマホで少し小さく */
  font-size: clamp(17px, 4.4vw, 23px);
`;
const Subheading = styled.h3 `
  font-weight: 700;
  color: #5a5a5a;
  letter-spacing: 0.02em;
  margin: 1rem 0 0.5rem;
  font-size: clamp(14px, 3.6vw, 18px);
`;
const Callout = styled.div `
  border-left: 4px solid #0ea5e9;
  background: #f0f9ff;
  padding: 0.65rem 0.9rem;
  border-radius: 8px;
  margin: 0.65rem 0 0.9rem;
`;
const Divider = styled.hr `
  border: 0;
  border-top: 1px solid #eee;
  margin: 1rem 0;
`;
const Kbd = styled.kbd `
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-bottom-width: 3px;
  padding: 0 0.35rem;
  border-radius: 6px;
  font-size: 0.9em;
`;
/* === コード：PCは横スクロール、スマホは切り捨て（ページは広げない） === */
const CodeWrapper = styled.div `
  position: relative;
  margin: 0.8rem 0;
  width: 100%;
  overflow: hidden; /* デフォは広げない */

  /* react-code-blocks の最上位div/pre/codeを締め付け */
  & > *, pre, code, pre > code {
    box-sizing: border-box;
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden !important;
    white-space: pre;         /* 折り返さず途中で見切れる */
    display: block;
  }

  /* デスクトップは横スクロールを復活 */
  @media (min-width: 721px) {
    overflow-x: auto;
    & > *, pre {
      width: max-content !important;
      max-width: none !important;
      overflow: visible !important;
    }
  }

  /* モバイルは文字も少し小さく */
  @media (max-width: 720px) {
    code { font-size: 0.85em; }
  }
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
  font-size: 0.85rem;
  &:hover { opacity: 0.8; }
`;
/* === 表：小画面はテーブル自身の中だけ横スクロール === */
const Table = styled.table `
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  margin: 0.5rem 0 1.2rem;

  /* モバイル対応：自分の枠内で横スクロールし、ページは広げない */
  display: block;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  min-width: 560px;

  @media (min-width: 721px) {
    display: table;
    overflow: visible;
    min-width: unset;
  }
`;
const Thead = styled.thead ``;
const Trow = styled.tr `
  &:hover td {
    background: #fafafa;
  }
`;
const Th = styled.th `
  border-bottom: 2px solid #ccc;
  padding: 8px;
  background: #f4f4f4;
  font-weight: 700;
  font-size: 0.95rem;
  white-space: nowrap;
`;
const Td = styled.td `
  border-bottom: 1px solid #ddd;
  padding: 8px;
  vertical-align: top;
  font-size: 0.95rem;
  white-space: nowrap;
`;
const VideoWrap = styled.div `
  /* 16:9のアスペクト比で完全レスポンシブ */
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 0.75rem 0 1rem;
  overflow: hidden;
  border-radius: 10px;
  background: #000;

  /* iframeを親いっぱいに */
  & > iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  /* 画面が極端に狭い時の保険（親のpaddingで広がらないように） */
  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;
