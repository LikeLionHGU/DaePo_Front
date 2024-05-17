import React from "react";
import styled from "styled-components";
import contents from "../../img/contents.png";

const Bar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #d7d7d7;
`;
const BarText = styled.div`
  font-family: "AUTHENTICSans";
  font-weight: 1300;
  font-size: 27.15px;
  color: #ff0000;
  padding-left: 15px;
  padding-top: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 450px;
  background-image: conic-gradient(
      from 45deg,
      #ed8b00,
      #e37575,
      #e2e100,
      #fbceb1,
      #ed8b00
    ),
    linear-gradient(
      to top right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0) 70%
    );
  background-blend-mode: overlay;
`;

const Content = styled.div`
  background-color: gray;
  width: 280px;
  height: 280px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 40px;
  float: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 9.7px;
`;

const Run = styled.div`
  width: 0;
  height: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 25px solid transparent;
  border-top: 25px solid transparent;
  border-left: 30px solid white;
  border-right: 0px solid transparent;
`;

const Title = styled.div`
  padding-top: 35px;
  margin-left: 50px;
  font-family: "AUTHENTICSans";
  font-weight: 1300;
  font-size: 31.03px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentsImg = styled.img.attrs({
  src: contents,
  alt: "",
})`
  width: 35px;
  height: 32px;
  margin-left: 10px;
`;

function ContentComponent() {
  return (
    <>
      <Bar>
        {" "}
        <BarText>
          WATCH NOW WATCH NOW WATCH NOW WATCH NOW WATCH NOW WATCH NOW{" "}
        </BarText>
      </Bar>
      <Container>
        <Title>
          CONTENTS
          <ContentsImg />
        </Title>

        <Content>
          <Run />
        </Content>
        <Content>
          <Run />
        </Content>
        <Content>
          <Run />
        </Content>
      </Container>
    </>
  );
}

export default ContentComponent;
