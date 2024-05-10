import React, { useState } from "react";
import styled from "styled-components";

import HomePageComponent from "./HomePageComponent";
import MyPageComponent from "./MyPageComponent";
import PostFormComponent from "../CreatePost/PostFormComponent";
import FilteringComponent from "../FilteringPage/FilteringComponent";
import AdminComponent from "../Home/AdminComponent/AdminComponent";

const Container = styled.div`
  display: flex;
`;

const MenuButton = styled.button`
  margin-right: 20px;
  cursor: pointer;
`;

function DivisionComponent() {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };
  return (
    <>
      <Container>
        <MenuButton onClick={() => handleClick("home")}>홈</MenuButton>
        <MenuButton onClick={() => handleClick("portfolioZip")}>
          작품 페이지
        </MenuButton>
        <MenuButton onClick={() => handleClick("myPage")}>
          마이 페이지
        </MenuButton>
        <MenuButton onClick={() => handleClick("addPortfolio")}>
          작품 업로드
        </MenuButton>
        <MenuButton onClick={() => handleClick("adminPage")}>
          게시물 관리
        </MenuButton>
      </Container>
      <hr />

      {activeMenu === "home" && <HomePageComponent />}
      {activeMenu === "portfolioZip" && <FilteringComponent />}
      {activeMenu === "myPage" && (
        <MyPageComponent
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      )}
      {activeMenu === "addPortfolio" && <PostFormComponent />}
      {activeMenu === "adminPage" && <AdminComponent />}
    </>
  );
}

export default DivisionComponent;
