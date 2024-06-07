import React, { useState, useEffect, useRef } from "react";

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

function LikedPortfolioComponent({ myLiked }) {
  const [visibleItems, setVisibleItems] = useState(8);
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newItemsPerRow = Math.floor(containerWidth / 220); // 200px 아이템 너비 + 20px 간격
        setItemsPerRow(newItemsPerRow);
        setVisibleItems(newItemsPerRow * 2); // 초기 표시 항목 수 설정
      }
    };

    handleResize(); // 초기 계산
    window.addEventListener("resize", handleResize); // 리사이즈 시 재계산

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSeeMore = () => {
    setVisibleItems((prev) => prev + itemsPerRow);
  };

  return (
    <Container ref={containerRef}>
      <h1>좋아요 표시한 작품</h1>
      <PortfolioGrid>
        {myLiked.slice(0, visibleItems).map((data, index) => (
          <PortfolioLikedCardComponent key={index} data={data} />
        ))}
      </PortfolioGrid>
      <Horizontal>
        {visibleItems < myLiked.length && (
          <SEEMORE onClick={handleSeeMore}>
            더 보기{" "}
            <MdKeyboardDoubleArrowDown
              style={{ color: themeColors.MAINCOLOR.color, marginLeft: "18px" }}
            />
          </SEEMORE>
        )}
      </Horizontal>
    </Container>
  );
}

export default LikedPortfolioComponent;
