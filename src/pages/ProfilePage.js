import React from "react";
import { useNavigate, Link } from "react-router-dom";
import FooterComponent from "../component/Home/FooterComponent";
import CardComponent from "../component/ProfilePage/CardComponent";
import OtherIntroComponent from "../component/ProfilePage/OtherIntroComponent";
import OtherPostComponent from "../component/ProfilePage/OtherPostComponent";
import styled from "styled-components";
import {
  Vertical,
  Horizontal,
  NoCenterHorizontal,
  Box,
} from "../styles/StyledComponents";
import logo from "../img/Group 58.png";

const MyInfo = {
  name: "이한나",
  email: "22100595@handong.ac.kr",
  intro: "멋쟁이 아기사자 웹파트 이한나입니다.",
  image:
    "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
};

const PoPolDataList = [
  {
    professor: "이재선 교수님",
    tools: "네모네모 빔 툴",
    year: "2020",
    field: "자동차 부품..?",
    title: "핸들..?",
    description: "핸들 디자인 이런거 있나 뭐 있으면 있겠지",
  },
  {
    professor: "콘디 교수님",
    tools: "다른 툴",
    year: "2021",
    field: "다른 분야..?",
    title: "밤양갱",
    description: "달고 달디 단 밤양개객애개액애갱개액액액액애갱갱ㄱㅇ",
  },
];

const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to left, #ff7d04, #ffebd9);
  width: 100%;
  height: 225px;
  margin-bottom: 400px;
  padding-top: 25px;
`;
const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 70px;
  height: 40px;
  margin-left: 94px;
  margin-top: 25px;
`;
const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-right: 40px;
  font-family: "AUTHENTICSans90";
`;
const ProfileImg = styled.img`
  width: 330px;
  height: 330px;
  border-radius: 50%;
  cursor: pointer;
  border: 10px solid white;
  margin-top: 100px;
`;

function ProfilePage() {
  const navigate = useNavigate();
  const onClickHUP = () => {
    navigate("/DaePo");
  };

  return (
    <>
      <Header>
        <Horizontal>
          <Logo src={logo} alt="logo" onClick={onClickHUP} />
          <NoCenterHorizontal
            style={{
              justifyContent: "flex-end",
              marginRight: "95px",
              marginTop: "10px",
            }}
          >
            <StyledLink to="/DaePo/PortFolio">프로젝트</StyledLink>
            <StyledLink to="/DaePo/CreatePost">업로드</StyledLink>
            <StyledLink to="/DaePo/MyPage">마이페이지</StyledLink>
          </NoCenterHorizontal>
        </Horizontal>
        <Horizontal>
          <div style={{ display: "flex" }}>
            <ProfileImg src={MyInfo.image} alt="프로필 이미지" />
            <OtherIntroComponent MyInfo={MyInfo} />
          </div>
        </Horizontal>
      </Header>
      <OtherPostComponent />
      <Box margin="70px" />
      <FooterComponent />
    </>
  );
}

export default ProfilePage;
