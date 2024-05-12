import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const MenuButton = styled.button`
  margin-right: 20px;
  cursor: pointer;
`;

function DivisionComponent() {
  return (
    <>
      <Container>
        <MenuButton>
          <Link to="/DaePo">홈</Link>
        </MenuButton>
        <MenuButton>
          <Link to="/DaePo/PortFolio">작품 페이지</Link>
        </MenuButton>
        <MenuButton>
          <Link to="/DaePo/MyPage">마이 페이지</Link>
        </MenuButton>
        <MenuButton>
          <Link to="/DaePo/CreatePost">작품 업로드</Link>
        </MenuButton>
        <MenuButton>
          <Link to="/DaePo/Admin">게시물 관리</Link>
        </MenuButton>
      </Container>
      <hr />
    </>
  );
}

export default DivisionComponent;
