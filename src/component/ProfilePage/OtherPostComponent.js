import React from "react";
import styled from "styled-components";
import { NoCenterHorizontal } from "../../styles/StyledComponents";

const PoPolDataList = [
  {
    professor: "이재선 교수님",
    tools: "네모네모 빔 툴",
    year: "2020",
    field: "자동차 부품..?",
    title: "핸들..?",
    description: "핸들 디자인 이런거 있나 뭐 있으면 있겠지",
  },
  {
    professor: "콘디 교수님",
    tools: "다른 툴",
    year: "2021",
    field: "다른 분야..?",
    title: "밤양갱",
    description: "달고 달디 단 밤양개객애개액애갱개액액액액애갱갱ㄱㅇ",
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 63%;
  margin: 0 auto;
  margin-top: 50px;
`;

function OtherPostComponent() {
  return (
    <Container>
      <h1>업로드한 작품</h1>
      <NoCenterHorizontal>
        {PoPolDataList.map((data, index) => (
          <CardComponent key={index} data={data} />
        ))}
      </NoCenterHorizontal>
    </Container>
  );
}
export default OtherPostComponent;

const StyledCard = styled.div`
  border: 1px solid #ccc;
  margin-right: 10px;
  width: 231px;
  height: 254px;
  border-radius: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardComponent = ({ data }) => {
  return (
    <StyledCard>
      <p>담당 교수님: {data.professor}</p>
      <p>사용 툴: {data.tools}</p>
      <p>제작 연도: {data.year}</p>
      <p>분야: {data.field}</p>
      <p>작품명: {data.title}</p>
      <p>디그리 설명: {data.description}</p>
    </StyledCard>
  );
};
