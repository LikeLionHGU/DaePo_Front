import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 800px;
  margin-right: 100px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ee7b00;
  font-size: 20px;
  margin-right: 40px;
`;

const MenuButton = styled.button`
  margin-right: 20px;
  cursor: pointer;
  border: none;
  background-color: white;
`;

function DivisionComponent() {
  return (
    <>
      <Container>
        {/* <MenuButton>
          <StyledLink to="/DaePo">홈</StyledLink>
        </MenuButton> */}
        <StyledLink to="/DaePo/PortFolio">프로젝트</StyledLink>
        <StyledLink to="/DaePo/CreatePost">업로드</StyledLink>
        <StyledLink to="/DaePo/MyPage">마이페이지</StyledLink>
        {/* <MenuButton>
          <StyledLink to="/DaePo/Admin">게시물 관리</StyledLink>
        </MenuButton> */}
      </Container>
      <hr />
    </>
  );
}

export default DivisionComponent;
