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
const UsageGuide = () => {
    return (_jsxs(Container, { children: [_jsx(Title, { children: "omni kbd \u4F7F\u3044\u65B9" }), _jsxs(Content, { children: [_jsx(Aside, { children: _jsxs(Toc, { children: [_jsx("strong", { children: "\u76EE\u6B21" }), _jsxs("ul", { children: [_jsx("li", { children: _jsx("a", { href: "#keymap", onClick: go('keymap'), children: "\u30AD\u30FC\u30DE\u30C3\u30D7" }) }), _jsx("li", { children: _jsx("a", { href: "#os-detect", onClick: go('os-detect'), children: "OS\u81EA\u52D5\u691C\u51FA\u3068\u624B\u52D5\u5207\u66FF" }) }), _jsx("li", { children: _jsx("a", { href: "#custom-keycodes", onClick: go('custom-keycodes'), children: "\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9" }) }), _jsx("li", { children: _jsx("a", { href: "#touch-display", onClick: go('touch-display'), children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4" }) }), _jsx("li", { children: _jsx("a", { href: "#touch-key-mode", onClick: go('touch-key-mode'), children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9" }) }), _jsx("li", { children: _jsx("a", { href: "#tb-tuning", onClick: go('tb-tuning'), children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0" }) }), _jsx("li", { children: _jsx("a", { href: "#status-mode", onClick: go('status-mode'), children: "\u30B9\u30C6\u30FC\u30BF\u30B9\u7BA1\u7406\u30E2\u30FC\u30C9" }) }), _jsx("li", { children: _jsx("a", { href: "#swipe", onClick: go('swipe'), children: "\u30B9\u30EF\u30A4\u30D7\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC(\u03B2)" }) }), _jsx("li", { children: _jsx("a", { href: "#keymap-view", onClick: go('keymap-view'), children: "\u30AD\u30FC\u30DE\u30C3\u30D7\u8868\u793A(\u03B2)" }) }), _jsx("li", { children: _jsx("a", { href: "#firmware-update", onClick: go('firmware-update'), children: "\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u66F4\u65B0" }) }), _jsx("li", { children: _jsx("a", { href: "#support", onClick: go('support'), children: "\u30B5\u30DD\u30FC\u30C8" }) })] })] }) }), _jsxs(Main, { children: [_jsxs(Section, { id: "keymap", children: [_jsx(Subtitle, { children: "\u30AD\u30FC\u30DE\u30C3\u30D7" }), _jsxs("p", { children: ["\u30AD\u30FC\u30DE\u30C3\u30D7\u306F", _jsx("a", { href: "https://vial.rocks/", target: "_blank", rel: "noreferrer", children: _jsx("strong", { children: "Vial" }) }), "\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\u3002 Vial\u306E\u57FA\u672C\u7684\u306A\u4F7F\u3044\u65B9\u306B\u3064\u3044\u3066\u306F\u3001", _jsx("a", { href: "https://get.vial.today/manual/layers.html", target: "_blank", rel: "noreferrer", children: _jsx("strong", { children: "\u516C\u5F0F\u30B5\u30A4\u30C8" }) }), "\u3084\u30D6\u30ED\u30B0\u8A18\u4E8B\u3092\u53C2\u8003\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"] }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_vial_allkeymap.jpg`, alt: "Vial \u30AD\u30FC\u30DE\u30C3\u30D7" })] }), _jsxs(Section, { id: "os-detect", children: [_jsx(Subtitle, { children: "OS\u81EA\u52D5\u691C\u51FA\u3068\u624B\u52D5\u5207\u66FF" }), _jsxs("p", { children: ["omni kbd \u306F ", _jsx("strong", { children: "Windows / macOS \u3092\u81EA\u52D5\u691C\u51FA" }), "\u3057\u3066\u30C7\u30D5\u30A9\u30EB\u30C8\u30EC\u30A4\u30E4\u30FC\u304C\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002 ", _jsx("br", {}), "\u203B\u74B0\u5883\u306B\u3088\u308A\u691C\u51FA\u3067\u304D\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002 ", _jsx("br", {}), "\u81EA\u52D5\u691C\u51FA\u306B\u5931\u6557\u3059\u308B\u5834\u5408\u3001\u305D\u306E\u4ED6\u306E OS \u3092\u4F7F\u3046\u5834\u5408\u306F", _jsx("strong", { children: "\u624B\u52D5\u5207\u66FF" }), "\u3092\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002"] }), _jsx("h3", { children: "\u30EC\u30A4\u30E4\u30FC\u306E\u524D\u63D0" }), _jsxs("ul", { children: [_jsx("li", { children: "\u30EC\u30A4\u30E4\u30FC0 \uFF1A Base or Windows " }), _jsx("li", { children: "\u30EC\u30A4\u30E4\u30FC1 \uFF1A Sub or macOS" }), "\u30EC\u30A4\u30E4\u30FC0\u306B\u30AD\u30FC\u30DE\u30C3\u30D7\u3092\u8A2D\u5B9A\u5F8C\u3001\u30EC\u30A4\u30E4\u30FC1\u306B\u5909\u66F4\u3057\u305F\u3044\u30AD\u30FC\u3092\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044\u3002", _jsx("br", {}), "Win/Mac\u4F75\u7528\u306E\u74B0\u5883\u3067\u4F7F\u3046\u5834\u5408\u3001\u30EC\u30A4\u30E4\u30FC1\u306E\u307FCtrl\u3068Gui\u3092\u5165\u308C\u66FF\u3048\u308B\u3068Win/Mac\u3067\u64CD\u4F5C\u611F\u304C\u8FD1\u304F\u306A\u308A\u307E\u3059\u3002", _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_base_sub_keymap.jpg`, alt: "Vial \u30AD\u30FC\u30DE\u30C3\u30D7" }), "\u5171\u901A\u3067\u4F7F\u3046\u6A5F\u80FD\u30EC\u30A4\u30E4\u30FC\u306F ", _jsx("strong", { children: "2 \u4EE5\u964D" }), "\u306B\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044\u3002\uFF08\u6570\u5B57/\u8A18\u53F7 \u306A\u3069\uFF09"] }), _jsx("h3", { children: "\u81EA\u52D5\u691C\u51FA\u306E\u30BF\u30A4\u30DF\u30F3\u30B0" }), _jsxs("ul", { children: [_jsx("li", { children: "\u30AD\u30FC\u30DC\u30FC\u30C9\u304C\u8D77\u52D5(PC\u8D77\u52D5\u6642\u3084\u30EA\u30BB\u30C3\u30C8\u306A\u3069)\u3057\u305F\u30BF\u30A4\u30DF\u30F3\u30B0\u3067 OS \u3092\u5224\u5B9A\u3057\u307E\u3059\u3002" }), _jsxs("li", { children: ["\u5224\u5B9A\u306B\u6210\u529F\u3059\u308B\u3068\u3001Windows \u306F", _jsx("strong", { children: "\u30EC\u30A4\u30E4\u30FC0" }), "\u3001macOS \u306F", _jsx("strong", { children: "\u30EC\u30A4\u30E4\u30FC1" }), "\u306B\u81EA\u52D5\u3067\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002"] })] }), _jsx("h3", { children: "\u624B\u52D5\u3067\u5207\u308A\u66FF\u3048\u308B" }), _jsxs("ol", { children: [_jsxs("li", { children: ["\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E", _jsx("strong", { children: "\u30B9\u30C6\u30FC\u30BF\u30B9\u7BA1\u7406\u30E2\u30FC\u30C9" }), "\u3092\u958B\u304F\u3002"] }), _jsxs("li", { children: [_jsx("strong", { children: "OS" }), "\uFF1A\u81EA\u52D5\u691C\u51FA\u306E ON/OFF \u3092\u5207\u66FF\u3002"] }), _jsxs("li", { children: ["\u81EA\u52D5\u691C\u51FA\u3092", _jsx("strong", { children: "OFF" }), "\u306B\u3057\u305F\u72B6\u614B\u3067\u3001 ", _jsx("strong", { children: "Bas / Sub" }), " \u3092\u9078\u629E \uFF08Bas = \u30EC\u30A4\u30E4\u30FC0\u3001Sub = \u30EC\u30A4\u30E4\u30FC1\uFF09\u3002"] })] }), _jsx("h3", { children: "\u3046\u307E\u304F\u3044\u304B\u306A\u3044\u3068\u304D" }), _jsxs("ul", { children: [_jsx("li", { children: "\u81EA\u52D5\u691C\u51FA\u3092 OFF \u306B\u3057\u3066\u624B\u52D5\u5207\u66FF\u3092\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }), _jsx("li", { children: "\u80CC\u9762\u306E\u30EA\u30BB\u30C3\u30C8\u30DC\u30BF\u30F3\u30921\u56DE\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002" })] })] }), _jsxs(Section, { id: "custom-keycodes", children: [_jsx(Subtitle, { children: "\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9" }), _jsx("p", { children: "omni kbd\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3059\u308B\u305F\u3081\u306E\u30AD\u30FC\u30B3\u30FC\u30C9\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002" }), _jsx("p", { children: "\u753B\u50CF\u4E0B\u6BB5\u306E\u300CUser\u300D\u30BF\u30D6\u304B\u3089\u9078\u629E\u3059\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002\u3002" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_custom_keycode.jpg`, alt: "\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9" }), _jsxs("ol", { children: [_jsx("li", { children: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u5207\u66FF\uFF1ATcKey\u3001TbTun\u3001Swget\u3001KeyMp\u3001Stat1\u3067\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u304C\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002" }), _jsx("li", { children: "\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306E\u8272\u5909\u66F4\uFF1A\u3007\u3007H\u3001S\u3001V\u3001\u306E\u5024\u3092\u00B1\u3059\u308B\u3053\u3068\u3067\u7279\u5B9A\u306E\u30E2\u30FC\u30C9\u3067\u753B\u9762\u3084\u6587\u5B57\u306E\u8272\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002" }), _jsx("li", { children: "\u53F3\u624B\u30DC\u30FC\u30EB\u30B9\u30AF\u30ED\u30FC\u30EB\uFF1ATbrCg\u3092\u62BC\u3057\u3066\u3044\u308B\u9593\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u3067\u30B9\u30AF\u30ED\u30FC\u30EB\u3067\u304D\u307E\u3059\u3002" })] })] }), _jsxs(Section, { id: "touch-display", children: [_jsx(Subtitle, { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4" }), _jsx("p", { children: "\u30BF\u30C3\u30C1\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306F\u8A2D\u5B9A\u3055\u308C\u305F\u30AB\u30B9\u30BF\u30E0\u30AD\u30FC\u30B3\u30FC\u30C9\u3092\u62BC\u4E0B\u3059\u308B\u3053\u3068\u3067\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002" }), _jsx("p", { children: "\u521D\u671F\u72B6\u614B\u3067\u306F\u30EC\u30A4\u30E4\u30FC4\u306E\u53F3\u624B\u5074\u4E0A\u6BB5\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002" }), _jsxs("ol", { children: [_jsx("li", { children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9\uFF1A\u5186\u5468\u4E0A\u306B\u914D\u7F6E\u3055\u308C\u305F\u30DC\u30BF\u30F3\u3092\u30BF\u30C3\u30C1\u3059\u308B\u3053\u3068\u3067\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30E2\u30FC\u30C9\uFF1A\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u52D5\u304D\u3092\u8ABF\u6574\u3059\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002" }), _jsx("li", { children: "\u30B9\u30EF\u30A4\u30D7\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC\u30E2\u30FC\u30C9(\u30D9\u30FC\u30BF)\uFF1A\u30B9\u30EF\u30A4\u30D7\u3059\u308B\u3053\u3068\u3067\u3001\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30AD\u30FC\u30DE\u30C3\u30D7\u8868\u793A\u30E2\u30FC\u30C9(\u30D9\u30FC\u30BF)\uFF1AJIS\u914D\u5217\u306E\u30AD\u30FC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3057\u305F\u6587\u5B57\u3084\u8A18\u53F7\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8868\u793A\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30B9\u30C6\u30FC\u30BF\u30B9\u7BA1\u7406\u30E2\u30FC\u30C9\uFF1AOS\u81EA\u52D5\u691C\u51FA/\u30C7\u30D5\u30A9\u30EB\u30C8\u30EC\u30A4\u30E4\u30FC/\u9AD8\u7CBE\u5EA6\u30B9\u30AF\u30ED\u30FC\u30EB/\u30B9\u30AF\u30ED\u30FC\u30EB\u65B9\u5411/AML/\u30BF\u30C3\u30C1\u611F\u5EA6\u306E\u8A2D\u5B9A\u304C\u51FA\u6765\u307E\u3059\u3002" })] })] }), _jsxs(Section, { id: "touch-key-mode", children: [_jsx(Subtitle, { children: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30E2\u30FC\u30C9" }), _jsxs("p", { children: ["\u30A2\u30A4\u30B3\u30F3\u3068\u30AD\u30FC\u5165\u529B\u3092\u767B\u9332\u3067\u304D\u307E\u3059\u3002", _jsx("br", {}), "\u203B\u30BF\u30C3\u30C1\u30AD\u30FC\u306F\u30EC\u30A4\u30E4\u30FC\u30AD\u30FC\u304C\u62BC\u3055\u308C\u3066\u3044\u306A\u3044\u72B6\u614B\u3067\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002", _jsx("br", {}), "\u30EC\u30A4\u30E4\u30FC0\u30681\u306B\u306F\u305D\u308C\u305E\u308C\u5225\u306E\u30BF\u30C3\u30C1\u30AD\u30FC\u30DE\u30C3\u30D7\u3092\u767B\u9332\u3067\u304D\u307E\u3059\u3002Win/Mac\u3067\u30B3\u30DE\u30F3\u30C9\u304C\u7570\u306A\u308B\u5834\u5408\u306B\u4FBF\u5229\u3067\u3059\u3002"] }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_vial_touchkeymap.jpg`, alt: "\u30BF\u30C3\u30C1\u30AD\u30FC\u30DE\u30C3\u30D7" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_icon_change.gif`, alt: "\u30A2\u30A4\u30B3\u30F3\u5909\u66F4", style: { width: '300px' } }), _jsxs("ol", { children: [_jsx("li", { children: "layer0 \u306B\u5165\u529B\u3057\u305F\u3044\u30AD\u30FC\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u3053\u306E\u6642\u306B\u30DE\u30AF\u30ED\u30DC\u30BF\u30F3\u3092\u767B\u9332\u3059\u308B\u3053\u3068\u3067\u3001\u69D8\u3005\u306A\u6A5F\u80FD\u3092\u4ED8\u4E0E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002" }), _jsx("li", { children: "layer2 \u3067\u547C\u3073\u51FA\u3059\u30A2\u30A4\u30B3\u30F3\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30DE\u30AF\u30ED\u30DC\u30BF\u30F3\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u5404\u30DC\u30BF\u30F3\u306B\u5BFE\u5FDC\u3057\u305F\u30A2\u30A4\u30B3\u30F3\u304C\u547C\u3073\u51FA\u3055\u308C\u307E\u3059\u3002" })] }), _jsxs("ol", { children: ["\u203B\u547C\u3073\u51FA\u3055\u308C\u308B\u30A2\u30A4\u30B3\u30F3\u306F\u300C", _jsx("a", { href: "https://github.com/mass-work/omni_kbd/blob/main/icon.md", target: "_blank", rel: "noreferrer", children: "\u3053\u3061\u3089" }), "\u300D\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"] })] }), _jsxs(Section, { id: "tb-tuning", children: [_jsx(Subtitle, { children: "\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30E2\u30FC\u30C9" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_tbtune.jpg`, alt: "TBTUNE", style: { width: '300px' } }), _jsx("p", { children: "\u5404\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u79FB\u52D5\u91CF\u3068\u901F\u5EA6\u306E\u30D0\u30E9\u30F3\u30B9\u3092\u8ABF\u6574\u3067\u304D\u307E\u3059\u3002" }), _jsx("p", { children: "\u753B\u9762\u5DE6\u5074\u304C\u5DE6\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u3001\u53F3\u5074\u304C\u53F3\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u8A2D\u5B9A\u306B\u306A\u308A\u307E\u3059\u3002" }), _jsxs("ol", { children: [_jsx("li", { children: "\u5404\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u53F3\u5074\u306E\u00B1\u3092\u30BF\u30C3\u30C1\u3057\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u901F\u5EA6\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u5404\u30C8\u30E9\u30C3\u30AF\u30DC\u30FC\u30EB\u306E\u5DE6\u5074\u306E\u00B1\u3092\u30BF\u30C3\u30C1\u3057\u3086\u3063\u304F\u308A\u52D5\u304B\u3057\u305F\u6642/\u65E9\u304F\u52D5\u304B\u3057\u305F\u6642\u306E\u30D0\u30E9\u30F3\u30B9\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "1.2.\u3092\u7E70\u308A\u8FD4\u3057\u64CD\u4F5C\u611F\u304C\u3088\u304F\u306A\u3063\u305F\u3089\u8ABF\u6574\u7D42\u4E86\u3067\u3059\u3002" }), _jsx("li", { children: "\uD83D\uDCBE\u30DC\u30BF\u30F3\u3092\u30BF\u30C3\u30D7\u3059\u308B\u3068\u8A2D\u5B9A\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059" })] })] }), _jsxs(Section, { id: "status-mode", children: [_jsx(Subtitle, { children: "\u30B9\u30C6\u30FC\u30BF\u30B9\u7BA1\u7406\u30E2\u30FC\u30C9\uFF1A" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_status1.jpg`, alt: "TBTUNE", style: { width: '300px' } }), _jsxs("p", { children: ["omni kbd\u306E\u30B9\u30C6\u30FC\u30BF\u30B9\u3092\u7BA1\u7406\u3057\u307E\u3059\u3002", _jsx("br", {}), "\u30BF\u30C3\u30C1\u64CD\u4F5C\u3067ON/OFF\u3092\u5207\u308A\u66FF\u3048\u3089\u308C\u307E\u3059\u3002", _jsx("br", {}), "ON\u6642\u306B\u30D0\u30FC\u304C\u51FA\u308B\u9805\u76EE\u306F\u30D0\u30FC\u3092\u30BF\u30C3\u30C1\u3059\u308B\u3053\u3068\u3067\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u8ABF\u6574\u304C\u51FA\u6765\u307E\u3059\u3002"] }), _jsxs(Table, { children: [_jsx(Thead, { children: _jsxs(Trow, { children: [_jsx(Th, { children: "\u8868\u793A" }), _jsx(Th, { children: "\u30D1\u30E9\u30E1\u30FC\u30BF" }), _jsx(Th, { children: "\u6982\u8981" }), _jsx(Th, { children: "\u8AAC\u660E" })] }) }), _jsxs("tbody", { children: [_jsxs(Trow, { children: [_jsx(Td, { children: "OS" }), _jsx(Td, { children: "\u2015" }), _jsx(Td, { children: "OS\u81EA\u52D5\u691C\u51FA" }), _jsxs(Td, { children: ["Win / Mac \u3092\u81EA\u52D5\u691C\u51FA\u3057\u8A2D\u5B9A\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002 ", _jsx("br", {})] })] }), _jsxs(Trow, { children: [_jsx(Td, { children: "Win/Mac/Bas/Sub" }), _jsx(Td, { children: "\u2015" }), _jsx(Td, { children: "\u30C7\u30D5\u30A9\u30EB\u30C8\u30EC\u30A4\u30E4\u30FC\u8868\u793A" }), _jsxs(Td, { children: ["\u30C7\u30D5\u30A9\u30EB\u30C8\u30EC\u30A4\u30E4\u30FC\u306E\u72B6\u614B\u3092\u8868\u793A\u3057\u307E\u3059\u3002 ", _jsx("br", {}), "\u81EA\u52D5\u691C\u51FAON\uFF1AWin/Mac\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002 ", _jsx("br", {}), "\u81EA\u52D5\u691C\u51FAOFF\uFF1ABas/Sub\u3092\u5207\u308A\u66FF\u3048\u3067\u304D\u307E\u3059\u3002"] })] }), _jsxs(Trow, { children: [_jsx(Td, { children: "HRV" }), _jsx(Td, { children: "RES, VAL" }), _jsx(Td, { children: "\u9AD8\u7CBE\u5EA6\u30B9\u30AF\u30ED\u30FC\u30EB\uFF08\u5782\u76F4\uFF09" }), _jsxs(Td, { children: ["\u5782\u76F4\u65B9\u5411\u306E\u9AD8\u7CBE\u5EA6\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002 ", _jsx("br", {}), "RES\uFF1A\u30EC\u30DD\u30FC\u30C8\u9001\u4FE1\u983B\u5EA6\u3092\u5909\u66F4\u3057\u307E\u3059\u3002 ", _jsx("br", {}), "VAL\uFF1A\u9001\u4FE1\u5024\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002 ", _jsx("br", {}), "\u203B\u6319\u52D5\u304C\u4E0D\u5B89\u5B9A\u306A\u5834\u5408RES\u3092\u5927\u304D\u304F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"] })] }), _jsxs(Trow, { children: [_jsx(Td, { children: "HRH" }), _jsx(Td, { children: "RES, VAL" }), _jsx(Td, { children: "\u9AD8\u7CBE\u5EA6\u30B9\u30AF\u30ED\u30FC\u30EB\uFF08\u6C34\u5E73\uFF09" }), _jsxs(Td, { children: ["\u6C34\u5E73\u65B9\u5411\u306E\u9AD8\u7CBE\u5EA6\u30B9\u30AF\u30ED\u30FC\u30EB\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002 ", _jsx("br", {}), "RES\uFF1A\u30EC\u30DD\u30FC\u30C8\u9001\u4FE1\u983B\u5EA6\u3092\u5909\u66F4\u3057\u307E\u3059\u3002 ", _jsx("br", {}), "VAL\uFF1A\u9001\u4FE1\u5024\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002 ", _jsx("br", {}), "\u203B\u6319\u52D5\u304C\u4E0D\u5B89\u5B9A\u306A\u5834\u5408RES\u3092\u5927\u304D\u304F\u3057\u3066\u304F\u3060\u3055\u3044\u3002"] })] }), _jsxs(Trow, { children: [_jsx(Td, { children: "SCI" }), _jsx(Td, { children: "\u2015" }), _jsx(Td, { children: "\u30B9\u30AF\u30ED\u30FC\u30EB\u65B9\u5411\u53CD\u8EE2" }), _jsx(Td, { children: "\u30B9\u30AF\u30ED\u30FC\u30EB\u65B9\u5411\u3092\u53CD\u8EE2\u3057\u307E\u3059\u3002" })] }), _jsxs(Trow, { children: [_jsx(Td, { children: "AML" }), _jsx(Td, { children: "\u2015" }), _jsx(Td, { children: "\u30AA\u30FC\u30C8\u30DE\u30A6\u30B9\u30EC\u30A4\u30E4\u30FC" }), _jsx(Td, { children: "\u6709\u52B9\uFF0F\u7121\u52B9\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002" })] }), _jsxs(Trow, { children: [_jsx(Td, { children: "TRP" }), _jsx(Td, { children: "HLD, RPT" }), _jsx(Td, { children: "\u30BF\u30C3\u30C1\u611F\u5EA6\u8ABF\u6574" }), _jsxs(Td, { children: ["HLD\uFF1A\u9023\u7D9A\u5165\u529B\u307E\u3067\u306E\u9045\u5EF6\u6642\u9593\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002 ", _jsx("br", {}), "RPT\uFF1A2\u56DE\u76EE\u4EE5\u964D\u306E\u30EA\u30D4\u30FC\u30C8\u9593\u9694\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002"] })] })] })] }), _jsx("strong", { children: "\u9AD8\u7CBE\u5EA6\u30B9\u30AF\u30ED\u30FC\u30EB\u306E\u8A2D\u5B9A" }), " ", _jsx("br", {}), "HRV/HRH\u306FWindows\u3068macOS\u3067\u6319\u52D5\u304C\u7570\u306A\u308A\u307E\u3059\u3002 ", _jsx("br", {}), "Bas(Win)\u306FWindow\u5411\u3051\u3001Sub(mac)\u306FmacOS\u5411\u3051\u306E\u8A2D\u5B9A\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002 ", _jsx("br", {}), "Bas\u3067Mac\u3092\u4F7F\u3046\u5834\u5408\u306A\u3069\u3001Sub\u306E\u8A2D\u5B9A\u3092\u53C2\u8003\u306B\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002"] }), _jsxs(Section, { id: "swipe", children: [_jsx(Subtitle, { children: "\u30B9\u30EF\u30A4\u30D7\u30B8\u30A7\u30B9\u30C1\u30E3\u2015\u30E2\u30FC\u30C9(\u30D9\u30FC\u30BF\u7248)" }), _jsxs("ul", { children: [_jsx("li", { children: "\u30B9\u30EF\u30A4\u30D7\u306B\u3088\u308A\u3001\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8\u306E\u5165\u529B\u7B49\u304C\u51FA\u6765\u307E\u3059\u3002" }), _jsxs("li", { children: ["\u30EC\u30A4\u30E4\u30FC0", _jsxs("ul", { children: [_jsx("li", { children: "\u5DE6\uFF1ACtrl+Z" }), _jsx("li", { children: "\u53F3\uFF1ACtrl+Y" }), _jsx("li", { children: "\u4E0A\uFF1ACtrl+S" })] })] }), _jsxs("li", { children: ["\u30EC\u30A4\u30E4\u30FC1", _jsxs("ul", { children: [_jsx("li", { children: "\u5DE6\uFF1ACtrl+PgUp" }), _jsx("li", { children: "\u53F3\uFF1ACtrl+PgDown" }), _jsx("li", { children: "\u4E0A\uFF1ACtrl+N" })] })] }), _jsxs("li", { children: ["\u30EC\u30A4\u30E4\u30FC2", _jsxs("ul", { children: [_jsx("li", { children: "\u5DE6\uFF1ACtrl+Win+\u2190" }), _jsx("li", { children: "\u53F3\uFF1ACtrl+Win+\u2192" }), _jsx("li", { children: "\u4E0A\uFF1ACtrl+Win+D" })] })] }), _jsxs("li", { children: ["\u30EC\u30A4\u30E4\u30FC3", _jsxs("ul", { children: [_jsx("li", { children: "\u5DE6\uFF1AF14" }), _jsx("li", { children: "\u53F3\uFF1AF13" }), _jsx("li", { children: "\u4E0A\uFF1AF15" })] })] }), _jsx("li", { children: "\u672C\u6A5F\u80FD\u306F\u30D9\u30FC\u30BF\u7248\u3068\u306A\u308B\u306E\u3067\u3001\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u306B\u306F\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306E\u66F8\u304D\u63DB\u3048\u304C\u5FC5\u8981\u3067\u3059\u3002" })] })] }), _jsxs(Section, { id: "keymap-view", children: [_jsx(Subtitle, { children: "\u30AD\u30FC\u30DE\u30C3\u30D7\u8868\u793A\u30E2\u30FC\u30C9(\u30D9\u30FC\u30BF)\uFF1A" }), _jsx(Image, { src: `${import.meta.env.BASE_URL}img/readme_keymap_view.jpg`, alt: "TBTUNE", style: { width: '300px' } }), _jsx("p", { children: "JIS\u914D\u5217\u306E\u30AD\u30FC\u30B3\u30FC\u30C9\u306B\u5BFE\u5FDC\u3057\u305F\u6587\u5B57\u3084\u8A18\u53F7\u3092\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u306B\u8868\u793A\u3057\u307E\u3059\u3002" }), _jsx("p", { children: "\u30EC\u30A4\u30E4\u30FC\u5207\u308A\u66FF\u3048\u6642\u306F\u5207\u308A\u66FF\u3048\u305F\u30EC\u30A4\u30E4\u30FC\u306E\u30AD\u30FC\u30B3\u30FC\u30C9\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002" }), _jsx("p", { children: "\u203B\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306B\u767B\u9332\u306E\u306A\u3044\u30AD\u30FC\u30B3\u30FC\u30C9\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002" })] }), _jsxs(Section, { id: "firmware-update", children: [_jsx(Subtitle, { children: "\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306E\u66F4\u65B0" }), _jsxs("ol", { children: [_jsx("li", { children: "\u672C\u4F53\u80CC\u9762\u306EUSB\u5DEE\u3057\u8FBC\u307F\u53E3\u96A3\u306B\u3042\u308B\u30DC\u30BF\u30F3\u3092\u30C0\u30D6\u30EB\u30AF\u30EA\u30C3\u30AF\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u30A8\u30AF\u30B9\u30D7\u30ED\u30FC\u30E9\u304C\u7ACB\u3061\u4E0A\u304C\u308B\u306E\u3067\u3001UF2\u30D5\u30A1\u30A4\u30EB\u3092\u30C9\u30E9\u30C3\u30B0&\u30C9\u30ED\u30C3\u30D7\u3057\u307E\u3059\u3002" })] }), _jsx("img", { src: `${import.meta.env.BASE_URL}img/build_10_01.jpg`, alt: "Build 10 01", style: { width: '500px' } })] }), _jsxs(Section, { id: "support", children: [_jsx(Subtitle, { children: "\u30B5\u30DD\u30FC\u30C8\u3084\u30A2\u30A4\u30C7\u30A2" }), _jsxs("p", { children: [_jsx("a", { href: "https://discord.gg/dQM3sVPgT6", style: { width: '300px' }, children: "Discord" }), "\u306B\u3066\u3001omni kbd\u30B7\u30EA\u30FC\u30BA\u306E\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002 \u30B5\u30DD\u30FC\u30C8\u3084\u3054\u76F8\u8AC7\u306F\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3067\u53D7\u3051\u4ED8\u3051\u3066\u3044\u307E\u3059\u3002"] }), _jsxs("p", { children: ["\u8FD4\u4FE1\u304C\u306A\u3044\u5834\u5408\u306F\u3001", _jsx("a", { href: "https://x.com/mass_0X00", target: "_blank", rel: "noreferrer", children: "X" }), "\u306EDM\u3067\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002"] })] })] })] })] }));
};
export default UsageGuide;
const Container = styled.div `
  padding: 2rem;
  max-width: 1100px; 
  margin: auto;
  font-family: 'Inter', sans-serif;
`;
const Content = styled.div `
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 24px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;
const Aside = styled.aside `
  position: sticky;
  top: 3rem;
  height: max-content;

  @media (max-width: 980px) {
    position: static;
    order: -1;
  }
`;
const Main = styled.main `
  min-width: 0; 
`;
const Title = styled.h1 `
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
const Image = styled.img `
  width: 100%;
  max-width: 800px;
  margin-bottom: 1.5rem;
`;
const Toc = styled.nav `
  position: sticky;
  top: 0.5rem;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  z-index: 1;
  ul {
    margin: 0;
    padding-left: 1.1rem;
  }
  a {
    text-decoration: none;
  }
`;
const Section = styled.section `
  margin: 2.5rem 0;
  scroll-margin-top: 5rem; 
`;
const Subtitle = styled.h2 `
  font-size: 1.7rem;
  font-weight: 800;
  margin: 2rem 0 1rem;
  padding-left: 0.75rem;
  border-left: 6px solid #7c3aed;
  line-height: 1.25;
`;
const Subheading = styled.h3 `
  font-size: 1.1rem;
  font-weight: 700;
  color: #5a5a5a;
  letter-spacing: 0.02em;
  margin: 1.25rem 0 0.5rem;
`;
const Callout = styled.div `
  border-left: 4px solid #0ea5e9;
  background: #f0f9ff;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin: 0.75rem 0 1rem;
`;
const Divider = styled.hr `
  border: 0;
  border-top: 1px solid #eee;
  margin: 1.25rem 0;
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
// tables
const Table = styled.table `
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
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
`;
const Td = styled.td `
  border-bottom: 1px solid #ddd;
  padding: 8px;
  vertical-align: top;
  font-size: 0.95rem;
`;
