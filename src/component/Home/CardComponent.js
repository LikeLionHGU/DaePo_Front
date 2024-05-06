import React, { useState } from "react";
import styled from "styled-components";
// import cardImage from "../../img/CardComponent.png";
import { Link } from "react-router-dom";

const Rect = styled.div`
  width: 230px;
  height: 230px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverlayTop = styled.div`
  position: absolute;
  top: ${({ show }) => (show ? "0" : "-100%")};
  left: 0;
  right: 0;
  background-color: rgba(138, 43, 226, 0.7);
  transition: top 0.8s ease-in-out;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 115px;
`;

const OverlayBottom = styled.div`
  position: absolute;
  bottom: ${({ show }) => (show ? "0" : "-100%")};
  left: 0;
  right: 0;
  background-color: rgba(138, 43, 226, 0.7);
  transition: bottom 0.8s ease-in-out;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 115px;
`;

const Text = styled.p`
  color: white;
  font-size: 24px;
  position: absolute;
  top: 85px;
  left: 90px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: 1;
  transition: opacity 1s ease-in-out;
`;

const CardComponent = ({ id, imageSrc }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Rect
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/DaePo/PostPage/${id + 1}`}>
        <img src={imageSrc} alt={`Card ${id}`} />

        <OverlayTop show={hovered}></OverlayTop>
        <OverlayBottom show={hovered}></OverlayBottom>
        <Text show={hovered}>{`Duck${id + 1}`}</Text>
      </Link>
    </Rect>
  );
};

export default CardComponent;
