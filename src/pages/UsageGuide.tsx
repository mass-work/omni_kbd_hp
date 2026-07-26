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
      <CodeBlock text={code} language={language} showLineNumbers={false} theme={dracula as any} />
    </CodeWrapper>
  );
};

const go = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const UsageGuideVer010000: React.FC = () => {
  return (
    <Container>
      <Title>omni kbd 使い方</Title>

      <Content>
        {/* 左サイドバー（TOC） */}
        <Aside>
          タッチディスプレイの表示モードは、キーマップに登録したカスタムキー
          <Toc>
            <strong>目次</strong>
            <ul>
              <li>
                <a href="#keymap" onClick={go('keymap')}>
                  キーマップ
                </a>
              </li>
              <li>
                <a href="#os-detect" onClick={go('os-detect')}>
                  OS自動検出と手動切替
                </a>
              </li>
              <li>
                <a href="#custom-keycodes" onClick={go('custom-keycodes')}>
                  カスタムキーコード
                </a>
              </li>
              <li>
                <a href="#touch-display" onClick={go('touch-display')}>
                  タッチディスプレイ
                </a>
              </li>
              <li>
                <a href="#touch-key-mode" onClick={go('touch-key-mode')}>
                  タッチキーモード
                </a>
              </li>
              <li>
                <a href="#tb-tuning" onClick={go('tb-tuning')}>
                  トラックボールチューニング
                </a>
              </li>
              <li>
                <a href="#status-mode" onClick={go('status-mode')}>
                  ステータス管理モード
                </a>
              </li>
              <li>
                <a href="#keymap-view" onClick={go('keymap-view')}>
                  キーマップ表示(β)
                </a>
              </li>
              <li>
                <a href="#firmware-update" onClick={go('firmware-update')}>
                  ファームウェア更新
                </a>
              </li>
              <li>
                <a href="#support" onClick={go('support')}>
                  サポート
                </a>
              </li>
            </ul>
          </Toc>
        </Aside>

        <Main>
          <Section id="keymap">
            <Subtitle>キーマップ</Subtitle>
            <p>
              キーマップは
              <a href="https://vial.rocks/" target="_blank" rel="noreferrer">
                <strong>Vial</strong>
              </a>
              で変更できます。Vialの基本的な使い方については、
              <a href="https://get.vial.today/manual/layers.html" target="_blank" rel="noreferrer">
                <strong>公式サイト</strong>
              </a>
              やブログ記事を参考にしてください。
            </p>
            <Callout>
              Ver01.00.00ではキーマップのレイアウトと各機能の登録場所が変更されています。
              旧バージョンのキーマップをそのまま使用せず、下のキーマップ画像を確認して設定してください。
            </Callout>
            <Image src={`${import.meta.env.BASE_URL}img/readme_v01_vial_allkeymap.jpg`} alt="Ver01.00.00 Vial キーマップ" />
            <br />
            <br />
            <Image src={`${import.meta.env.BASE_URL}img/readme_v01_vial_allkeymap_TB.jpg`} alt="Ver01.00.00 Vial キーマップ" />

            <Subheading>キーマップから設定できる機能</Subheading>
            <ul>
              <li>通常のキー入力、レイヤー切り替え、マクロ</li>
              <li>タッチキーモードへ切り替えるカスタムキーコード</li>
              <li>左右トラックボールの操作</li>
              <li>タッチディスプレイのスワイプ操作</li>
            </ul>

            <Subheading>トラックボール操作の設定</Subheading>
            <p>
              トラックボールの各操作は、キーマップ上のトラックボールの位置にある十字配置部にキーコードを登録して変更できます。
              全て空にするとポインター操作になり、スクロールやキー入力を登録するの登録したボタンが入力されます。 ※マクロの登録できません。
            </p>

            <Subheading>スワイプ操作の設定</Subheading>
            <p>
              中央の十字配置部にキーコードを登録することで、タッチディスプレイのスワイプ操作に対応するキーを設定できます。
              スワイプ操作はタッチキーモードとスワイプモードで有効になります。
            </p>
          </Section>

          <Section id="os-detect">
            <Subtitle>OS自動検出と手動切替</Subtitle>
            <p>
              omni kbd は <strong>Windows / macOS を自動検出</strong>
              してデフォルトレイヤーが切り替わります。 <br />
              ※環境により検出できない場合があります。 <br />
              自動検出に失敗する場合、その他の OS を使う場合は<strong>手動切替</strong>をご利用ください。
            </p>

            <h3>レイヤーの前提</h3>
            <ul>
              <li>レイヤー0 ： Base or Windows </li>
              <li>レイヤー1 ： Sub or macOS</li>
              レイヤー0にキーマップを設定後、レイヤー1に変更したいキーを登録してください。
              <br />
              Win/Mac併用の環境で使う場合、レイヤー1のみCtrlとGuiを入れ替えるとWin/Macで操作感が近くなります。
              <Image src={`${import.meta.env.BASE_URL}img/readme_base_sub_keymap.jpg`} alt="Vial キーマップ" />
              共通で使う機能レイヤーは <strong>2 以降</strong>に作成してください。（数字/記号 など）
            </ul>

            <h3>自動検出のタイミング</h3>
            <ul>
              <li>キーボードが起動(PC起動時やリセットなど)したタイミングで OS を判定します。</li>
              <li>
                判定に成功すると、Windows は<strong>レイヤー0</strong>、macOS は<strong>レイヤー1</strong>に自動で切り替わります。
              </li>
            </ul>

            <h3>手動で切り替える</h3>
            <ol>
              <li>
                タッチディスプレイの<strong>ステータス管理モード</strong>を開く。
              </li>
              <li>
                <strong>OS</strong>：自動検出の ON/OFF を切替。
              </li>
              <li>
                自動検出を<strong>OFF</strong>にした状態で、 <strong>Bas / Sub</strong> を選択 （Bas = レイヤー0、Sub = レイヤー1）。
              </li>
            </ol>

            <h3>うまくいかないとき</h3>
            <ul>
              <li>自動検出を OFF にして手動切替を使用してください。</li>
              <li>背面のリセットボタンを1回押してください。</li>
            </ul>
          </Section>

          <Section id="custom-keycodes">
            <Subtitle>カスタムキーコード</Subtitle>
            <p>omni kbd固有の機能は、Vial下段の「User」タブにあるカスタムキーコードから設定できます。</p>
            <Image src={`${import.meta.env.BASE_URL}img/readme_v01_custom_keycode.jpg`} alt="Ver01.00.00 カスタムキーコード" />
            <ol>
              <li>タッチキーモード切替：タッチキーモードを表示するカスタムキーコードを任意のキーへ登録します。</li>
              <li>トラックボールチューニング：トラックボール調整画面を表示します。</li>
              <li>キーマップ表示：キーマップ表示モードへ切り替えます。</li>
              <li>ステータス管理：ステータス管理モードへ切り替えます。</li>
              <li>ディスプレイカラー：各モードの画面色や文字色を調整します。</li>
            </ol>
            <p>カスタムキーコードの表示名は、Vial上の「User」タブを確認してください。</p>
          </Section>

          <Section id="touch-display">
            <Subtitle>タッチディスプレイ</Subtitle>
            <p>
              タッチディスプレイは
              <a href="https://omni-app-web.pages.dev/" target="_blank" rel="noreferrer">
                <strong>カスタマイズアプリ</strong>
              </a>
              を使用して、待機画像の変更や、タッチキーモードのアイコン/コマンドのカスタムができます。
            </p>
            <Image src={`${import.meta.env.BASE_URL}img/readme_omniapp_01.jpg`} alt="Ver01.00.00 カスタムキーコード" />
            <Image src={`${import.meta.env.BASE_URL}img/readme_omniapp_02.jpg`} alt="Ver01.00.00 カスタムキーコード" />

            <p>タッチディスプレイの表示モードは、キーマップに登録したカスタムキーコードで切り替えます。</p>
            <p>各モードの呼び出し位置は、Ver01.00.00の初期キーマップを確認してください。</p>
            <p>※最新のファームウェアでは、タッチキーモードのレイヤー変更がカスタムキーコードでの入力に変更になります。</p>

            <VideoWrap>
              <iframe
                src="https://www.youtube.com/embed/cclZfxZU33Y?si=RFPv1jGXqeazWUuZ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </VideoWrap>

            <ol>
              <li>タッチキーモード：タッチボタンとスワイプ操作で、キーマップに設定したキー入力を実行します。</li>
              <li>トラックボールチューニングモード：左右トラックボールの動きを調整します。</li>
              <li>キーマップ表示モード(β)：JIS配列のキーコードに対応した文字や記号を表示します。</li>
              <li>ステータス管理モード：OS切替、オートマウスレイヤー、ハプティック、タッチ操作を設定します。</li>
            </ol>
          </Section>

          <Section id="touch-key-mode">
            <Subtitle>タッチキーモード</Subtitle>
            <p>
              円周上のタッチボタンとスワイプ操作に、キー入力やショートカットを設定できます。
              <br />
              タッチキーモードへの切り替えは、キーマップに登録したカスタムキーコードから行います。
            </p>

            <Image src={`${import.meta.env.BASE_URL}img/readme_v01_touchkeymap.jpg`} alt="Ver01.00.00 タッチキーマップ" />
            <p>下段：描画部分について、M254はアプリから書き込んだ画像表示となります。</p>

            <Subheading>タッチボタンの設定</Subheading>
            <ol>
              <li>Vialでタッチキー用の登録位置を開きます。</li>
              <li>各タッチボタンへ、実行したいキー入力またはマクロを設定します。</li>
              <li>必要に応じて、レイヤーごとに異なる操作を設定します。</li>
            </ol>

            <Subheading>スワイプ操作の設定</Subheading>
            <ol>
              <li>キーマップ上のスワイプ用登録位置を開きます。</li>
              <li>上・下・左・右へ、実行したいキー入力またはマクロを設定します。</li>
              <li>タッチキーモードで画面をスワイプすると、登録した操作が実行されます。</li>
            </ol>

            <Subheading>アイコンの設定</Subheading>
            <p>
              タッチキーに表示するアイコンは、omni-appから登録できます。アイコンとキー入力を組み合わせることで、
              使用する機能を画面上で分かりやすく表示できます。
            </p>
          </Section>

          <Section id="tb-tuning">
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

          <Section id="status-mode">
            <Subtitle>ステータス管理モード</Subtitle>
            <Image src={`${import.meta.env.BASE_URL}img/readme_v01_status.jpg`} alt="Ver01.00.00 ステータス管理モード" style={{ width: '300px' }} />
            <p>
              omni kbdの動作設定をタッチディスプレイから変更します。
              <br />
              各項目をタッチするとON/OFFを切り替えられます。
              <br />
              調整バーが表示される項目は、バーをタッチして値を変更できます。
            </p>
            <Table>
              <Thead>
                <Trow>
                  <Th>表示</Th>
                  <Th>概要</Th>
                  <Th>説明</Th>
                </Trow>
              </Thead>
              <tbody>
                <Trow>
                  <Td>OS</Td>
                  <Td>OS自動検出</Td>
                  <Td>Windows / macOSの自動検出をON/OFFします。</Td>
                </Trow>
                <Trow>
                  <Td>Win / Mac / Bas / Sub</Td>
                  <Td>デフォルトレイヤー</Td>
                  <Td>
                    自動検出ON時は検出したOSを表示します。
                    <br />
                    自動検出OFF時はBas / Subを手動で切り替えます。
                  </Td>
                </Trow>
                <Trow>
                  <Td>AML</Td>
                  <Td>Auto mouse layer</Td>
                  <Td>トラックボール操作時にマウス用レイヤーへ自動で切り替える機能をON/OFFします。</Td>
                </Trow>
                <Trow>
                  <Td>HPB</Td>
                  <Td>Trackball haptic</Td>
                  <Td>
                    トラックボール操作に連動するハプティックフィードバックをON/OFFします。
                    <br />
                    ※シリーズにより対応状況が異なります。振動モータOPに対応している場合は有効にできます。
                  </Td>
                </Trow>
                <Trow>
                  <Td>HPT</Td>
                  <Td>Touch display haptic</Td>
                  <Td>
                    タッチディスプレイ操作時のハプティックフィードバックをON/OFFします。
                    <br />
                    ※シリーズにより対応状況が異なります。振動モータOPに対応している場合は有効にできます。
                  </Td>
                </Trow>
                <Trow>
                  <Td>TOC</Td>
                  <Td>Touch repeat interval</Td>
                  <Td>タッチ操作を押し続けたときの連続入力開始時間と、2回目以降の入力間隔を調整します。</Td>
                </Trow>
              </tbody>
            </Table>
          </Section>

          <Section id="keymap-view">
            <Subtitle>キーマップ表示モード(ベータ)：</Subtitle>
            <Image src={`${import.meta.env.BASE_URL}img/readme_keymap_view.jpg`} alt="TBTUNE" style={{ width: '300px' }} />
            <p>JIS配列のキーコードに対応した文字や記号をディスプレイに表示します。</p>
            <p>レイヤー切り替え時は切り替えたレイヤーのキーコードが表示されます。</p>
            <p>※ファームウェアに登録のないキーコードは表示されません。</p>
          </Section>

          <Section id="firmware-update">
            <Subtitle>ファームウェアの更新</Subtitle>
            <ol>
              <li>本体背面のUSB差し込み口隣にあるボタンをダブルクリックします。</li>
              <li>エクスプローラが立ち上がるので、UF2ファイルをドラッグ&ドロップします。</li>
            </ol>
            <img src={`${import.meta.env.BASE_URL}img/build_10_01.jpg`} alt="Build 10 01" style={{ width: '500px' }} />
          </Section>

          <Section id="support">
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
        </Main>
      </Content>
    </Container>
  );
};

export default UsageGuideVer010000;

const Container = styled.div`
  /* はみ出し根絶：パディング込みの幅計算を全子孫に継承 */
  box-sizing: border-box;
  & *,
  & *::before,
  & *::after {
    box-sizing: inherit;
  }
  & * {
    min-width: 0;
  }

  width: min(100%, 1100px);
  margin: 0 auto;
  padding: clamp(10px, 4vw, 24px);

  font-family:
    'Inter',
    'Noto Sans JP',
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
  /* スマホ字を一段小さく */
  font-size: clamp(14px, 1.45vw, 16px);
  line-height: 1.85;

  /* 日本語は自然、長い英数は必ず折り返す */
  word-break: normal;
  overflow-wrap: anywhere;
  line-break: strict;
  text-spacing: ideograph-alpha ideograph-numeric;

  /* すべての <img> を安全に縮小（inline style の width を上書き） */
  img {
    max-width: 100% !important;
    height: auto !important;
    display: block;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* TOC */
const Aside = styled.aside`
  position: sticky;
  top: 72px;
  align-self: start;

  @media (max-width: 900px) {
    position: static;
    width: 100%;
    order: -1; /* スマホで先頭に */
  }
`;

const Main = styled.main`
  min-width: 0;
`;

const Title = styled.h1`
  font-weight: 800;
  margin-bottom: 1.2rem;
  /* スマホで過大にならない */
  font-size: clamp(20px, 5vw, 28px);
`;

const Image = styled.img`
  /* 本コンポーネント経由の画像も確実に縮小 */
  max-width: 100% !important;
  height: auto !important;
  display: block;
`;

const Toc = styled.nav`
  max-width: 100%;
  overflow-x: auto;
`;

const Section = styled.section`
  margin: 2rem 0;
  scroll-margin-top: 5rem;
`;

const Subtitle = styled.h2`
  font-weight: 800;
  margin: 1.4rem 0 0.9rem;
  padding-left: 0.7rem;
  border-left: 6px solid #7c3aed;
  line-height: 1.25;
  /* スマホで少し小さく */
  font-size: clamp(17px, 4.4vw, 23px);
`;

const Subheading = styled.h3`
  font-weight: 700;
  color: #5a5a5a;
  letter-spacing: 0.02em;
  margin: 1rem 0 0.5rem;
  font-size: clamp(14px, 3.6vw, 18px);
`;

const Callout = styled.div`
  border-left: 4px solid #0ea5e9;
  background: #f0f9ff;
  padding: 0.65rem 0.9rem;
  border-radius: 8px;
  margin: 0.65rem 0 0.9rem;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #eee;
  margin: 1rem 0;
`;

const Kbd = styled.kbd`
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-bottom-width: 3px;
  padding: 0 0.35rem;
  border-radius: 6px;
  font-size: 0.9em;
`;

/* === コード：PCは横スクロール、スマホは切り捨て（ページは広げない） === */
const CodeWrapper = styled.div`
  position: relative;
  margin: 0.8rem 0;
  width: 100%;
  overflow: hidden; /* デフォは広げない */

  /* react-code-blocks の最上位div/pre/codeを締め付け */
  & > *,
  pre,
  code,
  pre > code {
    box-sizing: border-box;
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden !important;
    white-space: pre; /* 折り返さず途中で見切れる */
    display: block;
  }

  /* デスクトップは横スクロールを復活 */
  @media (min-width: 721px) {
    overflow-x: auto;
    & > *,
    pre {
      width: max-content !important;
      max-width: none !important;
      overflow: visible !important;
    }
  }

  /* モバイルは文字も少し小さく */
  @media (max-width: 720px) {
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
  &:hover {
    opacity: 0.8;
  }
`;

/* === 表：小画面はテーブル自身の中だけ横スクロール === */
const Table = styled.table`
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

const Thead = styled.thead``;

const Trow = styled.tr`
  &:hover td {
    background: #fafafa;
  }
`;

const Th = styled.th`
  border-bottom: 2px solid #ccc;
  padding: 8px;
  background: #f4f4f4;
  font-weight: 700;
  font-size: 0.95rem;
  white-space: nowrap;
`;

const Td = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 8px;
  vertical-align: top;
  font-size: 0.95rem;
  white-space: nowrap;
`;

const VideoWrap = styled.div`
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
