import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
import FooterComponent from "../component/Home/FooterComponent";
import OtherIntroComponent from "../component/ProfilePage/OtherIntroComponent";
import OtherPostComponent from "../component/ProfilePage/OtherPostComponent";
import styled from "styled-components";
import {
  Horizontal,
  NoCenterHorizontal,
  Box,
  themeColors,
} from "../styles/StyledComponents";
import logo from "../img/Group 58.png";
import user from "../img/images.png";

const MyInfo = {
  name: "이한나",
  email: "22100595@handong.ac.kr",
  intro: "멋쟁이 아기사자 웹파트 이한나입니다.",
  image:
    "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
  otherSite: "github link",
};

const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to left, #8e15c7, #f3dffc);
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
  const { id } = useParams();
  const navigate = useNavigate();
  const onClickHUP = () => {
    navigate("/DaePo");
  };
  const [myInfo, setMyInfo] = useState({
    name: "",
    contact: "",
    info: "",
    contribution: "",
    // image: "",
  });
  const [myPortfoilo, setMyPortfoilo] = useState([
    {
      id: "",
      title: "",
      year: "",
      content: "",
      tools: "",
      videoURL: "",
      images: "",
    },
  ]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/profile/${id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json()) // 응답을 JSON으로 파싱
      .then((data) => {
        // 받아온 데이터를 myInfo 상태에 업데이트
        setMyInfo(data);
        if (data.uploadedPosts && data.uploadedPosts.length > 0) {
          const portfolioItems = data.uploadedPosts.map((post) => ({
            id: post.id || "",
            title: post.title || "",
            year: post.year || "",
            content: post.content || "",
            tools: post.tools || "",
            videoURL: post.videoURL || "",
            images: post.images[0] || "",
          }));
          setMyPortfoilo(portfolioItems);
        }
        console.log("myInfo", data);
      })
      .catch((error) => console.error(error));
  }, []);

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
            <ProfileImg src={user} alt="프로필 이미지" />
            <OtherIntroComponent MyInfo={myInfo} />
          </div>
        </Horizontal>
      </Header>
      <OtherPostComponent MyPortfoilo={myPortfoilo} />
      <Box margin="70px" />
      <FooterComponent />
    </>
  );
}

export default ProfilePage;
