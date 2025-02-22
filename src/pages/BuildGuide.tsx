import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

/* グローバルスタイル（モノトーンベース） */
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    background-color: #efefef; /* 背景：やや暗めのグレー */
    color: #6a6a6a;           /* テキストは淡いホワイト系にしてコントラスト確保 */
    scroll-behavior: smooth;
  }
`;

/* CollapsibleSection コンポーネント */
interface CollapsibleSectionProps {
  title: string;
  id: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  id,
  defaultOpen = true,
  children,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <SectionWrapper id={id}>
      <CollapsibleHeader onClick={() => setOpen(!open)}>
        <CollapsibleTitle>{title}</CollapsibleTitle>
        <span>{open ? '−' : '+'}</span>
      </CollapsibleHeader>
      <CollapsibleContent open={open}>{children}</CollapsibleContent>
    </SectionWrapper>
  );
};

/* BackToTop コンポーネント */
const BackToTop: React.FC = () => {
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

  return (
    <BackToTopButton
      onClick={scrollToTop}
      visible={visible}
      aria-label="Back to top"
    >
      ↑
    </BackToTopButton>
  );
};

/* スムーススクロール用ハンドラ */
const handleSmoothScroll = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
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
const TableOfContents: React.FC = () => {
  return (
    <TocNav>
      <TocHeading>目次</TocHeading>
      <TocList>
        <TocListItem>
          <TocLink
            href="#キット内容と必要なものの確認"
            onClick={handleSmoothScroll}
          >
            キット内容と必要なものの確認
          </TocLink>
        </TocListItem>
        <TocListItem>
          <TocLink
            href="#トラックボールケースの組み立て"
            onClick={handleSmoothScroll}
          >
            トラックボールケースの組み立て
          </TocLink>
          <TocList>
            <TocListItem>
              <TocLink
                href="#左トラックボールケース"
                onClick={handleSmoothScroll}
              >
                左トラックボールケース
              </TocLink>
            </TocListItem>
            <TocListItem>
              <TocLink
                href="#右トラックボールケース"
                onClick={handleSmoothScroll}
              >
                右トラックボールケース
              </TocLink>
            </TocListItem>
          </TocList>
        </TocListItem>
        <TocListItem>
          <TocLink href="#はんだ付け" onClick={handleSmoothScroll}>
            はんだ付け
          </TocLink>
          <TocList>
            <TocListItem>
              <TocLink
                href="#ダイオード、ソケット、リセットスイッチ、L字ピンヘッダのはんだ付け"
                onClick={handleSmoothScroll}
              >
                ダイオード、ソケット、リセットスイッチ、L字ピンヘッダのはんだ付け
              </TocLink>
            </TocListItem>
            <TocListItem>
              <TocLink
                href="#マイコンのはんだ付け"
                onClick={handleSmoothScroll}
              >
                マイコンのはんだ付け
              </TocLink>
            </TocListItem>
            <TocListItem>
              <TocLink
                href="#センサーのはんだ付け"
                onClick={handleSmoothScroll}
              >
                センサーのはんだ付け
              </TocLink>
            </TocListItem>
            <TocListItem>
              <TocLink
                href="#基板と配線のはんだ付け"
                onClick={handleSmoothScroll}
              >
                基板と配線のはんだ付け
              </TocLink>
            </TocListItem>
          </TocList>
        </TocListItem>
        <TocListItem>
          <TocLink href="#組み立て" onClick={handleSmoothScroll}>
            組み立て
          </TocLink>
          <TocList>
            <TocListItem>
              <TocLink
                href="#タッチディスプレイの取り付け"
                onClick={handleSmoothScroll}
              >
                タッチディスプレイの取り付け
              </TocLink>
            </TocListItem>
            <TocListItem>
              <TocLink href="#基板のテスト" onClick={handleSmoothScroll}>
                基板のテスト
              </TocLink>
            </TocListItem>
            <TocListItem>
              <TocLink href="#本体の組み立て" onClick={handleSmoothScroll}>
                本体の組み立て
              </TocLink>
            </TocListItem>
          </TocList>
        </TocListItem>
        <TocListItem>
          <TocLink href="#完成" onClick={handleSmoothScroll}>
            完成
          </TocLink>
        </TocListItem>
        <TocListItem>
          <TocLink href="#最後に" onClick={handleSmoothScroll}>
            最後に
          </TocLink>
        </TocListItem>
      </TocList>
    </TocNav>
  );
};

/* BuildGuide コンポーネント */
const BuildGuide: React.FC = () => {
  return (
    <BuildGuideContainer>
      <GlobalStyle />

      {/* ヘッダー */}
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderImage src="${import.meta.env.BASE_URL}img/readme_top.jpg" alt="Readme Top" />
          <TextContainer>omni CS build guide</TextContainer>
        </HeaderContainer>
      </HeaderWrapper>

      <ContentContainer>
        {/* サイドバー：目次 */}
        <Aside>
          <TableOfContents />
        </Aside>

        {/* メインコンテンツ */}
        <MainContent>
          {/* 1. キット内容と必要なものの確認 */}
          <CollapsibleSection
            title="キット内容と必要なものの確認"
            id="キット内容と必要なものの確認"
          >
            <SectionHeading>キット内容</SectionHeading>
            <StyledTableWrapper>
              <StyledTable>
                <thead>
                  <tr>
                    <StyledTh>No.</StyledTh>
                    <StyledTh>部品名</StyledTh>
                    <StyledTh>数量</StyledTh>
                    <StyledTh>備考</StyledTh>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <StyledTd>1</StyledTd>
                    <StyledTd>メイン基板</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>2</StyledTd>
                    <StyledTd>トラボ基板</StyledTd>
                    <StyledTd>2個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>3</StyledTd>
                    <StyledTd>メインケース</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>4</StyledTd>
                    <StyledTd>ボトムプレート</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>5</StyledTd>
                    <StyledTd>トラボケース(右)</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>6</StyledTd>
                    <StyledTd>トラボケース(左)</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>7</StyledTd>
                    <StyledTd>メインPCBベース(右)</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>8</StyledTd>
                    <StyledTd>メインPCBベース(左)</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>9</StyledTd>
                    <StyledTd>トラボPCBベース(右)</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>10</StyledTd>
                    <StyledTd>トラボPCBベース(左)</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>11</StyledTd>
                    <StyledTd>アジャスタ</StyledTd>
                    <StyledTd>2個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>12</StyledTd>
                    <StyledTd>アジャスタベース</StyledTd>
                    <StyledTd>2個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>13</StyledTd>
                    <StyledTd>ゴム脚</StyledTd>
                    <StyledTd>4個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>14</StyledTd>
                    <StyledTd>配線</StyledTd>
                    <StyledTd>一式</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>15</StyledTd>
                    <StyledTd>ベアリングユニット</StyledTd>
                    <StyledTd>3個</StyledTd>
                    <StyledTd>
                      トラボケース(右)に組み込み済みの場合があります。
                    </StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>16</StyledTd>
                    <StyledTd>支持球</StyledTd>
                    <StyledTd>3個</StyledTd>
                    <StyledTd>
                      トラボケース(左)に組み込み済みの場合があります。
                    </StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>17</StyledTd>
                    <StyledTd>マウスセンサー(PMW3360)</StyledTd>
                    <StyledTd>2個</StyledTd>
                    <StyledTd>組み込み済みの場合があります。</StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>18</StyledTd>
                    <StyledTd>ソケット</StyledTd>
                    <StyledTd>47個</StyledTd>
                    <StyledTd>組み込み済みの場合があります。</StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>19</StyledTd>
                    <StyledTd>ダイオード</StyledTd>
                    <StyledTd>53個</StyledTd>
                    <StyledTd>組み込み済みの場合があります。</StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>20</StyledTd>
                    <StyledTd>L字ピンヘッダ(13ピン)</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd>組み込み済みの場合があります。</StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>21</StyledTd>
                    <StyledTd>樹脂用タッピングねじM2.6</StyledTd>
                    <StyledTd>40個</StyledTd>
                    <StyledTd>3Dプリント品締結用</StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>22</StyledTd>
                    <StyledTd>樹脂用タッピングねじM2</StyledTd>
                    <StyledTd>12個</StyledTd>
                    <StyledTd>メイン基板、トラボ基板用</StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>23</StyledTd>
                    <StyledTd>ねじM2</StyledTd>
                    <StyledTd>4本</StyledTd>
                    <StyledTd>タッチディスプレイ用</StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>24</StyledTd>
                    <StyledTd>リセットスイッチ</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd>組み込み済みの場合があります。</StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>-</StyledTd>
                    <StyledTd>25mmPOM球(黒)</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                </tbody>
              </StyledTable>
            </StyledTableWrapper>

            <SectionHeading>別途購入が必要な部品</SectionHeading>
            <StyledTableWrapper>
              <StyledTable>
                <thead>
                  <tr>
                    <StyledTh>No.</StyledTh>
                    <StyledTh>部品名</StyledTh>
                    <StyledTh>数量</StyledTh>
                    <StyledTh>備考</StyledTh>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <StyledTd>25</StyledTd>
                    <StyledTd>Raspberry Pi Pico</StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>26</StyledTd>
                    <StyledTd>ピンヘッダ 1x20(高さ2.5mm)</StyledTd>
                    <StyledTd>2個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>27</StyledTd>
                    <StyledTd>
                      1.28インチ円形タッチスクリーンディスプレイ (WaveShare)
                    </StyledTd>
                    <StyledTd>1個</StyledTd>
                    <StyledTd>
                      <a
                        href="https://www.waveshare.com/1.28inch-Touch-LCD.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#a9a9a9', textDecoration: 'none' }}
                      >
                        リンク
                      </a>
                    </StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>-</StyledTd>
                    <StyledTd>キースイッチ</StyledTd>
                    <StyledTd>47個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>-</StyledTd>
                    <StyledTd>キーキャップ</StyledTd>
                    <StyledTd>1U:46個、1～1.5U:1個</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>-</StyledTd>
                    <StyledTd>トラックボール</StyledTd>
                    <StyledTd>44mm(34mmOPの場合は34mm)</StyledTd>
                    <StyledTd>
                      44mmはProtoArc EM03、ELECOM DEFT
                      PROから部品取り、または海外通販サイトで購入可能です。
                    </StyledTd>
                  </tr>
                </tbody>
              </StyledTable>
            </StyledTableWrapper>

            <SectionHeading>工具、その他</SectionHeading>
            <StyledTableWrapper>
              <StyledTable>
                <thead>
                  <tr>
                    <StyledTh>工具名</StyledTh>
                    <StyledTh>数量</StyledTh>
                    <StyledTh>備考</StyledTh>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <StyledTd>はんだ</StyledTd>
                    <StyledTd>適量</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>はんだごて</StyledTd>
                    <StyledTd>-</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>マスキングテープ</StyledTd>
                    <StyledTd>-</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>カッター</StyledTd>
                    <StyledTd>-</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>ニッパー</StyledTd>
                    <StyledTd>-</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>ワイヤーストリッパー</StyledTd>
                    <StyledTd>-</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>接着剤(エポキシ系2液混合タイプ)</StyledTd>
                    <StyledTd>-</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                  <tr>
                    <StyledTd>プラスドライバー(#0, #1)</StyledTd>
                    <StyledTd>-</StyledTd>
                    <StyledTd></StyledTd>
                  </tr>
                </tbody>
              </StyledTable>
            </StyledTableWrapper>

            <HorizontalScrollContainer>
              <img
                src="${import.meta.env.BASE_URL}img/build_02_01.jpg"
                alt="Build 02 01"
                style={{ width: '600px' }}
              />
              <img
                src="${import.meta.env.BASE_URL}img/build_02_02.jpg"
                alt="Build 02 02"
                style={{ width: '600px' }}
              />
            </HorizontalScrollContainer>
          </CollapsibleSection>

          {/* 2. トラックボールケースの組み立て */}
          <CollapsibleSection
            title="トラックボールケースの組み立て"
            id="トラックボールケースの組み立て"
          >
            {/* 2-1. 左トラックボールケース */}
            <SectionContainer id="左トラックボールケース">
              <SectionHeading>左トラックボールケース</SectionHeading>
              <p>
                エポキシ系の接着剤でトラックボールケースに支持球を接着します。
              </p>
              <OrderedList>
                <li>接着剤を爪楊枝などで混ぜます。</li>
                <li>
                  トラックボールケースのくぼみ3か所に少量塗布します。
                  <FlexWrap>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_03_01.jpg"
                      alt="Build 03 01"
                      style={{ width: '300px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_03_02.jpg"
                      alt="Build 03 02"
                      style={{ width: '169px' }}
                    />
                  </FlexWrap>
                </li>
                <li>ピンセットなどで支持球をくぼみに入れます。</li>
                <li>
                  軽く指の腹で押え、支持球の浮きがないようにします。
                  <FlexWrap>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_03_03.jpg"
                      alt="Build 03 03"
                      style={{ width: '300px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_03_04.jpg"
                      alt="Build 03 04"
                      style={{ width: '300px' }}
                    />
                  </FlexWrap>
                </li>
              </OrderedList>
            </SectionContainer>

            {/* 2-2. 右トラックボールケース */}
            <SectionContainer id="右トラックボールケース">
              <SectionHeading>右トラックボールケース</SectionHeading>
              <p>ベアリングユニットをトラックボールケースに取り付けます。</p>
              <OrderedList>
                <li>
                  ケースのベアリング挿入部に不要な塗膜がついていないか確認します。塗装がついている場合は、ドライバーや細いやすりで除去してください。
                </li>
                <li>
                  ベアリングユニットをケースに乗せ、軸を押し込みます。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_04_01.jpg"
                      alt="Build 04 01"
                      style={{ width: '300px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_04_02.jpg"
                      alt="Build 04 02"
                      style={{ width: '300px' }}
                    />
                  </HorizontalScrollContainer>
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_04_03.jpg"
                      alt="Build 04 03"
                      style={{ width: '300px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_04_04.jpg"
                      alt="Build 04 04"
                      style={{ width: '300px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
              </OrderedList>
            </SectionContainer>
          </CollapsibleSection>

          {/* 3. はんだ付け */}
          <CollapsibleSection title="はんだ付け" id="はんだ付け">
            <AlertGray>
              <p>
                <strong>TIP:</strong>{' '}
                はんだ付けが初めての場合は、事前にネットショップなどで販売している練習キットで練習しておくことをお勧めします。
                <br />
                スルーホールのはんだ付け、SMD(表面実装)のはんだ付けを出来るようにしてから組み立てを行うことを推奨します。
                <br />
                スルーホールのはんだ付け後、飛び出した部分をカットする工程がありますが、カット後に再度コテをあて、はんだを溶かすことで、内部応力を除去することを推奨します。
                <br />
                (この作業は必須ではありません。長期的に使用した場合に、はんだが割れるリスクが下がります。)
              </p>
            </AlertGray>

            {/* 3-1. ダイオード、ソケット、リセットスイッチ、L字ピンヘッダのはんだ付け */}
            <SectionContainer id="ダイオード、ソケット、リセットスイッチ、L字ピンヘッダのはんだ付け">
              <SectionHeading>
                ダイオード、ソケット、リセットスイッチ、L字ピンヘッダのはんだ付け
              </SectionHeading>
              <p>
                ※この項目はPCBAによりあらかじめ取り付け済みの場合があります。
                <br />
                その場合は該当箇所を飛ばして進めてください。
              </p>
              <OrderedList>
                <li>
                  全てのダイオードとソケット取り付け部の片側に予備はんだをします。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_05_02.jpg"
                      alt="Build 05 02"
                      style={{ width: '300px' }}
                    />
                  </FlexCenter>
                </li>
                <li>
                  ダイオードとシルクが図の向きになるように置き、ピンセットでダイオードを押えながら予備はんだしたところにはんだ付けします。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_05_01.jpg"
                      alt="Build 05 01"
                      style={{ width: '300px' }}
                    />
                  </FlexCenter>
                </li>
                <li>
                  全てのダイオードの片側をはんだ付けしたら、各ダイオードの反対側にもはんだ付けをします。
                  <AlertGrayWarning>
                    <p>
                      <strong>WARNING:</strong>{' '}
                      ダイオードの向きに注意してください。ダイオードには極性があり、向きを間違えると正常に動作しません。
                      <br />
                      基板のシルクの切り欠き(コ)に合わせ図の様に配置してください。
                    </p>
                    <FlexCenter>
                      <img
                        src="${import.meta.env.BASE_URL}img/build_05_03.jpg"
                        alt="Build 05 03"
                        style={{ width: '300px' }}
                      />
                    </FlexCenter>
                  </AlertGrayWarning>
                </li>
                <li>
                  同じ要領でソケットをはんだ付けします。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_05_05.jpg"
                      alt="Build 05 05"
                      style={{ width: '300px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_05_06.jpg"
                      alt="Build 05 06"
                      style={{ width: '300px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>
                  リセットスイッチを裏側から入れ、表側からはんだ付けします。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_05_10.jpg"
                      alt="Build 05 10"
                      style={{ width: '300px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_05_11.jpg"
                      alt="Build 05 11"
                      style={{ width: '300px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>L字ピンヘッダをはんだ付けします。</li>
                <li>
                  裏側からL字ピンヘッダ差し込み、傾かないようにディスプレイのQIコネクタを両端にさしマスキングテープで固定します。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_05_07.jpg"
                      alt="Build 05 07"
                      style={{ width: '300px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_05_08.jpg"
                      alt="Build 05 08"
                      style={{ width: '300px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>
                  表側からはんだ付けします。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_05_09.jpg"
                      alt="Build 05 09"
                      style={{ width: '300px' }}
                    />
                  </FlexCenter>
                </li>
              </OrderedList>
            </SectionContainer>

            {/* 3-2. マイコンのはんだ付け */}
            <SectionContainer id="マイコンのはんだ付け">
              <SectionHeading>マイコンのはんだ付け</SectionHeading>
              <OrderedList>
                <li>
                  基板裏側に1x20のピンヘッダを2つ載せ、その上にRaspberry Pi
                  Picoを載せます。
                  <br />
                  この時に基板表側へのピンの飛び出しが小さくなるようにしてください。
                  <br />
                  (飛び出しが大きい場合はカットして下さい。基板側1mm以下、Pico側3mm以下にしてください。)
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_06_01.jpg"
                      alt="Build 06 01"
                      style={{ width: '300px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_06_02.jpg"
                      alt="Build 06 02"
                      style={{ width: '300px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>
                  基板側とPico側が浮かないようにはんだ付けを行います。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_06_03.jpg"
                      alt="Build 06 03"
                      style={{ width: '300px' }}
                    />
                  </FlexCenter>
                </li>
              </OrderedList>
              <AlertGrayNote>
                <p>
                  <strong>NOTE:</strong>{' '}
                  まずは1箇所はんだ付けし、Picoを押えながら今付けた箇所に再度はんだごてを当て溶かすと密着させやすいです。
                  <br />
                  最初の数か所は順に上記手順を実行することで、Pico、基板がソケットに密着します。
                </p>
              </AlertGrayNote>
            </SectionContainer>

            {/* 3-3. センサーのはんだ付け */}
            <SectionContainer id="センサーのはんだ付け">
              <SectionHeading>センサーのはんだ付け</SectionHeading>
              <p>
                ※PMW3360はあらかじめ取り付け済みの場合があります。
                <br />
                その場合は該当箇所を飛ばして進めてください。
              </p>
              <OrderedList>
                <li>トラボ基板にPMW3360をはんだ付けします。</li>
                <li>
                  向きに注意してください。
                  <br />
                  センサーの白丸があるところが、基板シルクのC13側になるようセンサーを取り付けます。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_07_01.jpg"
                      alt="Build 07 01"
                      style={{ width: '300px' }}
                    />
                  </FlexCenter>
                </li>
                <li>
                  浮きがないようにマスキングテープなどで仮固定し、はんだ付けを行います。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_07_02.jpg"
                      alt="Build 07 02"
                      style={{ width: '300px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_07_03.jpg"
                      alt="Build 07 03"
                      style={{ width: '300px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>マスキングテープを剥がします。</li>
              </OrderedList>
            </SectionContainer>

            {/* 3-4. 基板と配線のはんだ付け */}
            <SectionContainer id="基板と配線のはんだ付け">
              <SectionHeading>基板と配線のはんだ付け</SectionHeading>
              <OrderedList>
                <li>
                  配線の被覆を5mm程度向き、予備はんだをしておきます。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_08_01.jpg"
                      alt="Build 08 01"
                      style={{ width: '300px' }}
                    />
                  </FlexCenter>
                </li>
                <li>
                  トラボ基板とメイン基板の配線の対応は下図のようになります。
                  <br />
                  下図でみえている側から差し込み、反対側からはんだ付けしていきます。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_08_05.jpg"
                      alt="Build 08 05"
                      style={{ width: '300px' }}
                    />
                  </FlexCenter>
                  <StyledTableWrapper>
                    <StyledTable>
                      <thead>
                        <tr>
                          <StyledTh>配線長さ(mm)</StyledTh>
                          <StyledTh>右用(図では左側)</StyledTh>
                          <StyledTh>左用(図では右側)</StyledTh>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <StyledTd>黒</StyledTd>
                          <StyledTd>230</StyledTd>
                          <StyledTd>270</StyledTd>
                        </tr>
                        <tr>
                          <StyledTd>赤</StyledTd>
                          <StyledTd>230</StyledTd>
                          <StyledTd>265</StyledTd>
                        </tr>
                        <tr>
                          <StyledTd>白</StyledTd>
                          <StyledTd>235</StyledTd>
                          <StyledTd>260</StyledTd>
                        </tr>
                        <tr>
                          <StyledTd>黄</StyledTd>
                          <StyledTd>235</StyledTd>
                          <StyledTd>255</StyledTd>
                        </tr>
                        <tr>
                          <StyledTd>青</StyledTd>
                          <StyledTd>240</StyledTd>
                          <StyledTd>250</StyledTd>
                        </tr>
                        <tr>
                          <StyledTd>緑</StyledTd>
                          <StyledTd>240</StyledTd>
                          <StyledTd>245</StyledTd>
                        </tr>
                      </tbody>
                    </StyledTable>
                  </StyledTableWrapper>
                </li>
                <li>
                  トラボ基板に配線を差し込み、マスキングテープで仮止めし、はんだ付けします。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_08_02.jpg"
                      alt="Build 08 02"
                      style={{ width: '300px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_08_03.jpg"
                      alt="Build 08 03"
                      style={{ width: '300px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>
                  メイン基板も同様に配線を差し込みはんだ付けします。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_08_06.jpg"
                      alt="Build 08 06"
                      style={{ width: '300px' }}
                    />
                  </FlexCenter>
                </li>
                <li>
                  はんだ付け後先端の余分に飛び出している部分はカットします。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_08_04.jpg"
                      alt="Build 08 04"
                      style={{ width: '300px' }}
                    />
                  </FlexCenter>
                </li>
              </OrderedList>
            </SectionContainer>
          </CollapsibleSection>

          {/* 4. 組み立て */}
          <CollapsibleSection title="組み立て" id="組み立て">
            {/* 4-1. タッチディスプレイの取り付け */}
            <SectionContainer id="タッチディスプレイの取り付け">
              <SectionHeading>タッチディスプレイの取り付け</SectionHeading>
              <OrderedList>
                <li>
                  L字ピンヘッダにQIコネクタを差し込み、基板の穴からコネクタを表側に出します。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_09_01.jpg"
                      alt="Build 09 01"
                      style={{ width: '200px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_09_02.jpg"
                      alt="Build 09 02"
                      style={{ width: '200px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_09_03.jpg"
                      alt="Build 09 03"
                      style={{ width: '200px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>
                  タッチディスプレイとコネクタを接続します。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_09_04.jpg"
                      alt="Build 09 04"
                      style={{ width: '200px' }}
                    />
                  </FlexCenter>
                </li>
                <li>
                  基板、スペーサ、タッチディスプレイをM2のネジで固定します。
                  タッチディスプレイのネジ穴がシールで保護されている場合は取り付け前に剥がしてください。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_09_05.jpg"
                      alt="Build 09 05"
                      style={{ width: '200px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_09_06.jpg"
                      alt="Build 09 06"
                      style={{ width: '200px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_09_07.jpg"
                      alt="Build 09 07"
                      style={{ width: '200px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_09_08.jpg"
                      alt="Build 09 08"
                      style={{ width: '400px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
              </OrderedList>
            </SectionContainer>

            {/* 4-2. 基板のテスト */}
            <SectionContainer id="基板のテスト">
              <SectionHeading>基板のテスト</SectionHeading>
              <OrderedList>
                <li>
                  <a
                    href="../build"
                    style={{ color: '#a9a9a9', textDecoration: 'none' }}
                  >
                    こちら
                  </a>
                  からomni_cs_00_00_00_vial.uf2のfirmwareをダウンロードします。(数値部分はバージョンによって異なります)
                </li>
                <li>
                  Raspberry Pi Picoのbootボタンを押しながらUSBにさします。
                </li>
                <li>
                  下図の画面が立ち上がったら、ダウンロードしたfirmwareをドラッグアンドドロップで移します。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_10_01.jpg"
                      alt="Build 10 01"
                      style={{ width: '500px' }}
                    />
                  </FlexCenter>
                </li>
              </OrderedList>
              <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>確認項目</p>
              <UnorderedList>
                <li>ディスプレイが表示されているか</li>
                <li>スワイプや長押し(3秒以上)が反応するか</li>
                <li>
                  レンズがついた状態でトラックボールセンサーが反応するか(指でなぞりカーソル、スクロールが動くか)
                </li>
                <li>
                  キースイッチが反応するか(各キーのピンをピンセットなどで触り導通させてください。)
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/readme_layer.gif"
                      alt="Readme Layer"
                      style={{ width: '300px' }}
                    />
                  </FlexCenter>
                </li>
              </UnorderedList>
            </SectionContainer>

            {/* 4-3. 本体の組み立て */}
            <SectionContainer id="本体の組み立て">
              <SectionHeading>本体の組み立て</SectionHeading>
              <OrderedList>
                <li>
                  PCBベースに基板を仮止めします。(一度締結した後に1/4回転程度ネジを戻してください。)
                  PCBベースLRに2カ所ずつ突起があるので、基板の位置決め穴に合わせてください。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_01.jpg"
                      alt="Build 12 01"
                      style={{ width: '400px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_02.jpg"
                      alt="Build 12 02"
                      style={{ width: '400px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>
                  トラボ基板とトラボPCBベースをネジで固定した後、配線を固定します。
                  <br />
                  トラボPCBベースは角度が垂直に近い方が左手用(25mm用)になります。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_03.jpg"
                      alt="Build 12 03"
                      style={{ width: '400px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_04.jpg"
                      alt="Build 12 04"
                      style={{ width: '400px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>
                  タッチディスプレイの配線はマスキングテープで止め、センサーの配線をPCBベースに沿わせて固定します。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_05.jpg"
                      alt="Build 12 05"
                      style={{ width: '400px' }}
                    />
                  </FlexCenter>
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_06.jpg"
                      alt="Build 12 06"
                      style={{ width: '400px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_07.jpg"
                      alt="Build 12 07"
                      style={{ width: '400px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>
                  PCBベースとボトムプレートを仮止めします(一度締結した後に1/4回転程度ネジを戻してください。)。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_08.jpg"
                      alt="Build 12 08"
                      style={{ width: '400px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_09.jpg"
                      alt="Build 12 09"
                      style={{ width: '400px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>
                  先ほど仮止めした基板とPCBベースのネジを締めて固定します。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_02.jpg"
                      alt="Build 12 02"
                      style={{ width: '400px' }}
                    />
                  </FlexCenter>
                </li>
                <li>
                  ボトムプレートにトラボPCBベースを取り付けます。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_10.jpg"
                      alt="Build 12 10"
                      style={{ width: '400px' }}
                    />
                  </FlexCenter>
                </li>
                <li>
                  タッチディスプレイの保護シールを剥がし、メインケースをボトムプレートに載せます。
                  <br />
                  三枚目のように奥側から入れると取り付けやすいです。
                  <HorizontalScrollContainer>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_11.jpg"
                      alt="Build 12 11"
                      style={{ width: '400px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_13.jpg"
                      alt="Build 12 13"
                      style={{ width: '400px' }}
                    />
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_12.jpg"
                      alt="Build 12 12"
                      style={{ width: '180px' }}
                    />
                  </HorizontalScrollContainer>
                </li>
                <li>
                  両端の4箇所にキースイッチを入れます。
                  <br />
                  ※基板が少し動く状態でスイッチでPCBとメインケースの位置合わせをしています。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_14.jpg"
                      alt="Build 12 14"
                      style={{ width: '400px' }}
                    />
                  </FlexCenter>
                </li>
                <li>
                  ボトムプレートにボールケースを載せます。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_15.jpg"
                      alt="Build 12 15"
                      style={{ width: '400px' }}
                    />
                  </FlexCenter>
                </li>
                <li>
                  メインケース、ボールケースにM2.6のネジ取り付け、仮止めしていたネジを全て締めます。
                  <br />
                  その後、アジャスター、ゴム脚を付けます。
                  <br />
                  赤丸部はネジを取り付けてください。
                  <br />
                  その他の穴はボトムプレートとの間に隙間がある場合など、気になる場合は取り付けてください。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/build_12_16.jpg"
                      alt="Build 12 16"
                      style={{ width: '400px' }}
                    />
                  </FlexCenter>
                </li>
                <li>
                  残りのキースイッチ、キーキャップ、トラックボールを取り付けます。
                  <FlexCenter>
                    <img
                      src="${import.meta.env.BASE_URL}img/readme_top.jpg"
                      alt="Readme Top"
                      style={{
                        width: '100%',
                        maxWidth: '400px',
                        borderRadius: '0.375rem',
                      }}
                    />
                  </FlexCenter>
                </li>
              </OrderedList>
            </SectionContainer>
          </CollapsibleSection>

          {/* 5. 完成 */}
          <CollapsibleSection title="完成" id="完成">
            <p>
              組み立てお疲れさまでした。
              <br />
              これでomni CSの完成になります。
              <br />
              使い方は
              <a
                href="../readme.md"
                style={{ color: '#a9a9a9', textDecoration: 'none' }}
              >
                readme
              </a>
              をご確認ください。
            </p>
          </CollapsibleSection>

          {/* 6. 最後に */}
          <CollapsibleSection title="最後に" id="最後に">
            <p>
              もしよろしければ、完成品を
              <a
                href="https://x.com/home"
                style={{ color: '#a9a9a9', textDecoration: 'none' }}
              >
                X
              </a>
              などのSNSにハッシュタグ<code>#omni_kbd</code>
              を付けて投稿いただけるとうれしいです。
              <br />
              また、サポートが必要な場合やご意見などありましたら、ディスコードのコミュニティまでご連絡下さい。
            </p>
          </CollapsibleSection>
        </MainContent>
      </ContentContainer>

      <BackToTop />
    </BuildGuideContainer>
  );
};

export default BuildGuide;

/* 全体レイアウト */
const BuildGuideContainer = styled.div`
  min-height: 100vh;
  background-color: transparent; /* 背景はグローバルスタイルで統一 */
`;

/* ヘッダー */
const HeaderWrapper = styled.header`
  /* background-color: #6a6a6a;  */
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); */
  margin-bottom: 1rem;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const HeaderImage = styled.img`
  width: 10rem;
  border-radius: 0.375rem;
  @media (min-width: 450px) {
    width: 24rem;
  }
`;

const TextContainer = styled.div`
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
const ContentContainer = styled.div`
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

const Aside = styled.aside`
  width: 100%;
  margin-bottom: 2rem;
  @media (min-width: 450px) {
    width: 25%;
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
`;

const MainContent = styled.main`
  width: 100%;
  @media (min-width: 450px) {
    width: 75%;
  }
`;

const TocNav = styled.nav`
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

const TocHeading = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #6a6a6a;
`;

const TocList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TocListItem = styled.li`
  margin-bottom: 0.5rem;
  ul {
    margin-left: 1rem;
    list-style: disc;
  }
`;

const TocLink = styled.a`
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
const SectionWrapper = styled.section`
  margin-bottom: 3rem;
  border: 1px solid #3a3a3a;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
`;

const CollapsibleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6e6e6;
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
`;

const CollapsibleTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

const CollapsibleContent = styled.div<{ open: boolean }>`
  padding: ${({ open }) => (open ? '1rem' : '0 1rem')};
  transition: all 0.3s;
  max-height: ${({ open }) => (open ? '200000px' : '0')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  overflow: hidden;
`;

/* BackToTop ボタン */
const BackToTopButton = styled.button<{ visible: boolean }>`
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
const StyledTableWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 0.1rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #444;
`;

const StyledTh = styled.th`
  border: 1px solid #444;
  padding: 0.5rem;
  background-color: #efefef;
  color: #6a6a6a;
`;

const StyledTd = styled.td`
  border: 1px solid #444;
  padding: 0.1rem 0.5rem;
  color: #6a6a6a;
  font-size: 0.8rem;
`;

/* アラート（モノトーン版） */
const AlertGray = styled.div`
  background-color: #efefef;
  border-left: 4px solid #666;
  color: #6a6a6a;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const AlertGrayWarning = styled(AlertGray)`
  border-left-color: #888;
`;

const AlertGrayNote = styled(AlertGray)`
  border-left-color: #555;
`;

/* リスト */
const OrderedList = styled.ol`
  list-style-type: decimal;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  li {
    margin-bottom: 0.5rem;
  }
`;

const UnorderedList = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  li {
    margin-bottom: 0.5rem;
  }
`;

/* 画像等のフレックスコンテナ */
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const FlexCenter = styled.div`
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
const SectionContainer = styled.section`
  margin-bottom: 2rem;
`;

/* セクション見出し */
const SectionHeading = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #6a6a6a;
`;

const HorizontalScrollContainer = styled.div`
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
