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

const go = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};



const UsageGuide: React.FC = () => {
  return (
    <Container>
      <Title>omni kbd 使い方</Title>

      <Content>
        {/* 左サイドバー（TOC） */}
        <Aside>
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
                <a href="#swipe" onClick={go('swipe')}>
                  スワイプジェスチャー(β)
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
              で変更できます。 Vialの基本的な使い方については、
              <a href="https://get.vial.today/manual/layers.html" target="_blank" rel="noreferrer">
                <strong>公式サイト</strong>
              </a>
              やブログ記事を参考にしてください。
            </p>
            <Image src={`${import.meta.env.BASE_URL}img/readme_vial_allkeymap.jpg`} alt="Vial キーマップ" />
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
            <p>omni kbdをカスタマイズするためのキーコードが設定されています。</p>
            <p>画像下段の「User」タブから選択することが出来ます。。</p>
            <Image src={`${import.meta.env.BASE_URL}img/readme_custom_keycode.jpg`} alt="カスタムキーコード" />
            <ol>
              <li>ディスプレイ切替：TcKey、TbTun、Swget、KeyMp、Stat1でタッチディスプレイが切り替わります。</li>
              <li>ディスプレイの色変更：〇〇H、S、V、の値を±することで特定のモードで画面や文字の色を変更できます。</li>
              <li>右手ボールスクロール：TbrCgを押している間右トラックボールでスクロールできます。</li>
              {/* <li>オートマウスレイヤー：AmlTgで有効/無効を切り替えます。</li> */}
            </ol>
          </Section>

          <Section id="touch-display">
            <Subtitle>タッチディスプレイ</Subtitle>
            <p>タッチディスプレイは設定されたカスタムキーコードを押下することで切り替わります。</p>
            <p>初期状態ではレイヤー4の右手側上段に設定されています。</p>
            <ol>
              <li>タッチキーモード：円周上に配置されたボタンをタッチすることでコマンドを実行します。</li>
              <li>トラックボールチューニングモード：トラックボールの動きを調整することが出来ます。</li>
              <li>スワイプジェスチャーモード(ベータ)：スワイプすることで、コマンドを実行します。</li>
              <li>キーマップ表示モード(ベータ)：JIS配列のキーコードに対応した文字や記号をディスプレイに表示します。</li>
              <li>ステータス管理モード：OS自動検出/デフォルトレイヤー/高精度スクロール/スクロール方向/AML/タッチ感度の設定が出来ます。</li>
            </ol>
          </Section>

          <Section id="touch-key-mode">
            <Subtitle>タッチキーモード</Subtitle>
            <p>
              アイコンとキー入力を登録できます。<br />
              ※タッチキーはレイヤーキーが押されていない状態で使用してください。<br />
              レイヤー0と1にはそれぞれ別のタッチキーマップを登録できます。Win/Macでコマンドが異なる場合に便利です。
            </p>

            <Image src={`${import.meta.env.BASE_URL}img/readme_vial_touchkeymap.jpg`} alt="タッチキーマップ" />
            <Image src={`${import.meta.env.BASE_URL}img/readme_icon_change.gif`} alt="アイコン変更" style={{ width: '300px' }} />
            <ol>
              <li>layer0 に入力したいキーを設定します。</li>
              <li>この時にマクロボタンを登録することで、様々な機能を付与することができます。</li>
              <li>layer2 で呼び出すアイコンを設定します。</li>
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
            <Subtitle>ステータス管理モード：</Subtitle>
            <Image src={`${import.meta.env.BASE_URL}img/readme_status1.jpg`} alt="TBTUNE" style={{ width: '300px' }} />
            <p>
              omni kbdのステータスを管理します。
              <br />
              タッチ操作でON/OFFを切り替えられます。
              <br />
              ON時にバーが出る項目はバーをタッチすることでパラメータの調整が出来ます。
            </p>
            <Table>
              <Thead>
                <Trow>
                  <Th>表示</Th>
                  <Th>パラメータ</Th>
                  <Th>概要</Th>
                  <Th>説明</Th>
                </Trow>
              </Thead>
              <tbody>
                <Trow>
                  <Td>OS</Td>
                  <Td>―</Td>
                  <Td>OS自動検出</Td>
                  <Td>
                    Win / Mac を自動検出し設定を切り替えます。 <br />
                  </Td>
                </Trow>
                <Trow>
                  <Td>Win/Mac/Bas/Sub</Td>
                  <Td>―</Td>
                  <Td>デフォルトレイヤー表示</Td>
                  <Td>
                    デフォルトレイヤーの状態を表示します。 <br />
                    自動検出ON：Win/Macが表示されます。 <br />
                    自動検出OFF：Bas/Subを切り替えできます。
                  </Td>
                </Trow>
                <Trow>
                  <Td>HRV</Td>
                  <Td>RES, VAL</Td>
                  <Td>高精度スクロール（垂直）</Td>
                  <Td>
                    垂直方向の高精度スクロールを有効にします。 <br />
                    RES：レポート送信頻度を変更します。 <br />
                    VAL：送信値を調整します。 <br />
                    ※挙動が不安定な場合RESを大きくしてください。
                  </Td>
                </Trow>
                <Trow>
                  <Td>HRH</Td>
                  <Td>RES, VAL</Td>
                  <Td>高精度スクロール（水平）</Td>
                  <Td>
                    水平方向の高精度スクロールを有効にします。 <br />
                    RES：レポート送信頻度を変更します。 <br />
                    VAL：送信値を調整します。 <br />
                    ※挙動が不安定な場合RESを大きくしてください。
                  </Td>
                </Trow>
                <Trow>
                  <Td>SCI</Td>
                  <Td>―</Td>
                  <Td>スクロール方向反転</Td>
                  <Td>スクロール方向を反転します。</Td>
                </Trow>
                <Trow>
                  <Td>AML</Td>
                  <Td>―</Td>
                  <Td>オートマウスレイヤー</Td>
                  <Td>有効／無効を切り替えます。</Td>
                </Trow>
                <Trow>
                  <Td>TRP</Td>
                  <Td>HLD, RPT</Td>
                  <Td>タッチ感度調整</Td>
                  <Td>
                    HLD：連続入力までの遅延時間を設定します。 <br />
                    RPT：2回目以降のリピート間隔を調整します。
                  </Td>
                </Trow>
              </tbody>
            </Table>
            <strong>高精度スクロールの設定</strong> <br />
            HRV/HRHはWindowsとmacOSで挙動が異なります。 <br />
            Bas(Win)はWindow向け、Sub(mac)はmacOS向けの設定になっています。 <br />
            BasでMacを使う場合など、Subの設定を参考に調整してください。
          </Section>

          <Section id="swipe">
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

export default UsageGuide;




const Container = styled.div`
  padding: 2rem;
  max-width: 1100px; 
  margin: auto;
  font-family: 'Inter', sans-serif;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 24px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Aside = styled.aside`
  position: sticky;
  top: 3rem;
  height: max-content;

  @media (max-width: 980px) {
    position: static;
    order: -1;
  }
`;

const Main = styled.main`
  min-width: 0; 
`;


const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;



const Image = styled.img`
  width: 100%;
  max-width: 800px;
  margin-bottom: 1.5rem;
`;



const Toc = styled.nav`
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

const Section = styled.section`
  margin: 2.5rem 0;
  scroll-margin-top: 5rem; 
`;

const Subtitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 800;
  margin: 2rem 0 1rem;
  padding-left: 0.75rem;
  border-left: 6px solid #7c3aed;
  line-height: 1.25;
`;

const Subheading = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #5a5a5a;
  letter-spacing: 0.02em;
  margin: 1.25rem 0 0.5rem;
`;

const Callout = styled.div`
  border-left: 4px solid #0ea5e9;
  background: #f0f9ff;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin: 0.75rem 0 1rem;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #eee;
  margin: 1.25rem 0;
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

// tables
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
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
`;

const Td = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 8px;
  vertical-align: top;
  font-size: 0.95rem;
`;