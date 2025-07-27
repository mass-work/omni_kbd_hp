import React, { useState } from 'react';
import styled from 'styled-components';
import { CodeBlock, dracula } from 'react-code-blocks';

//
// ▼▼▼ CopyableCodeBlock: react-code-blocks + コピー機能付きコンポーネント ▼▼▼
//
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

//
// ▼▼▼ UsageGuideコンポーネント本体 ▼▼▼
//
const UsageGuide: React.FC = () => {
  return (
    <Container>
      <Title>omni kbd Readme</Title>
      <Description>
        omni kbdはデュアルトラックボールを搭載した一体型40%キーボードの自作キットシリーズです。 キーボードの特徴、使い方、設定方法などを紹介します。
      </Description>
      <Image src={`${import.meta.env.BASE_URL}img/readme_top.jpg`} alt="omni kbd" />
      <NoticeLink>
        <a href="https://mass-work.github.io/omni_kbd_hp/#/pre-purchase-notice">購入前の注意点</a>
      </NoticeLink>
      <Section>
        <Subtitle>omni kbdシリーズについて</Subtitle>
        <Product>
          <ProductTitle>omni CS</ProductTitle>
          <ProductDetails>
            <li>配列: カラムスタッガード</li>
            <li>メイントラックボール: 44mm (オプション 34mm)</li>
            <li>サブトラックボール: 25mm</li>
            <li>タッチディスプレイ: 有り</li>
            <li>スイッチ: cherryMX</li>
            <li>
              <a href="https://masskb.booth.pm/items/6487849" target="_blank" rel="noreferrer">
                shop
              </a>
            </li>
          </ProductDetails>
          <p>キー入力やマウスの操作性に重きを置いています。デスク上に据え置き、 「あらゆるPC作業を効率的にこなす」をコンセプトに設計しています。</p>
        </Product>

        <Product>
          <ProductTitle>omni orth</ProductTitle>
          <ProductDetails>
            <li>配列: オーソリニア</li>
            <li>左右トラックボール: 25mm</li>
            <li>タッチディスプレイ: 有り</li>
            <li>スイッチ: lofree low profile, choc v1</li>
          </ProductDetails>
          <p>トラックボールは左右ともに25mmを採用。打鍵感と操作性のバランスを重視したロープロファイル専用設計です。</p>
        </Product>

        <Product>
          <ProductTitle>omni row</ProductTitle>
          <ProductDetails>
            <li>配列: ロウスタッガード</li>
            <li>左右トラックボール: サイズ未定</li>
            <li>タッチディスプレイ: 未定</li>
            <li>スイッチ: 未定</li>
          </ProductDetails>
        </Product>
      </Section>
      <Section>
        <Subtitle>キーマップ</Subtitle>
        <p>
          キーマップは
          <a href="https://vial.rocks/" target="_blank" rel="noreferrer">
            Vial
          </a>
          で変更できます。 Vialの使い方については解説記事が豊富なので、公式サイトやブログを参考にしてください。
        </p>
        <Image src={`${import.meta.env.BASE_URL}img/readme_vial_allkeymap.jpg`} alt="Vial キーマップ" />
      </Section>
      <Section>
        <Subtitle>カスタムキーコード</Subtitle>
        <p>omni kbdをカスタマイズするためのキーコードが設定されています。</p>
        <p>画像下段の「User」タブから選択することが出来ます。。</p>
        <Image src={`${import.meta.env.BASE_URL}img/readme_custom_keycode.jpg`} alt="カスタムキーコード" />
        <ol>
          <li>ディスプレイ切替：TcKey、TbTun、Swget、KeyMpでタッチディスプレイが切り替わります。</li>
          <li>ディスプレイの色変更：〇〇H、S、V、の値を±することで特定のモードで画面や文字の色を変更できます。</li>
          <li>右手ボールスクロール：TbrCgを押している間右トラックボールでスクロールできます。</li>
          <li>オートマウスレイヤー：AmlTgで有効/無効を切り替えます。</li>
        </ol>
      </Section>
      <Section>
        <Subtitle>タッチディスプレイ</Subtitle>
        <p>タッチディスプレイは設定されたカスタムキーコードを押下することで切り替わります。</p>
        <p>初期状態ではレイヤー3の右手側上段に設定されています。</p>
        <ol>
          <li>タッチキーモード：円周上に配置されたボタンをタッチすることでコマンドを実行します。</li>
          <li>トラックボールチューニングモード：トラックボールの動きを調整することが出来ます。</li>
          <li>スワイプジェスチャーモード(ベータ)：スワイプすることで、コマンドを実行します。</li>
          <li>キーマップ表示モード(ベータ)：JIS配列のキーコードに対応した文字や記号をディスプレイに表示します。</li>
        </ol>
      </Section>
      <Section>
        <Subtitle>タッチキーモード</Subtitle>
        <p>アイコンとキー入力を登録できます。</p>
        <p>※タッチキーはレイヤーキーが押されていない状態(レイヤー0)で使用してください。</p>
        <Image src={`${import.meta.env.BASE_URL}img/readme_vial_touchkeymap.jpg`} alt="タッチキーマップ" />
        <Image src={`${import.meta.env.BASE_URL}img/readme_icon_change.gif`} alt="アイコン変更" style={{ width: '300px' }} />
        <ol>
          <li>layer0 に入力したいキーを設定します。</li>
          <li>この時にマクロボタンを登録することで、様々な機能を付与することができます。</li>
          <li>layer1 で呼び出すアイコンを設定します。</li>
          <li>マクロボタンを設定することで、各ボタンに対応したアイコンが呼び出されます。</li>
        </ol>
        <ol>
          ※呼び出されるアイコンは「
          <a href="https://github.com/mass-work/omni_kbd/blob/main/icon.md" target="_blank" rel="noreferrer">
            こちら
          </a>
          」を参照してください。
        </ol>
      </Section>
      <Section>
        <Subtitle>トラックボールチューニングモード</Subtitle>
        <Image src={`${import.meta.env.BASE_URL}img/readme_tbtune.jpg`} alt="TBTUNE" style={{ width: '300px' }} />
        <p>各トラックボールの移動量と速度のバランスを調整できます。</p>
        <p>画面左側が左トラックボール、右側が右トラックボールの設定になります。</p>
        <ol>
          <li>各トラックボールの右側の±をタッチしトラックボールの速度を調整します。</li>
          <li>各トラックボールの左側の±をタッチしゆっくり動かした時/早く動かした時のバランスを調整します。</li>
          <li>1.2.を繰り返し操作感がよくなったら調整終了です。</li>
          <li>💾ボタンをタップすると設定が保存されます</li>
        </ol>
      </Section>
      <Section>
        <Subtitle>スワイプジェスチャ―モード(ベータ版)</Subtitle>
        <ul>
          <li>スワイプにより、ショートカットの入力等が出来ます。</li>
          <li>
            レイヤー0
            <ul>
              <li>左：Ctrl+Z</li>
              <li>右：Ctrl+Y</li>
              <li>上：Ctrl+S</li>
            </ul>
          </li>
          <li>
            レイヤー1
            <ul>
              <li>左：Ctrl+PgUp</li>
              <li>右：Ctrl+PgDown</li>
              <li>上：Ctrl+N</li>
            </ul>
          </li>
          <li>
            レイヤー2
            <ul>
              <li>左：Ctrl+Win+←</li>
              <li>右：Ctrl+Win+→</li>
              <li>上：Ctrl+Win+D</li>
            </ul>
          </li>
          <li>
            レイヤー3
            <ul>
              <li>左：F14</li>
              <li>右：F13</li>
              <li>上：F15</li>
            </ul>
          </li>
          <li>本機能はベータ版となるので、カスタマイズにはファームウェアの書き換えが必要です。</li>
        </ul>
      </Section>

      <Section>
        <Subtitle>キーマップ表示モード(ベータ)：</Subtitle>
        <Image src={`${import.meta.env.BASE_URL}img/readme_keymap_view.jpg`} alt="TBTUNE" style={{ width: '300px' }} />
        <p>JIS配列のキーコードに対応した文字や記号をディスプレイに表示します。</p>
        <p>レイヤー切り替え時は切り替えたレイヤーのキーコードが表示されます。</p>
        <p>※ファームウェアに登録のないキーコードは表示されません。</p>
      </Section>
      <Section>

        <Subtitle>ファームウェアの更新</Subtitle>
        <ol>
          <li>本体背面のUSB差し込み口隣にあるボタンをダブルクリックします。</li>
          <li>エクスプローラが立ち上がるので、UF2ファイルをドラッグ&ドロップします。</li>
        </ol>
        <img src={`${import.meta.env.BASE_URL}img/build_10_01.jpg`} alt="Build 10 01" style={{ width: '500px' }} />
      </Section>

      <Section>
        <Subtitle>サポートやアイデア</Subtitle>
        <p>
          <a href="https://discord.gg/dQM3sVPgT6" style={{ width: '300px' }}>
            Discord
          </a>
          にて、omni kbdシリーズのコミュニティを作成しました。 サポートやご相談はコミュニティで受け付けています。
        </p>
        <p>
          返信がない場合は、
          <a href="https://x.com/mass_0X00" target="_blank" rel="noreferrer">
            X
          </a>
          のDMでご連絡ください。
        </p>
      </Section>
      
    </Container>
  );
};

export default UsageGuide;


const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  margin-bottom: 1.5rem;
`;

const NoticeLink = styled.p`
  display: block;
  font-size: 1rem;
  color: #0070f3;
  text-decoration: none;
  margin-bottom: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Product = styled.div`
  margin-bottom: 1.5rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProductDetails = styled.ul`
  margin-left: 1.5rem;
  list-style-type: disc;
`;

//
// ▼▼▼ react-code-blocks 用ラッパコンポーネントのスタイル ▼▼▼
//
const CodeWrapper = styled.div`
  position: relative;
  margin: 1rem 0;
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
  font-size: 0.9rem;
  &:hover {
    opacity: 0.8;
  }
`;
