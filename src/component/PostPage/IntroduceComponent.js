import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import emailimg from "../../img/email.png";
import coffechatimg from "../../img/coffechat.png";
import commentimg from "../../img/comment.png";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import user from "../../img/images.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const BT = styled.div`
  display: flex;
  align-items: center;
`;
const LikeBT = styled.button`
  width: 80px;
  height: 38px;
  padding-left: 0px;
  border-radius: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommentBT = styled.button`
  width: 80px;
  height: 38px;
  padding-left: 10px;
  border-radius: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatBT = styled.button`
  width: 60px;
  height: 18px;
  margin-left: 10px;
  background-color: black;
  color: white;
  font-size: 10px;
  border-radius: 5px;
`;

const TopSection = styled.div`
  display: flex;
  position: relative;
  border-top: 3px solid black;
  padding: 20px;
  width: 97%;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: #e0e0e0;
  margin-left: -20px;
`;

const TextContainer = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
`;

const Designer = styled.h2`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
`;

const Contact = styled.h2`
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Explain = styled.h2`
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Adress = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Email = styled.a`
  margin-left: 15px;
  margin-bottom: 0px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const Behance = styled.a`
  margin-top: 0px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const RightSection = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 100px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
`;

const PostDescription = styled.div`
  font-size: 14px;
  line-height: 1.5;
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px;
  width: 358px;
  height: 230px;
  position: absolute;
  left: 550px;
`;

const Tags = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 25px;
  width: 100%;
`;

const Tag = styled.span`
  margin-right: 30px;
  font-weight: bold;
`;

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const WritingArea = styled.div`
  width: 800px;
  margin-top: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const Button = styled.button``;

const SinglecommentWrapper = styled.div`
  .comment {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: relative;
  }
  .writer {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .date {
    font-size: 12px;
    color: #888;
    margin-bottom: 5px;
  }
  .content {
    font-size: 16px;
  }
  .edit-textarea {
    width: calc(100% - 20px);
    margin-bottom: 10px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

function IntroduceComponent({ post }) {
  const [likeData, setLikeData] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/like/byPost/${post.id}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json()) // JSON 형식으로 응답을 파싱
      .then((data) => {
        setLikeData(data);
        console.log("setLikeData: ", data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const { id } = useParams();

  const [heart, setHeart] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const [postLikeId, setPostLikeId] = useState();

  const scrollToComments = () => {
    document
      .getElementById("comment-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleHeart = () => {
    const newHeartValue = !heart;
    setHeart(newHeartValue);
    if (newHeartValue) {
      //TODO : 하트 눌렀을 때 (하트 추가)
      fetch(`${process.env.REACT_APP_BASE_URL}/like/add/${post.id}`, {
        method: "POST",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("profile data", data);
          setLikeCount(likeCount + 1);
          setPostLikeId(data.postLikeId);
        })
        .catch((error) => console.error(error));
    } else {
      //TODO : 하트 다시 눌렀을 때 (하트 제거)
      fetch(`${process.env.REACT_APP_BASE_URL}/like/${postLikeId}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("profile data", data);
          setLikeCount(likeCount - 1);
        })
        .catch((error) => console.error(error));
    }
  };

  const onClickMail = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/sending/${post.id}`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({}), // Add any body content if necessary, or use an empty object
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response status:", data.status); // data.status may not exist in fetch, typically you get the status from response
        console.log("Request successful");
        console.log("Response data:", data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };

  return (
    <Wrapper>
      <BT>
        <LikeBT onClick={handleHeart}>
          {heart ? (
            <AiFillHeart style={{ color: "#F8CA99", fontSize: "30px" }} />
          ) : (
            <AiOutlineHeart style={{ color: "#dddddd", fontSize: "30px" }} />
          )}
          <span style={{ marginLeft: "10px" }}>{likeCount}</span>
        </LikeBT>
        <LikeBT onClick={scrollToComments}>
          <img
            src={commentimg}
            alt="comment"
            style={{ width: "23px", height: "23px" }}
          />
          <span style={{ marginLeft: "10px" }}>{post.commentsCounts}</span>
        </LikeBT>
      </BT>
      <TopSection>
        <Link to={`/DaePo/Profile/${post.id}`}>
          <ProfileImage src={user} alt="Profile Image" />
        </Link>
        <TextContainer>
          <Title>{post.title}</Title>
          <Designer>{post.userName}</Designer>
          <Adress>
            <ContactRow>
              <Contact>Contact</Contact>
              <Email>
                <img
                  src={emailimg}
                  alt="Email Icon"
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                />
                {post.contact}
                <ChatBT onClick={onClickMail}>커피챗</ChatBT>
              </Email>
            </ContactRow>
            <Behance href="http://www.behance.net" target="_blank">
              <img
                src={coffechatimg}
                alt="Behance Icon"
                style={{ width: "18px", height: "18px", marginRight: "5px" }}
              />
              {post.profileContribution}
            </Behance>
          </Adress>
        </TextContainer>
        <PostDescription>
          <Explain>{post.content}</Explain>
        </PostDescription>
      </TopSection>
      <RightSection>
        <Tags>
          <Tag>#{post.tools[0]}</Tag>
          <Tag>#viewCount {post.viewCount}</Tag>
        </Tags>
      </RightSection>
    </Wrapper>
  );
}

export default IntroduceComponent;
