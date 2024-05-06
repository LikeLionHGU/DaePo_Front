import React from "react";

import PostFormComponent from "../component/CreatePost/PostFormComponent";
import PreviewPhotosComponent from "../component/CreatePost/PreviewPhotosComponent";

function CreatePost() {
  return (
    <>
      <PostFormComponent />
      <PreviewPhotosComponent />
    </>
  );
}

export default CreatePost;
