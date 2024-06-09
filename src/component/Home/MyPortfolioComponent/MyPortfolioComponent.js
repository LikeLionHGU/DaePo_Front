import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PortfolioCardComponent from "../MyPortfolioComponent/PortfolioCardComponent";
import EditModalComponent from "../MyPortfolioComponent/EditModalComponent";
import DeleteModalComponent from "./DeleteModalComponent";
import {
  NoCenterHorizontal,
  themeColors,
} from "../../../styles/StyledComponents";
import plus from "../../../img/plus.png";

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

function MyPortfolioComponent({ myPortfoilo }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCardEditClick = (data) => {
    setSelectedData(data);
    setShowEditModal(true);
  };

  const handleCardDeleteClick = (data) => {
    setSelectedData(data);
    setShowDeleteModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
  };

  return (
    <Container>
      <h2>업로드한 작품</h2>
      <NoCenterHorizontal>
        <PlusButton>
          <Link
            to="/DaePo/CreatePost"
            style={{ textDecoration: "none", color: "white" }}
          >
            <img src={plus} />
          </Link>
        </PlusButton>
        {myPortfoilo.length >= 0 &&
          myPortfoilo.map((data, index) => (
            <PortfolioCardComponent
              key={index}
              data={data}
              onEdit={handleCardEditClick}
              onDelete={handleCardDeleteClick}
              showEditModal={showEditModal}
              showDeleteModal={showDeleteModal}
            />
          ))}
      </NoCenterHorizontal>
      {showEditModal && (
        <EditModalComponent
          data={selectedData}
          onClose={handleCloseModal}
          myPortfoilo={selectedData}
        />
      )}
      {showDeleteModal && (
        <DeleteModalComponent
          data={selectedData}
          onClose={handleCloseModal}
          myPortfoilo={selectedData}
        />
      )}
    </Container>
  );
}

export default MyPortfolioComponent;
