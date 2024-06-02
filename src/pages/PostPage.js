import React from "react";
import ReactPlayer from "react-player";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";
import CommentComponent from "../component/PostPage/CommentComponent";
import LikeComponent from "../component/PostPage/LikeComponent";
import IntroduceComponent from "../component/PostPage/IntroduceComponent";
import { Container, Vertical } from "../styles/StyledComponents";

function PostPage() {
  return (
    <>
      <Container>
        <HeaderComponent />
        <DivisionComponent />
      </Container>
      <Vertical>
        <IntroduceComponent />
        <ReactPlayer
          className="player"
          url={"https://www.youtube.com/watch?v=gIiEhETBwBA"}
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
