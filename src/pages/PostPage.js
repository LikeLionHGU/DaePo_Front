import CommentComponent from "../component/PostPage/CommentComponent";
import TitleComponent from "../component/PostPage/TitleComponent";
import LikeComponent from "../component/PostPage/LikeComponent";

function PostPage() {
  return (
    <>
      <TitleComponent />
      <CommentComponent />
      <LikeComponent />
    </>
  );
}

export default PostPage;
