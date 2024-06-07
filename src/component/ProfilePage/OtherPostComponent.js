import React from "react";
import styled from "styled-components";
import { NoCenterHorizontal } from "../../styles/StyledComponents";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 63%;
  margin: 0 auto;
  margin-top: 50px;
`;

function OtherPostComponent({ myPortfoilo }) {
  return (
    <Container>
      <h1>업로드한 작품</h1>
      <NoCenterHorizontal>
        {myPortfoilo.map((data, index) => (
          <CardComponent key={index} data={data} />
        ))}
      </NoCenterHorizontal>
    </Container>
  );
}
export default OtherPostComponent;

const Card = styled.div`
  border: 1px solid #ccc;
  margin-left: 10px;
  width: 220px;
  height: 248px;
  border-radius: 24px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const CardComponent = ({ data }) => {
  return (
    <Card>
      <Img src={data.images.imageURL} alt="img"></Img>
    </Card>
  );
};
