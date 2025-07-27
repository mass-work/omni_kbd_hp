import React, { useState } from 'react';
import styled from 'styled-components';

/* --- 画像をインポート（例）--- */
import home01 from '../assets/home_01.jpg';
import home02 from '../assets/home_02.jpg';
import home04 from '../assets/home_04.jpg';

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

      {/* 紹介文セクション（Home向け） */}
      <IntroSection>
        <IntroTitle>omni CS</IntroTitle>
        <IntroText>
          omni CSは、デュアルトラックボールとタッチディスプレイを搭載した40%キーボードです。
          <br />
          パソコンへの入力作業を効率化し、快適な作業環境を実現するために開発しました。
        </IntroText>

        {/* 特長セクション */}
        <FeaturesSection>
          <FeatureTitle>特長</FeatureTitle>

          <FeatureItem>
            <FeatureSubtitle>デュアルトラックボール</FeatureSubtitle>
            <ul>
              <li>
                右側: <strong>44mm</strong>
                トラックボールで、モデリングなどの繊細な動きから、デュアルディスプレイの大きな動作まで快適に操作出来ます。
              </li>
              <li>
                左側: <strong>25mm</strong>
                トラックボールで、上下左右スクロールと豊富なサムクラスタキー(親指)の配置を両立をしました。
              </li>
            </ul>
          </FeatureItem>

          <FeatureItem>
            <FeatureSubtitle>タッチディスプレイ</FeatureSubtitle>
            <ul>
              <li>マクロキーを登録することで、ショートカットやアプリを呼び出せます。 (タッチボタンがVial対応しています。)</li>
              <li>タッチ操作で、トラックボールの感度調整を視覚的に確認しながら行えます。</li>
            </ul>
          </FeatureItem>
        </FeaturesSection>

        <SmallNote>
          ※使い方の詳細は <a href="https://mass-work.github.io/omni_kbd_hp/#/usage">Usageページ</a> をご覧ください。
        </SmallNote>
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
const FeaturesSection = styled.section`
  text-align: left;
  margin-top: 2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const FeatureItem = styled.div`
  margin-bottom: 1.5rem;

  ul {
    padding-left: 1.5rem;
    list-style-type: disc;

    li {
      margin-bottom: 0.5rem;
      line-height: 1.5;
    }
  }
`;

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
