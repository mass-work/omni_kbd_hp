import React, { useState } from 'react';
import styled from 'styled-components';
import { CodeBlock, dracula } from 'react-code-blocks';

const CopyableCodeBlock: React.FC<{
  code: string;
  language?: string;
}> = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <CodeWrapper>
      <CopyButton onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</CopyButton>
      <CodeBlock text={code} language={language} showLineNumbers={false} theme={dracula} />
    </CodeWrapper>
  );
};

const VialSetupGuide: React.FC = () => (
  <Container>
    <Title>omni kbdシリーズ Vial セットアップガイド</Title>

    <Section>
      <Subtitle>1. 注意点など</Subtitle>
      <ul>
        <li>不具合等があった場合XかDiscordでご連絡下さい。</li>
        <li>Gitを使用するため、Gitのインストールが必要です。</li>
        <li>VialのビルドにはQMK MSYSが必要です。(手順は後述)</li>
        <li>Windows 10、11で確認はしましたが、環境によってはうまくいかない可能性があります。</li>
        <li>VialやQMK MSYS既存の環境がある場合は、元の環境に戻せる状態で実施することを推奨します。</li>
        <li>C:\Users\PublicにVial用のディレクトリを作り、200.pngの画像データを登録する前提で解説します。</li>
      </ul>
    </Section>

    <Section>
      <Subtitle>2. Vialのインストール</Subtitle>
      <p>
        <strong>コマンドプロンプト</strong>を開き下記を入力していきます。
      </p>
      <StepTitle>① プロジェクトを作りたいフォルダへ移動</StepTitle>
      <CopyableCodeBlock code={`cd C:\\Users\\Public`} />

      <StepTitle>② omni kbd用のVialのリポジトリをクローン</StepTitle>
      <CopyableCodeBlock code={`git clone https://github.com/mass-work/vial-qmk.git`} />
      <SmallNote>※上記は動作確認済みバージョンです。 互換があれば使用中の環境にomni_kbdフォルダのみ追加しても問題ありません。</SmallNote>

      <StepTitle>③ vial-qmkフォルダへ移動</StepTitle>
      <CopyableCodeBlock code={`cd vial-qmk`} />
    </Section>

    <Section>
      <Subtitle>3. QMK MSYSのインストール</Subtitle>
      <p>※この項目以降コマンドプロンプトは使いません。</p>
      <p>
        ファームウェアをビルドするために、まず <strong>QMK MSYS</strong> をインストールしてください。
      </p>
      <p>以下の公式ページからインストーラーをダウンロードして、画面の案内に従ってインストールを進めてください。</p>
      <p>
        🔗{' '}
        <a href="https://msys.qmk.fm/" target="_blank" rel="noreferrer">
          QMK MSYS インストールページ
        </a>
      </p>
    </Section>

    <Section>
      <Subtitle>4. ファームウェアのビルド</Subtitle>
      <StepTitle>① QMK MSYSを起動</StepTitle>
      <p>QMK MSYSを開き、以下のコマンドを実行します。</p>
      <CopyableCodeBlock code={`cd /c/Users/Public/vial-qmk`} />

      <StepTitle>② ファームウェアをビルド</StepTitle>
      <CopyableCodeBlock code={`make omni_kbd/omni_cs:vial`} />

      <StepTitle>③ 生成されたファイルを確認</StepTitle>
      <p>
        以下のパスに生成された<code>.uf2</code>ファイルを確認できます。
      </p>
      <CodeWrapper>
        <CodeBlock
          text={`vial-qmk
 └.build
   └omni_kbd_omni_cs_vial.uf2`}
          language="text"
          theme={dracula}
        />
      </CodeWrapper>
    </Section>

    <Section>
      <Subtitle>5. アイコンの変更・追加手順</Subtitle>
      <StepTitle>① 画像の準備</StepTitle>
      <p>64x64以下のPNG画像をiconフォルダに保存します。(構成は下記のようになっています。)</p>
      <CodeWrapper>
        <CodeBlock
          text={`vial-qmk
 └keyboards
   └omni_kbd
     └icon`}
          language="text"
          theme={dracula}
        />
      </CodeWrapper>

      <StepTitle>② QMK MSYSでアイコンデータへ変換</StepTitle>
      <p>QMK MSYSを開き、以下のコマンドを実行します。</p>
      <CopyableCodeBlock code={`cd /c/Users/Public/vial-qmk/keyboards/omni_kbd/icon`} />

      <p>
        <strong>白黒アイコンの場合：</strong>
      </p>
      <CopyableCodeBlock code={`qmk painter-convert-graphics -f mono2 -i 200.png -o ./generated/`} />

      <p>
        <strong>カラーアイコンの場合：</strong>
      </p>
      <CopyableCodeBlock code={`qmk painter-convert-graphics -f rgb565 -i 200.png -o ./generated/`} />

      <StepTitle>③ 設定ファイルへの記述を追加</StepTitle>
      <p>
        <strong>omni_kbd/omni_cs/rules.mk</strong>に以下を追記します。
      </p>
      <CopyableCodeBlock code={`SRC += ../icon/generated/200.qgf.c`} />

      <p>
        <strong>omni_kbd/icon/omni_image_loader.c</strong>に以下を追記します。
      </p>
      <CopyableCodeBlock code={`#include "generated/200.qgf.h"`} />
      <CopyableCodeBlock code={`image_200 = qp_load_image_mem(gfx_200);`} />

      <StepTitle>④ ファームウェアのビルド</StepTitle>
      <p>変更が完了したら、4.の手順でファームウェアをビルドしマイコンに書き込んでください。</p>

      <StepTitle>⑤ 起動gifの変更</StepTitle>
      <p>起動時に表示するGIF画像も同様の手順で変更できます</p>
      <ul>
        <li>GIF画像を240x240以下にし、「omni_logo.gif」として保存します。</li>
        <li>容量の関係上、GIFは3秒以下、白黒を推奨します。</li>
      </ul>
      <CopyableCodeBlock code={`qmk painter-convert-graphics -f mono2 -i omni_logo.gif -o ./generated/`} language="bash" />
    </Section>
  </Container>
);

export default VialSetupGuide;



const Container = styled.div`
  box-sizing: border-box;

  & *,
  & *::before,
  & *::after {
    box-sizing: inherit;
  }

  width: min(100%, 860px);
  margin: 0 auto;
  padding: clamp(12px, 4vw, 24px);

  font-family:
    'Inter',
    'Noto Sans JP',
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  font-size: clamp(14px, 1.45vw, 16px);
  line-height: 1.85;
  letter-spacing: 0.01em;

  word-break: normal;
  overflow-wrap: anywhere;
  line-break: strict;
  text-spacing: ideograph-alpha ideograph-numeric;

  & * {
    min-width: 0;
  }

  code {
    word-break: break-word;
  }
`;


const Title = styled.h1`
  font-size: clamp(21px, 5.2vw, 30px);
  font-weight: 800;
  margin: 0 0 1.1rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  font-size: clamp(17px, 4.4vw, 23px);  
  font-weight: 700;
  margin: 0 0 0.8rem;
  border-bottom: 3px solid #bbb;
  padding-bottom: 0.5rem;
`;

const StepTitle = styled.h3`
  font-size: clamp(15px, 3.8vw, 19px);
  margin: 1.3rem 0 0.55rem;
  color: #333;
`;

const SmallNote = styled.p`
  font-size: 0.9em;
  opacity: 0.8;
  margin-top: 8px;
`;

const CodeWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  margin: 0.6rem 0;

  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  pre {
    margin: 0;
    width: max-content; 
    min-width: 480px;
  }

  @media (max-width: 600px) {
    overflow-x: hidden;
    padding-right: 0;

    pre {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      white-space: pre;
    }

    code {
      font-size: 0.85em;
    }
  }
`;




const CopyButton = styled.button`
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

  &:hover { opacity: 0.85; }
`;

export const ImgSingle = styled.img`
  display: block;
  width: 84%;
  max-width: 520px;
  height: auto;
  margin: 10px auto 0;
  border-radius: 0.375rem;

  @media (min-width: 1024px) { width: 78%; }
`;

export const ImgRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;

export const ImgPair = styled.img`
  display: block;
  height: auto;
  border-radius: 0.375rem;
  flex: 1 1 calc(50% - 12px);
  max-width: calc(50% - 12px);

  @media (min-width: 768px) { max-width: 340px; }
  @media (max-width: 420px) { flex-basis: 100%; max-width: 100%; }
`;

