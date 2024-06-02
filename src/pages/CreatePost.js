import React from "react";

import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";
import PostFormComponent from "../component/CreatePost/PostFormComponent";

import { Container } from "../styles/StyledComponents";

function CreatePost() {
  return (
    <>
      <Container>
        <HeaderComponent />
        <DivisionComponent />
      </Container>
      <PostFormComponent />
      <FooterComponent />
    </>
  );
}

export default CreatePost;
