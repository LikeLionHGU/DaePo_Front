import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import PortfolioLikedCardComponent from "./PortfolioLikedCardComponent";
import { themeColors, Horizontal } from "../../../styles/StyledComponents";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 63%;
  margin: 0 auto;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const SEEMORE = styled.p`
  display: flex;
  flex-direction: column;
  font-family: "AUTHENTICSans130";
  color: ${themeColors.MAINCOLOR.color};
  font-size: 18px;
  margin-top: 50px;
  margin-left: 10px;
  cursor: pointer;
`;

const LikedDataList = [
  {
    professor: "이재선 교수님",
    tools: "네모네모 빔 툴",
    year: "2020",
    field: "아이고 허리야",
    title: "허리아픔..?",
    description: "누가 나에게 찜질을 좀",
  },
  {
    professor: "콘디 교수님",
    tools: "젤리",
    year: "2021",
    field: "김지원이 내 젤리 먹음..?",
    title: "밤양갱",
    description: "달고 달디 단 젤ㅇ리리리리리리이이ㅣ이이",
  },
  {
    professor: "콘디 교수님",
    tools: "젤리",
    year: "2021",
    field: "김지원이 내 젤리 먹음..?",
    title: "밤양갱",
    description: "달고 달디 단 젤ㅇ리리리리리리이이ㅣ이이",
  },
  {
    professor: "콘디 교수님",
    tools: "젤리",
    year: "2021",
    field: "김지원이 내 젤리 먹음..?",
    title: "밤양갱",
    description: "달고 달디 단 젤ㅇ리리리리리리이이ㅣ이이",
  },
  {
    professor: "콘디 교수님",
    tools: "젤리",
    year: "2021",
    field: "김지원이 내 젤리 먹음..?",
    title: "밤양갱",
    description: "달고 달디 단 젤ㅇ리리리리리리이이ㅣ이이",
  },
  {
    professor: "콘디 교수님",
    tools: "젤리",
    year: "2021",
    field: "김지원이 내 젤리 먹음..?",
    title: "밤양갱",
    description: "달고 달디 단 젤ㅇ리리리리리리이이ㅣ이이",
  },
  {
    professor: "콘디 교수님",
    tools: "젤리",
    year: "2021",
    field: "김지원이 내 젤리 먹음..?",
    title: "밤양갱",
    description: "달고 달디 단 젤ㅇ리리리리리리이이ㅣ이이",
  },
  {
    professor: "콘디 교수님",
    tools: "젤리",
    year: "2021",
    field: "김지원이 내 젤리 먹음..?",
    title: "밤양갱",
    description: "달고 달디 단 젤ㅇ리리리리리리이이ㅣ이이",
  },
  {
    professor: "콘디 교수님",
    tools: "젤리",
    year: "2021",
    field: "김지원이 내 젤리 먹음..?",
    title: "밤양갱",
    description: "달고 달디 단 젤ㅇ리리리리리리이이ㅣ이이",
  },
  {
    professor: "콘디 교수님",
    tools: "젤리",
    year: "2021",
    field: "김지원이 내 젤리 먹음..?",
    title: "밤양갱",
    description: "달고 달디 단 젤ㅇ리리리리리리이이ㅣ이이",
  },
  {
    professor: "콘디 교수님",
    tools: "젤리",
    year: "2021",
    field: "김지원이 내 젤리 먹음..?",
    title: "밤양갱",
    description: "달고 달디 단 젤ㅇ리리리리리리이이ㅣ이이",
  },
];

function LikedPortfolioComponent() {
  const [visibleItems, setVisibleItems] = useState(8);
  const handleSeeMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  return (
    <Container>
      <h1>좋아요 표시한 작품</h1>
      <PortfolioGrid>
        {LikedDataList.slice(0, visibleItems).map((data, index) => (
          <PortfolioLikedCardComponent key={index} data={data} />
        ))}
      </PortfolioGrid>
      <Horizontal>
        {visibleItems < LikedDataList.length && (
          <SEEMORE onClick={handleSeeMore}>
            SEE MORE{" "}
            <MdKeyboardDoubleArrowDown
              style={{ color: themeColors.MAINCOLOR.color, marginLeft: "32px" }}
            />
          </SEEMORE> // "더 보기" 버튼을 클릭하면 handleSeeMore 함수가 호출됩니다.
        )}
      </Horizontal>
    </Container>
  );
}

export default LikedPortfolioComponent;
