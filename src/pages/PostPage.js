import React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";
import CommentComponent from "../component/PostPage/CommentComponent";
import LikeComponent from "../component/PostPage/LikeComponent";
import IntroduceComponent from "../component/PostPage/IntroduceComponent";
import { Container, Vertical } from "../styles/StyledComponents";

function PostPage() {
  const location = useLocation();
  const post = location.state.post;
  console.log("post test", post);
  return (
    <>
      <Container>
        <HeaderComponent />
        <DivisionComponent />
      </Container>
      <Vertical>
        <IntroduceComponent post={post} />
        <ReactPlayer
          className="player"
          url={post.videoURL}
          width="700px"
          height="700px"
          playing={true}
          muted={true}
          controls={true}
        />
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
