import styled from "styled-components";
import React, { useState } from "react";
import img from "../../../img/duck2.png";

const Card = styled.div`
  border: 1px solid #ccc;
  margin-left: 10px;
  width: 220px;
  height: 248px;
  border-radius: 24px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6b2fb0;
  color: white;
`;

const DropdownButton = styled.button`
  z-index: 2;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  display: ${(props) => (props.show ? "block" : "none")}; // 추가된 부분
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.p`
  font-family: "AUTHENTICSans90";
  font-size: 24px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 10px;
  background-color: black;
  color: white;
  border: none;
  z-index: 3;
  width: 80px;
  height: 45px;
  font-size: 12px;
`;

const DropdownMenuItem = styled.div`
  border-bottom: 1px solid white;
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: center;
  cursor: pointer;
  color: white;
  &:hover {
    background-color: black;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 16px;
`;

function PortfolioCardComponent({
  data,
  onEdit,
  onDelete,
  showEditModal,
  showDeleteModal,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleEditClick = () => {
    onEdit(data);
    setShowDropdown(false);
  };

  const handleDeleteClick = () => {
    onDelete(data);
    setShowDropdown(false);
  };

  return (
    <Card>
      {/* <Img src={data.images.imageURL} alt="img"></Img> */}
      <Title>{data.title}</Title>
      <DropdownButton
        show={!showEditModal && !showDeleteModal}
        onClick={handleDropdownToggle}
      >
        ■ ■ ■
      </DropdownButton>
      {showDropdown && (
        <DropdownMenu>
          <DropdownMenuItem onClick={handleEditClick}>수정</DropdownMenuItem>
          <DropdownMenuItem onClick={handleDeleteClick}>삭제</DropdownMenuItem>
        </DropdownMenu>
      )}
    </Card>
  );
}

export default PortfolioCardComponent;
