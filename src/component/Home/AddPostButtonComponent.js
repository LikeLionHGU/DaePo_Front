import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AddButton = styled.button`
  width: 200px;
`;

function AddPostButtonComponent() {
  return (
    <>
      <Link to="/DaePo/CreatePost">
        <AddButton>포토폴리오 추가</AddButton>
      </Link>
    </>
  );
}

export default AddPostButtonComponent;
