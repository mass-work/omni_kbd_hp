import React, { useState } from 'react';
import styled from 'styled-components';

/* --- 画像をインポート（例）--- */
import home01 from '../assets/home_01.jpg';
import home02 from '../assets/home_02.jpg';
import home04 from '../assets/home_04.jpg';
import omni_cs_pic from '../assets/omni_cs.jpg';
import omni_orth_pic from '../assets/omni_orth.jpg';

/* 画像配列（枚数は例） */
const images = [home01, home02, home04];

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <HomeContainer>
      {/* フェードスライダー */}

      {/* 紹介文セクション（Home向け） */}
      <IntroSection>
        <IntroTitle>omni kbd</IntroTitle>
        <IntroText>
          omni kbdは、デュアルトラックボールとタッチディスプレイを搭載した40%キーボードの自作キットです。
          <br />
          パソコンへの入力作業を効率化し、快適な作業環境を実現するために開発しました。
        </IntroText>
        <SliderContainer>
          <ArrowButton onClick={prevSlide} style={{ left: '1rem' }}>
            &lt;
          </ArrowButton>

          {images.map((imgSrc, index) => (
            <FadeSlide
              key={index}
              style={{
                opacity: current === index ? 1 : 0,
              }}
            >
              <SlideImage src={imgSrc} alt={`Slide ${index}`} />
            </FadeSlide>
          ))}

          <ArrowButton onClick={nextSlide} style={{ right: '1rem' }}>
            &gt;
          </ArrowButton>
        </SliderContainer>

        <FeaturesSection>
          {/* <FeatureTitle>omni CS</FeatureTitle>
          <FeatureItem>
            <FeatureSubtitle>特徴</FeatureSubtitle>
            <ul>
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
            </ul>
            <p>キー入力やマウスの操作性に重きを置いています。デスク上に据え置き、「あらゆるPC作業を効率的にこなす」をコンセプトに設計しています。</p>
          </FeatureItem>

          <FeatureTitle>omni orth</FeatureTitle>
          <FeatureItem>
            <FeatureSubtitle>特徴</FeatureSubtitle>
            <ul>
              <li>配列: オーソリニア</li>
              <li>左右トラックボール: 25mm</li>
              <li>タッチディスプレイ: 有り</li>
              <li>スイッチ: lofree low profile, choc v1</li>
            </ul>
            <p>トラックボールは左右ともに25mmを採用。打鍵感と操作性のバランスを重視したロープロファイル専用設計です。</p>
          </FeatureItem>

          <FeatureTitle>omni row</FeatureTitle>
          <FeatureItem>
            <FeatureSubtitle>特徴</FeatureSubtitle>
            <ul>
              <li>配列: ロウスタッガード</li>
              <li>左右トラックボール: サイズ未定</li>
              <li>スイッチ: 未定</li>
            </ul>
          </FeatureItem> */}

          {/* omni CS: 左説明・右画像 */}
          <FlexFeature>
            <FeatureText>
              <FeatureTitle>omni CS</FeatureTitle>
              <FeatureSubtitle>特徴</FeatureSubtitle>
              <ul>
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
              </ul>
              <p>
                キー入力やマウスの操作性に重きを置いています。デスク上に据え置き、「あらゆるPC作業を効率的にこなす」をコンセプトに設計しています。
              </p>
            </FeatureText>
            <FeatureImage>
              <img src={omni_cs_pic} alt="omni CS" loading="lazy" decoding="async" style={{ width: '100%', maxWidth: '320px', borderRadius: '8px' }} />
            </FeatureImage>
          </FlexFeature>

          {/* omni orth: 左画像・右説明（flexで反転させるため、子要素の並びはCSと同じにする） */}
          <FlexFeature reverse>
            <FeatureText>
              <FeatureTitle>omni orth</FeatureTitle>
              <FeatureSubtitle>特徴</FeatureSubtitle>
              <ul>
                <li>配列: オーソリニア</li>
                <li>左右トラックボール: 25mm</li>
                <li>タッチディスプレイ: 有り</li>
                <li>スイッチ: lofree low profile, choc v1</li>
              </ul>
              <p>トラックボールは左右ともに25mmを採用。打鍵感と操作性のバランスを重視したロープロファイル専用設計です。</p>
            </FeatureText>
            <FeatureImage>
              <img src={omni_orth_pic} alt="omni orth" loading="lazy" decoding="async" style={{ width: '100%', maxWidth: '320px', borderRadius: '8px' }} />
            </FeatureImage>
          </FlexFeature>

          {/* omni row: 左説明・右画像なし */}
          <FlexFeature>
            <FeatureText>
              <FeatureTitle>omni row</FeatureTitle>
              <FeatureSubtitle>特徴</FeatureSubtitle>
              <ul>
                <li>配列: ロウスタッガード</li>
                <li>左右トラックボール: サイズ未定</li>
                <li>スイッチ: 未定</li>
              </ul>
              <p>※開発中モデルです。詳細・写真は今後追加予定です。</p>
            </FeatureText>
            <FeatureImage />
          </FlexFeature>
        </FeaturesSection>

        <SmallNote>
          ※使い方の詳細は <a href="https://mass-work.github.io/omni_kbd_hp/#/usage">Usageページ</a> をご覧ください。
        </SmallNote>
        <NoticeLink>
          <a href="https://mass-work.github.io/omni_kbd_hp/#/pre-purchase-notice">購入前の注意点</a>
        </NoticeLink>
      </IntroSection>
    </HomeContainer>
  );
};


export default Home;

/* ---- Styled Components ---- */

/* 画面全体をラップするコンテナ */
const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 32px;
`;

/* スライダー全体を囲むコンテナ */
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;
  overflow: hidden;
  background-color: #000;
`;

/* フェード対象のスライド（絶対配置で重ねる） */
const FadeSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.8s ease-in-out;
`;

/* 画像 */
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
`;

/* 矢印ボタン */
const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #333;

  &:hover {
    background: #fff;
  }
`;

/* 紹介文セクション（Home向け） */
const IntroSection = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
`;

const IntroTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const IntroText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

/* 特長セクション */
// const FeaturesSection = styled.section`
//   text-align: left;
//   margin-top: 2rem;
// `;

const FeaturesSection = styled.section`
  margin-top: 2rem;
`;

const FlexFeature = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FeatureText = styled.div`
  flex: 1;
  text-align: left;

  ul {
    list-style: disc;
    padding-left: 1.25rem;
    margin: 0.5rem 0 0.25rem;
  }

  li {
    margin-bottom: 0.4rem;
    line-height: 1.6;
  }

  p {
    margin-top: 0.5rem;
    text-align: left;
  }
`;

const FeatureImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;
`;

// const FeatureItem = styled.div`
//   margin-bottom: 1.5rem;

//   ul {
//     padding-left: 1.5rem;
//     list-style-type: disc;

//     li {
//       margin-bottom: 0.5rem;
//       line-height: 1.5;
//     }
//   }
// `;

const FeatureSubtitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const SmallNote = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-top: 2rem;

  a {
    color: #0088cc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
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
