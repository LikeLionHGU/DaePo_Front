import ReactPlayer from "react-player";

import HeaderComponent from "../component/Home/HeaderComponent";
import CommentComponent from "../component/PostPage/CommentComponent";
import TitleComponent from "../component/PostPage/TitleComponent";
import LikeComponent from "../component/PostPage/LikeComponent";

function PostPage() {
  return (
    <>
      <HeaderComponent />
      <TitleComponent />
      <ReactPlayer
        className="player"
        url={"https://www.youtube.com/watch?v=gIiEhETBwBA"}
        width="700px"
        heigth="700px"
        playing={true}
        muted={true}
        controls={true}
      />
      <CommentComponent />
      <LikeComponent />
    </>
  );
}

export default PostPage;
