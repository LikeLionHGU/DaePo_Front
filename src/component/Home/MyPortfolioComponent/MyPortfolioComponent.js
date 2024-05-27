import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import PortfolioCardComponent from "../MyPortfolioComponent/PortfolioCardComponent";
import EditModalComponent from "../MyPortfolioComponent/EditModalComponent";
import DeleteModalComponent from "./DeleteModalComponent";
import {
  NoCenterHorizontal,
  themeColors,
} from "../../../styles/StyledComponents";

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
`;

const PlusButton = styled.button`
  background-color: ${themeColors.ARROWCOLOR.color};
  width: 231px;
  height: 254px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
`;
function MyPortfolioComponent() {
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

  return (
    <Container>
      <h1>업로드한 작품</h1>
      <NoCenterHorizontal>
        <PlusButton>
          <Link
            to="/DaePo/CreatePost"
            style={{ textDecoration: "none", color: "white" }}
          >
            +
          </Link>
        </PlusButton>
        {PoPolDataList.map((data, index) => (
          <PortfolioCardComponent
            key={index}
            data={data}
            onEdit={handleCardEditClick}
            onDelete={handleCardDeleteClick}
          />
        ))}
      </NoCenterHorizontal>
      {showEditModal && (
        <EditModalComponent data={selectedData} onClose={handleCloseModal} />
      )}
      {showDeleteModal && <DeleteModalComponent onClose={handleCloseModal} />}
    </Container>
  );
}
export default MyPortfolioComponent;
