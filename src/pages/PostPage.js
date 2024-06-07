import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";
import CommentComponent from "../component/PostPage/CommentComponent";
import LikeComponent from "../component/PostPage/LikeComponent";
import IntroduceComponent from "../component/PostPage/IntroduceComponent";
import { Container, Vertical } from "../styles/StyledComponents";
import ImgComponent from "../component/PostPage/ImgComponent";

function PostPage() {
  const location = useLocation();
  const post = location.state.post;

  const [postData, setPostData] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/posts/get/${post.id}`, {
      method: "GET",
      // mode: "no-cors",
      credentials: "include",
    })
      .then((response) => response.text()) // 응답 본문만 읽을 수 있음
      .then((data) => {
        const parsedData = typeof data === "string" ? JSON.parse(data) : data;
        setPostData(parsedData);
        console.log("정보 확인해서 postId로 정보 불러오기", data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Container>
        <HeaderComponent />
        <DivisionComponent />
      </Container>
      <Vertical>
        {postData ? (
          <>
            <IntroduceComponent post={postData} />
            {postData.videoURL && (
              <ReactPlayer
                className="player"
                url={postData.videoURL}
                width="900px"
                height="600px"
                playing={true}
                muted={true}
                controls={true}
                style={{ marginBottom: "20px" }}
              />
            )}
            <ImgComponent post={postData} />
          </>
        ) : (
          <p></p>
        )}
      </Vertical>
      <div id="comment-section">
        {" "}
        <CommentComponent />
      </div>
      <LikeComponent />
    </>
  );
}

export default PostPage;
