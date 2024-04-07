import React, { useState } from "react";
import styled from "styled-components";
import cardImage from "../../img/CardComponent.png";
import { Link } from "react-router-dom";

const Rect = styled.div`
  width: 100%;
  height: 100%;
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
  width: 100%;
  height: 100%;
`;

const OverlayBottom = styled.div`
  position: absolute;
  bottom: ${({ show }) =>
    show ? "0" : "-100%"}; /* 아래에서 올라오도록 설정 */
  left: 0;
  right: 0;
  background-color: rgba(138, 43, 226, 0.7);
  transition: bottom 0.8s ease-in-out;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  color: white;
  font-size: 24px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardComponent = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <Rect
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to="/DaePo/PostPage/">
        <img src={cardImage} alt="duck" />
        <OverlayTop show={hovered}></OverlayTop>
        <OverlayBottom show={hovered}>
          <Text>Duck</Text>
        </OverlayBottom>
      </Link>
    </Rect>
  );
};

export default CardComponent;
