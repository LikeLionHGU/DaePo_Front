import React from "react";

import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";
import PostFormComponent from "../component/CreatePost/PostFormComponent";
import PreviewPhotosComponent from "../component/CreatePost/PreviewPhotosComponent";

import { Container } from "../styles/StyledComponents";

function CreatePost() {
  return (
    <>
      <Container>
        <HeaderComponent />
        <DivisionComponent />
      </Container>
      <PostFormComponent />
      <PreviewPhotosComponent />
      <FooterComponent />
    </>
  );
}

export default CreatePost;
