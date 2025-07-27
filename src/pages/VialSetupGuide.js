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
const VialSetupGuide = () => (_jsxs(Container, { children: [_jsx(Title, { children: "omni kbd\u30B7\u30EA\u30FC\u30BA Vial \u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u30AC\u30A4\u30C9" }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "1. \u6CE8\u610F\u70B9\u306A\u3069" }), _jsxs("ul", { children: [_jsx("li", { children: "\u691C\u8A3C\u304C\u5341\u5206\u3067\u306A\u3044\u305F\u3081\u3001\u4E0D\u5177\u5408\u7B49\u304C\u3042\u3063\u305F\u5834\u5408X\u304BDiscord\u3067\u3054\u9023\u7D61\u4E0B\u3055\u3044\u3002" }), _jsx("li", { children: "Git\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u3001Git\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u304C\u5FC5\u8981\u3067\u3059\u3002" }), _jsx("li", { children: "Vial\u306E\u30D3\u30EB\u30C9\u306B\u306FQMK MSYS\u304C\u5FC5\u8981\u3067\u3059\u3002(\u624B\u9806\u306F\u5F8C\u8FF0)" }), _jsx("li", { children: "Windows 10\u300111\u3067\u78BA\u8A8D\u306F\u3057\u307E\u3057\u305F\u304C\u3001\u74B0\u5883\u306B\u3088\u3063\u3066\u306F\u3046\u307E\u304F\u3044\u304B\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002" }), _jsx("li", { children: "Vial\u3084QMK MSYS\u65E2\u5B58\u306E\u74B0\u5883\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u5143\u306E\u74B0\u5883\u306B\u623B\u305B\u308B\u72B6\u614B\u3067\u5B9F\u65BD\u3059\u308B\u3053\u3068\u3092\u63A8\u5968\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "C:\\Users\\Public\u306BVial\u7528\u306E\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3092\u4F5C\u308A\u3001200.png\u306E\u753B\u50CF\u30C7\u30FC\u30BF\u3092\u767B\u9332\u3059\u308B\u524D\u63D0\u3067\u89E3\u8AAC\u3057\u307E\u3059\u3002" })] })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "2. Vial\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" }), _jsxs("p", { children: [_jsx("strong", { children: "\u30B3\u30DE\u30F3\u30C9\u30D7\u30ED\u30F3\u30D7\u30C8" }), "\u3092\u958B\u304D\u4E0B\u8A18\u3092\u5165\u529B\u3057\u3066\u3044\u304D\u307E\u3059\u3002"] }), _jsx(StepTitle, { children: "\u2460 \u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u308A\u305F\u3044\u30D5\u30A9\u30EB\u30C0\u3078\u79FB\u52D5" }), _jsx(CopyableCodeBlock, { code: `cd C:\\Users\\Public` }), _jsx(StepTitle, { children: "\u2461 Vial\u306E\u30EA\u30DD\u30B8\u30C8\u30EA\u3092\u30AF\u30ED\u30FC\u30F3" }), _jsx(CopyableCodeBlock, { code: `git clone https://github.com/vial-kb/vial-qmk.git` }), _jsx(StepTitle, { children: "\u2462 vial-qmk\u30D5\u30A9\u30EB\u30C0\u3078\u79FB\u52D5" }), _jsx(CopyableCodeBlock, { code: `cd vial-qmk` }), _jsx(StepTitle, { children: "\u2463 \u6307\u5B9A\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u3078\u30C1\u30A7\u30C3\u30AF\u30A2\u30A6\u30C8" }), _jsx("p", { children: "omni_kbd\u306E\u30D0\u30FC\u30B8\u30E7\u30F3UP\u6642\u306BVial\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306F\u4E88\u544A\u306A\u304F\u5909\u66F4\u3068\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002" }), _jsx(CopyableCodeBlock, { code: `git checkout 48d3edd66f617421a1b8c58b8e03e9e83f836346` })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "3. omni_kbd\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u5C0E\u5165" }), _jsx(StepTitle, { children: "\u2460 \u30D5\u30A9\u30EB\u30C0\u3092\u79FB\u52D5" }), _jsx(CopyableCodeBlock, { code: `cd C:\\Users\\Public` }), _jsx(StepTitle, { children: "\u2461 omni_kbd\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u53D6\u5F97" }), _jsx("p", { children: "\u203Bv00.00.01\u306E\u7B87\u6240\u306F\u6700\u65B0\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306B\u5408\u308F\u305B\u4FEE\u6B63\u3057\u53D6\u5F97\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }), _jsx(CopyableCodeBlock, { code: `git clone --branch v00.00.01 --depth 1 https://github.com/mass-work/omni_kbd.git temp_omni` }), _jsx(StepTitle, { children: "\u2462 \u30D5\u30A1\u30A4\u30EB\u3092keyboards\u30D5\u30A9\u30EB\u30C0\u5185\u306B\u30B3\u30D4\u30FC" }), _jsx(CopyableCodeBlock, { code: `xcopy temp_omni vial-qmk\\keyboards\\omni_kbd /E /I /Y` }), _jsx(StepTitle, { children: "\u2463 \u4E00\u6642\u30D5\u30A9\u30EB\u30C0\u3092\u524A\u9664" }), _jsx(CopyableCodeBlock, { code: `rmdir /s /q temp_omni` }), _jsx("p", { children: "\u4E0B\u8A18\u306E\u30D5\u30A9\u30EB\u30C0\u69CB\u9020\u306B\u306A\u3063\u305F\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002" }), _jsx(CodeBlock, { text: `vial-qmk\n └keyboards\n   └omni_kbd`, language: "text", theme: dracula })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "4. QMK MSYS\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" }), _jsx("p", { children: "\u203B\u3053\u306E\u9805\u76EE\u4EE5\u964D\u30B3\u30DE\u30F3\u30C9\u30D7\u30ED\u30F3\u30D7\u30C8\u306F\u4F7F\u3044\u307E\u305B\u3093\u3002" }), _jsxs("p", { children: ["\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3092\u30D3\u30EB\u30C9\u3059\u308B\u305F\u3081\u306B\u3001\u307E\u305A ", _jsx("strong", { children: "QMK MSYS" }), " \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u304F\u3060\u3055\u3044\u3002"] }), _jsx("p", { children: "\u4EE5\u4E0B\u306E\u516C\u5F0F\u30DA\u30FC\u30B8\u304B\u3089\u30A4\u30F3\u30B9\u30C8\u30FC\u30E9\u30FC\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3057\u3066\u3001\u753B\u9762\u306E\u6848\u5185\u306B\u5F93\u3063\u3066\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3092\u9032\u3081\u3066\u304F\u3060\u3055\u3044\u3002" }), _jsxs("p", { children: ["\uD83D\uDD17", ' ', _jsx("a", { href: "https://msys.qmk.fm/", target: "_blank", rel: "noreferrer", children: "QMK MSYS \u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u30DA\u30FC\u30B8" })] })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "5. \u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306E\u30D3\u30EB\u30C9" }), _jsx(StepTitle, { children: "\u2460 QMK MSYS\u3092\u8D77\u52D5" }), _jsx("p", { children: "QMK MSYS\u3092\u958B\u304D\u3001\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002" }), _jsx(CopyableCodeBlock, { code: `cd /c/Users/Public/vial-qmk` }), _jsx(StepTitle, { children: "\u2461 \u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3092\u30D3\u30EB\u30C9" }), _jsx(CopyableCodeBlock, { code: `make omni_kbd/omni_cs:vial` }), _jsx(StepTitle, { children: "\u2462 \u751F\u6210\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u3092\u78BA\u8A8D" }), _jsxs("p", { children: ["\u4EE5\u4E0B\u306E\u30D1\u30B9\u306B\u751F\u6210\u3055\u308C\u305F", _jsx("code", { children: ".uf2" }), "\u30D5\u30A1\u30A4\u30EB\u3092\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002"] }), _jsx(CodeBlock, { text: `vial-qmk\n └.build\n   └omni_kbd_omni_cs_vial.uf2`, language: "text", theme: dracula })] }), _jsxs(Section, { children: [_jsx(Subtitle, { children: "6. \u30A2\u30A4\u30B3\u30F3\u306E\u5909\u66F4\u30FB\u8FFD\u52A0\u624B\u9806" }), _jsx(StepTitle, { children: "\u2460 \u753B\u50CF\u306E\u6E96\u5099" }), _jsx("p", { children: "64x64\u4EE5\u4E0B\u306EPNG\u753B\u50CF\u3092icon\u30D5\u30A9\u30EB\u30C0\u306B\u4FDD\u5B58\u3057\u307E\u3059\u3002(\u69CB\u6210\u306F\u4E0B\u8A18\u306E\u3088\u3046\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002)" }), _jsx(CodeBlock, { text: `vial-qmk\n └keyboards\n   └omni_kbd\n     └icon`, language: "text", theme: dracula }), _jsx(StepTitle, { children: "\u2461 QMK MSYS\u3067\u30A2\u30A4\u30B3\u30F3\u30C7\u30FC\u30BF\u3078\u5909\u63DB" }), _jsx("p", { children: "QMK MSYS\u3092\u958B\u304D\u3001\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002" }), _jsx(CopyableCodeBlock, { code: `cd /c/Users/Public/vial-qmk/keyboards/omni_kbd/icon` }), _jsxs("p", { children: [' ', _jsx("strong", { children: "\u767D\u9ED2\u30A2\u30A4\u30B3\u30F3\u306E\u5834\u5408\uFF1A" }), ' '] }), _jsx(CopyableCodeBlock, { code: `qmk painter-convert-graphics -f mono2 -i 200.png -o ./generated/` }), _jsxs("p", { children: [' ', _jsx("strong", { children: "\u30AB\u30E9\u30FC\u30A2\u30A4\u30B3\u30F3\u306E\u5834\u5408\uFF1A" }), ' '] }), _jsx(CopyableCodeBlock, { code: `qmk painter-convert-graphics -f rgb565 -i 200.png -o ./generated/` }), _jsx(StepTitle, { children: "\u2462 \u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u3078\u306E\u8A18\u8FF0\u3092\u8FFD\u52A0" }), _jsxs("p", { children: [_jsx("strong", { children: "omni_kbd/omni_cs/rules.mk" }), "\u306B\u4EE5\u4E0B\u3092\u8FFD\u8A18\u3057\u307E\u3059\u3002"] }), _jsx(CopyableCodeBlock, { code: `SRC += ../icon/generated/200.qgf.c` }), _jsxs("p", { children: [_jsx("strong", { children: "omni_kbd/icon/omni_image_loader.c" }), "\u306B\u4EE5\u4E0B\u3092\u8FFD\u8A18\u3057\u307E\u3059\u3002"] }), _jsx(CopyableCodeBlock, { code: `#include \"generated/200.qgf.h\"` }), _jsx(CopyableCodeBlock, { code: `image_200 = qp_load_image_mem(gfx_200);` }), _jsx(StepTitle, { children: "\u2463 \u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u306E\u30D3\u30EB\u30C9" }), _jsx("p", { children: "\u5909\u66F4\u304C\u5B8C\u4E86\u3057\u305F\u3089\u30015.\u306E\u624B\u9806\u3067\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u3092\u30D3\u30EB\u30C9\u3057\u30DE\u30A4\u30B3\u30F3\u306B\u66F8\u304D\u8FBC\u3093\u3067\u304F\u3060\u3055\u3044\u3002" }), _jsx(StepTitle, { children: "\u2464 \u8D77\u52D5gif\u306E\u5909\u66F4" }), _jsx("p", { children: "\u8D77\u52D5\u6642\u306B\u8868\u793A\u3059\u308BGIF\u753B\u50CF\u3082\u540C\u69D8\u306E\u624B\u9806\u3067\u5909\u66F4\u3067\u304D\u307E\u3059" }), _jsxs("ul", { children: [_jsx("li", { children: "GIF\u753B\u50CF\u3092240x240\u4EE5\u4E0B\u306B\u3057\u3001\u300Comni_logo.gif\u300D\u3068\u3057\u3066\u4FDD\u5B58\u3057\u307E\u3059\u3002" }), _jsx("li", { children: "\u5BB9\u91CF\u306E\u95A2\u4FC2\u4E0A\u3001GIF\u306F3\u79D2\u4EE5\u4E0B\u3001\u767D\u9ED2\u3092\u63A8\u5968\u3057\u307E\u3059\u3002" })] }), _jsx(CopyableCodeBlock, { code: `qmk painter-convert-graphics -f mono2 -i omni_logo.gif -o ./generated/`, language: "bash" })] })] }));
export default VialSetupGuide;
const Container = styled.div `
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: 'Inter', sans-serif;
  line-height: 1.7;
`;
const Title = styled.h1 `
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;
const Section = styled.section `
  margin-bottom: 3rem;
`;
const Subtitle = styled.h2 `
  font-size: 1.6rem;
  margin-bottom: 1rem;
  border-bottom: 3px solid #bbb;
  padding-bottom: 0.5rem;
`;
const StepTitle = styled.h3 `
  font-size: 1.2rem;
  margin: 1.5rem 0 0.5rem;
  color: #333;
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
