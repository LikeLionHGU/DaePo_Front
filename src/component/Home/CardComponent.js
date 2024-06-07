import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LikeComponent from "../PostPage/LikeComponent";

const Rect = styled.div`
  width: 230px;
  height: 230px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-right: 10px;
  box-shadow: 1px 3px 5px 0px gray;

`;

const Image = styled.img`
  width: 230px;
  height: 235px;
`;

const OverlayTop = styled.div`
  position: absolute;
  top: ${({ show }) => (show ? "0" : "-100%")};
  left: 0;
  right: 0;
  background-color: rgba(85, 92, 154, 0.8);
  transition: top 0.8s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 115px;
`;

const OverlayBottom = styled.div`
  position: absolute;
  bottom: ${({ show }) => (show ? "0" : "-100%")};
  left: 0;
  right: 0;
  background-color: rgba(85, 92, 154, 0.8);
  transition: bottom 0.8s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 115px;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  opacity: ${({ show }) => (show ? 1 : 0)}; /* Opacity controlled by show */
  transition: opacity 0.5s ease-in-out; /* Smooth transition */
  z-index: 1;
`;

const LikeWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  z-index: 1;
`;

const Text = styled.p`
  color: black;
  font-size: 24px;
  font-family: "AUTHENTICSans";
  font-weight: bold;
`;

const Name = styled.p`
  color: black;
  font-size: 22px;
  margin-bottom: -20px;
  font-family: "AUTHENTICSans";
  font-weight: 1300;
`;

const CardComponent = ({ post }) => {
  const [hovered, setHovered] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/posts/get/${post.id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json()) // JSON 형식으로 응답을 파싱
      .then((data) => {
        setData(data);
        console.log("Fetched data:", data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [post.id]);

  if (!data) return null; // 데이터가 없는 경우 null 반환

  // const { title, designer, imageURLs } = data; // 가져온 데이터 디스트럭처링
  return (
    <Rect
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/DaePo/PostPage/${post.id}`} state={{ post: post }}>
        {post.images && post.images.length > 0 && (
          <Image src={post.images[0].imageURL} alt={`Card ${post.id}`} />
        )}
        <OverlayTop show={hovered}></OverlayTop>
        <OverlayBottom show={hovered}></OverlayBottom>
        <TextWrapper show={hovered}>
          <Name>{post.userName}</Name>
          <Text>{post.title}</Text>
        </TextWrapper>
      </Link>
      <LikeWrapper show={hovered}>
        <LikeComponent />
      </LikeWrapper>
    </Rect>
  );
};

export default CardComponent;
