import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { UserInfoState } from "../../store/atoms";
import { FaSignOutAlt } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1000px;
  margin-right: 5%;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ee7b00;
  font-size: 18px;
  margin-right: 40px;
  transition: font-weight 0.3s; /* 글자 두껍게 전환 효과를 위한 transition 추가 */

  &:hover {
    font-weight: bold; /* 호버 상태일 때 글자를 두껍게 설정 */
  }

  &.${(props) => props.activeClassName} {
    font-weight: bold;
  }
`;

function DivisionComponent() {
  const setUserInfo = useSetRecoilState(UserInfoState);
  const userInfo = useRecoilValue(UserInfoState);

  const handleLogin = () => {
    // 실제 로그인 로직을 여기에 추가하세요
    setUserInfo({ isLoggedIn: true }); // 로그인 상태 업데이트
  };
  const handleLogout = () => {
    // 실제 로그아웃 로직을 여기에 추가하세요
    setUserInfo({ isLoggedIn: false }); // 로그아웃 상태 업데이트
  };

  return (
    <>
      <Container>
        {/* <MenuButton>
          <StyledNavLink exact to="/DaePo">홈</StyledNavLink>
        </MenuButton> */}
        <StyledNavLink to="/DaePo/PortFolio" activeClassName="active">
          프로젝트
        </StyledNavLink>
        {userInfo.isLoggedIn ? (
          <>
            <StyledNavLink to="/DaePo/CreatePost" activeClassName="active">
              업로드
            </StyledNavLink>
            <StyledNavLink to="/DaePo/MyPage" activeClassName="active">
              마이페이지
            </StyledNavLink>
            {/* ToDo: admin인 경우에만 게시물 관리 보이도록 */}
            <StyledNavLink to="/DaePo/Admin" activeClassName="active">
              게시물 관리
            </StyledNavLink>
            <StyledNavLink to="/DaePo" onClick={handleLogout}>
              <FaSignOutAlt />
            </StyledNavLink>
          </>
        ) : (
          <StyledNavLink onClick={handleLogin}>로그인</StyledNavLink>
        )}
      </Container>
      <hr />
    </>
  );
}

export default DivisionComponent;
