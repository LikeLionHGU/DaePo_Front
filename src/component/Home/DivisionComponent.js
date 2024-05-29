import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 800px;
  margin-right: 100px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ee7b00;
  font-size: 20px;
  margin-right: 40px;
  transition: font-weight 0.3s; /* 글자 두껍게 전환 효과를 위한 transition 추가 */

  &:hover {
    font-weight: bold; /* 호버 상태일 때 글자를 두껍게 설정 */
  }

  &.${(props) => props.activeClassName} {
    font-weight: bold;
  }
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
          <StyledNavLink exact to="/DaePo">홈</StyledNavLink>
        </MenuButton> */}
        <StyledNavLink to="/DaePo/PortFolio" activeClassName="active">
          프로젝트
        </StyledNavLink>
        <StyledNavLink to="/DaePo/CreatePost" activeClassName="active">
          업로드
        </StyledNavLink>
        <StyledNavLink to="/DaePo/MyPage" activeClassName="active">
          마이페이지
        </StyledNavLink>
        {/* <MenuButton>
          <StyledNavLink to="/DaePo/Admin">게시물 관리</StyledNavLink>
        </MenuButton> */}
      </Container>
      <hr />
    </>
  );
}

export default DivisionComponent;
