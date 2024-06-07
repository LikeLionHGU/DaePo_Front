import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import FooterComponent from "../component/Home/FooterComponent";
import MyPageComponent from "../component/Home/MyPageComponent";
import EditInfoComponent from "../component/Home/EditInfoComponent/EditInfoComponent";
import { useSetRecoilState } from "recoil";
import { UserInfoState } from "../store/atoms";
import { FaSignOutAlt } from "react-icons/fa";
import duckImg from "../img/duck1.png";


import {
  Vertical,
  Horizontal,
  NoCenterHorizontal,
  Box,
  NoCenterVertical,
  themeColors,
} from "../styles/StyledComponents";
import logo from "../img/Group 58.png";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to left, #8e15c7, #f3dffc);
  width: 100%;
  height: 225px;
  margin-bottom: 550px;
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
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 50%;
  cursor: pointer;
  border: 10px solid white;
  margin-top: 100px;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin-right: 40px;
  font-family: "AUTHENTICSans90";
`;
const Text = styled.p`
  font-family: "AUTHENTICSans130";
  color: ${themeColors.MAINCOLOR.color};
  font-size: 20px;
  font-weight: bold;
    margin-bottom: 15px;  
`;
const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid ${themeColors.ARROWCOLOR.color};
  background-color: none;
  width: ${(props) => props.width || "300px"};
  font-size: 18px;

`;
const UpdateBT = styled.button`
  font-family: "AUTHENTICSans90";
  color: ${themeColors.MAINCOLOR.color};
  font-size: 20px;
  width: 150px;
  height: 65px;
  border: none;
  border-radius: 20px;
  background-color: white;
  margin-top: 25px;
  cursor: pointer;
  margin-left: 250px;
  padding-left: 100px;
`;
function MyPage() {
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
  const [myLiked, setMyLiked] = useState([
    {
      id: "",
      title: "",
      images: "",
    },
  ]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/profile/myinfo`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json()) // 응답을 JSON으로 파싱
      .then((data) => {
        // 받아온 데이터를 myInfo 상태에 업데이트
        //TODO: 밥 먹고 와서 할 것
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
          // console.log("portfolioItems test", portfolioItems);
          setMyPortfoilo(portfolioItems);
        }
        if (data.likedPosts && data.likedPosts.length > 0) {
          const portfolioLikedItems = data.likedPosts.map((like) => ({
            id: like.id || "",
            title: like.title || "",
            images: like.images[0] || "",
          }));
          // console.log("portfolioItems test", portfolioItems);
          setMyLiked(portfolioLikedItems);
        }
        console.log("myInfo", data);
      })
      .catch((error) => console.error(error));
  }, []);

  const navigate = useNavigate();
  const onClickHUP = () => {
    navigate("/DaePo");
  };
  const setUserInfo = useSetRecoilState(UserInfoState);
  const fileInputRef = useRef();

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setMyInfo((prevInfo) => ({
  //     ...prevInfo,
  //     image: file,
  //   }));
  // };

  // const handleImageClick = () => {
  //   fileInputRef.current.click();
  // };

  const handleLogout = () => {
    // 실제 로그아웃 로직을 여기에 추가하세요
    setUserInfo({ isLoggedIn: false }); // 로그아웃 상태 업데이트
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("수정된 정보:", myInfo);

    const formData = new FormData();
    for (const key in myInfo) {
      formData.append(key, myInfo[key]);
    }

    fetch(`${process.env.REACT_APP_BASE_URL}/profile`, {
      method: "PATCH",
      credentials: "include",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("profile data", data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <Vertical>
      <Header>
        <Horizontal>
          <Logo src={logo} alt="logo" onClick={onClickHUP} />
          <NoCenterHorizontal
            style={{
              justifyContent: "flex-end",
              marginRight: "5%",
              marginTop: "10px",
            }}
          >
            <StyledLink to="/DaePo/PortFolio">프로젝트</StyledLink>
            <StyledLink to="/DaePo/CreatePost">업로드</StyledLink>
            <StyledLink to="/DaePo/MyPage" style={{ fontWeight: 700 }}>
              마이페이지
            </StyledLink>
            <StyledLink to="/DaePo/Admin">게시물 관리</StyledLink>
            <StyledLink to="/DaePo" onClick={handleLogout}>
              <FaSignOutAlt />
            </StyledLink>
          </NoCenterHorizontal>
        </Horizontal>
        <Horizontal>
          <div style={{ display: "flex" }}>
            <ProfileImg
              src={duckImg}
              alt="프로필 이미지"
              // onClick={handleImageClick}
            />
            {/* <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            /> */}
            <NoCenterVertical
              style={{ marginLeft: "100px", marginTop: "200px" }}
            >
              <form onSubmit={handleSubmit}>
                <Text>이름</Text>
                <TextInput
                  type="text"
                  name="name"
                  value={myInfo.name}
                  onChange={handleChange}
                />
                <br />
                <Text>이메일</Text>
                <TextInput
                  type="email"
                  name="contact"
                  value={myInfo.contact}
                  onChange={handleChange}
                  width="400px"
                />
                <br />
                <Text>자기소개</Text>
                <TextInput
                  name="info"
                  value={myInfo.info}
                  onChange={handleChange}
                  width="400px"
                />
                <br />
                <Text>기타 사이트</Text>
                <TextInput
                  name="contribution"
                  value={myInfo.contribution}
                  onChange={handleChange}
                  width="400px"
                />
                <br />
                <UpdateBT type="submit">수정</UpdateBT>
              </form>
            </NoCenterVertical>
          </div>
        </Horizontal>
      </Header>
      <MyPageComponent myPortfoilo={myPortfoilo} myLiked={myLiked} />
      <Box margin="100px" />
      <FooterComponent />
    </Vertical>
  );
}

export default MyPage;
