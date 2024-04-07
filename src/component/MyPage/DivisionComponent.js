import React, { useState } from "react";
import styled from "styled-components";

import MyPortfolioComponent from "./MyPortfolioComponent/MyPortfolioComponent";
import LikedPortfolioComponent from "./LikedPortfolioComponent/LikedPortfolioComponent";
import EditInfoComponent from "./EditInfoComponent/EditInfoComponent";

const Container = styled.div`
  display: flex;
`;

const MenuButton = styled.button`
  margin-right: 20px;
  cursor: pointer;
`;

function DivisionComponent() {
  const [activeMenu, setActiveMenu] = useState("myPortfolio");

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };
  return (
    <>
      <Container>
        <MenuButton onClick={() => handleClick("myPortfolio")}>
          내가 쓴 포폴
        </MenuButton>
        <MenuButton onClick={() => handleClick("likedPortfolio")}>
          내가 좋아요 누른 포폴
        </MenuButton>
        <MenuButton onClick={() => handleClick("editInfo")}>
          정보 수정
        </MenuButton>
      </Container>

      {activeMenu === "myPortfolio" && <MyPortfolioComponent />}
      {activeMenu === "likedPortfolio" && <LikedPortfolioComponent />}
      {activeMenu === "editInfo" && <EditInfoComponent />}
    </>
  );
}

export default DivisionComponent;
