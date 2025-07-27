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
            本キットは ご自身ではんだ付けを行い、組み立てる <strong>「自作キーボードキット」</strong> です。完成品ではありません。
            キット以外に別途必要な部品があります。詳細はBuild guideをご確認下さい。
          </ListItem>
          <ListItem>仕様は予告なく変更になる場合があります。また、変更前後での互換性もなくなる可能性があります。</ListItem>
          <ListItem>個人製作による自作キットです。出来る限りのことはしますが、メーカーの様な品質、サポート、保証はありません。</ListItem>
          <ListItem>詳細は販売ページをご確認下さい。</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>2. ケースについて</Subtitle>
        <List>
          <ListItem>3Dプリント品のためケースにひずみがある場合があります。(使用上は問題のないようにしています。)</ListItem>
          <ListItem>
            塗装は外観面のみとなります。組み立て後に見えない箇所は塗装がない場合があります。
            <Image src={`${import.meta.env.BASE_URL}img/notice_01.jpg`} alt="塗装について" />
          </ListItem>
          <ListItem>
            その他、細かい傷や塗装ムラなどがある場合があります。
            <ImageContainer>
              <Image src={`${import.meta.env.BASE_URL}img/notice_02.jpg`} alt="傷やムラ" />
              <Image src={`${import.meta.env.BASE_URL}img/notice_06.jpg`} alt="傷やムラ" />
            </ImageContainer>
          </ListItem>
          <ListItem>スイッチを外した時に塗装がはがれる場合があります。気になる場合は補修してお使い下さい。</ListItem>
          <ListItem></ListItem>
          <ListItem>
            ボトムプレートはアクリルカットのため、切断面に汚れや傷がある場合があります。気になる場合は、同梱の紙やすりを使い切断面を水研ぎしてください。ボトムプレート水研ぎをすることで、滑らかで良好な仕上がり面を得ることが出来ます。
          </ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>3. タッチディスプレイについて</Subtitle>
        <List>
          <ListItem>タッチディスプレイの描画の更新とトラックボールの操作を同時に行うとカーソルが飛ぶなど意図しない動作が起こります。</ListItem>
          <ListItem>
            例として、右トラックボールを動かしながらタッチキーモードのレイヤーを変更すると、カーソルの動作が飛んだような挙動をします。
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

// Styled Components
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

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 0.375rem;
`;
