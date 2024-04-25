import React from "react";

import PortfolioLikedCardComponent from "./PortfolioLikedCardComponent";

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
];

function LikedPortfolioComponent() {
  return (
    <div>
      <h2>내가 좋아요 누른 포폴 페이지</h2>
      {LikedDataList.map((data, index) => (
        <PortfolioLikedCardComponent key={index} data={data} />
      ))}
    </div>
  );
}

export default LikedPortfolioComponent;
