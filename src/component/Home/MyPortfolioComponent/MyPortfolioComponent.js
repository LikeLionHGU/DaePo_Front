import React, { useState } from "react";
import styled from "styled-components";

import PortfolioCardComponent from "../MyPortfolioComponent/PortfolioCardComponent";
import EditModalComponent from "../MyPortfolioComponent/EditModalComponent";
import DeleteModalComponent from "./DeleteModalComponent";

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
const Horizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  width: 100%;
`;

const PlusButton = styled.button`
  background-color: yellow;
  width: 150px;
  height: 100px;
  cursor: pointer;
`;
function MyPortfolioComponent({ activeMenu, setActiveMenu }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCardEditClick = (data) => {
    setSelectedData(data);
    setShowEditModal(true);
  };
  const handleCardDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  };

  const onClickCreate = () => {
    setActiveMenu("addPortfolio");
  };

  return (
    <div>
      <h2>업로드한 작품</h2>
      <Horizontal>
        {PoPolDataList.map((data, index) => (
          <PortfolioCardComponent
            key={index}
            data={data}
            onEdit={handleCardEditClick}
            onDelete={handleCardDeleteClick}
          />
        ))}
        <PlusButton onClick={onClickCreate}>+ 포폴 등록하기</PlusButton>
      </Horizontal>
      {showEditModal && (
        <EditModalComponent data={selectedData} onClose={handleCloseModal} />
      )}
      {showDeleteModal && <DeleteModalComponent onClose={handleCloseModal} />}
    </div>
  );
}
export default MyPortfolioComponent;