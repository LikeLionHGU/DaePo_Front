import React from "react";
import styled from "styled-components";
import img77 from "../../img/image 77.png";
import img78 from "../../img/image 78.png";
import img79 from "../../img/image 79.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 150px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 40px;
`;

const Content = styled.div`
  width: 230px;
  height: 230px;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 24px;
  border: 3px solid #ee7b00;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.3);
  }

  &:hover > div {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Run = styled.div`
  width: 0;
  height: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 40px solid transparent;
  border-top: 40px solid transparent;
  border-left: 50px solid white;
  border-right: 0px solid transparent;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  font-family: "AUTHENTICSans150";
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ee7b00;
`;
const SubTitle = styled.div`
  padding-top: 35px;
  margin-bottom: 50px;
  font-family: "AUTHENTICSans90";
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function ContentComponent() {
  return (
    <Container>
      <Title>SPECIAL VIDEOS</Title>
      <SubTitle>
        이곳은 영상 설명이 간략하게 들어가는 공간입니다
        <br /> 2-3문장이면 좋을 것 같아요.
      </SubTitle>
      <ContentWrapper>
        <Content>
          <Img src={img77} alt="image 77" />
          <Run />
        </Content>
        <Content>
          <Img src={img78} alt="image 78" />
          <Run />
        </Content>
        <Content>
          <Img src={img79} alt="image 79" />
          <Run />
        </Content>
      </ContentWrapper>
    </Container>
  );
}

export default ContentComponent;
