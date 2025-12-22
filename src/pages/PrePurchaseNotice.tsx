import React from 'react';
import styled from 'styled-components';

const PrePurchaseNotice: React.FC = () => {
  return (
    <Container>
      <Title>購入前の注意点</Title>

      <Section>
        <Subtitle>1. 製品について</Subtitle>
        <List>
          <ListItem>
            本キットは ご自身ではんだ付けを行い、組み立てる <strong>「自作キーボードキット」</strong> です。
            <br />
            完成品ではありません。 キット以外に別途必要な部品があります。詳細はBuild guideをご確認下さい。
          </ListItem>
          <ListItem>仕様は予告なく変更になる場合があります。また、変更前後での互換性もなくなる可能性があります。</ListItem>
          <ListItem>個人製作による自作キットです。出来る限りのことはしますが、メーカーの様な品質、サポート、保証はありません。</ListItem>
          <ListItem>詳細は販売ページをご確認下さい。</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>2. ケースについて</Subtitle>
        <List>
          <ListItem>
            3Dプリント品のためケースにひずみがある場合があります。
            <br />
            ※組立、使用する上で問題があるレベルでひずんでいた場合はお手数ですが、販売ページ(オフラインイベントでの購入の場合はDM)よりご連絡下さい。
          </ListItem>
          <ListItem>
            塗装は外観面のみとなります。組み立て後に見えない箇所は塗装がない場合があります。
            <ImageSingle src={`${import.meta.env.BASE_URL}img/notice_01.jpg`} alt="塗装について" />
          </ListItem>
          <ListItem>
            その他、細かい傷や塗装ムラなどがある場合があります。
            <ImageContainer>
              <ImagePair src={`${import.meta.env.BASE_URL}img/notice_02.jpg`} alt="傷やムラ" />
              <ImagePair src={`${import.meta.env.BASE_URL}img/notice_06.jpg`} alt="傷やムラ" />
            </ImageContainer>
          </ListItem>
          <ListItem>スイッチを外した時に塗装がはがれる場合があります。気になる場合は補修してお使い下さい。</ListItem>
          <ListItem>
            ボトムプレートはアクリルカットのため、汚れや焼け跡、傷がある場合があります。気になる場合は、水研ぎ用の紙やすりを使い水研ぎしてください。
            <br />
            また、ボトムプレート外周を水研ぎをすることで、滑らかで良好な仕上がり面を得ることが出来ます。
          </ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>3. タッチディスプレイについて</Subtitle>
        <List>
          <ListItem>タッチディスプレイの描画の更新とトラックボールの操作を同時に行うとカーソルが飛ぶなど意図しない動作が起こります。</ListItem>
          <ListItem>
            例として、右トラックボールを動かしながらタッチキーモードのレイヤーを変更すると、カーソルの動作が飛んだような挙動をする場合があります。
          </ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>4. その他</Subtitle>
        <List>
          <ListItem>
            トラックボールケースは動きが馴染むまで数日かかる場合があります。
            早くなじませたい場合はPCから外した状態で、トラックボールを馴染むまで回転させてください。
          </ListItem>
          <ListItem>スワイプジェスチャ―は開発中です。機能の正式リリース時には大幅に変更になる可能性があります。 </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default PrePurchaseNotice;


const Container = styled.div`
  box-sizing: border-box;

  width: min(100%, 860px);
  margin: 0 auto;
  padding: clamp(12px, 4vw, 24px);

  font-family: 'Inter', 'Noto Sans JP', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  font-size: clamp(14px, 1.45vw, 16px);
  line-height: 1.85;
  letter-spacing: 0.01em;

  word-break: normal;
  overflow-wrap: anywhere;
  line-break: strict;
  text-spacing: ideograph-alpha ideograph-numeric;

  & * { min-width: 0; }

  h1, h2, h3 {
    line-height: 1.35;
    letter-spacing: 0.01em;
    margin: 1.1em 0 0.55em;
  }
  h1 { font-size: clamp(20px, 5vw, 28px); }
  h2 { font-size: clamp(17px, 4.4vw, 23px); }
  h3 { font-size: clamp(15px, 3.8vw, 19px); }

  ul, ol { padding-left: 1.2em; margin: 0.7em 0 1.1em; }
  li { margin: 0.5em 0; line-height: 1.9; }

  b, strong { font-weight: 600; }

  .scroll-x {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

const Title = styled.h1`
  font-size: clamp(21px, 5.2vw, 30px);
  font-weight: 800;
  margin: 0 0 1.1rem;
`;

const Section = styled.section`
  margin-bottom: 1.8rem;
`;

const Subtitle = styled.h2`
  font-size: clamp(17px, 4.4vw, 23px);
  font-weight: 700;
  margin: 0 0 0.8rem;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.4rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.55rem;
  line-height: 1.85;
`;

const ImageSingle = styled.img`
  display: block;
  width: 84%;
  max-width: 520px;
  height: auto;
  margin: 10px auto 0;
  border-radius: 0.375rem;

  @media (min-width: 1024px) { width: 78%; }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;

const ImagePair = styled.img`
  display: block;
  height: auto;
  border-radius: 0.375rem;
  flex: 1 1 calc(50% - 12px);
  max-width: calc(50% - 12px);

  @media (min-width: 768px) { max-width: 340px; }
  @media (max-width: 420px) { flex-basis: 100%; max-width: 100%; }
`;
