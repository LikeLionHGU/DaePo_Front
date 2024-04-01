import React, { useState } from "react";

import PortfolioCardComponent from "../MyPortfolioComponent/PortfolioCardComponent";
import EditModalComponent from "../MyPortfolioComponent/EditModalComponent";

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

function MyPortfolioComponent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleCardClick = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>내가 쓴 포폴 페이지</h2>
      {PoPolDataList.map((data, index) => (
        <PortfolioCardComponent
          key={index}
          data={data}
          onEdit={handleCardClick}
        />
      ))}

      {showModal && (
        <EditModalComponent data={selectedData} onClose={handleCloseModal} />
      )}
    </div>
  );
}
export default MyPortfolioComponent;
