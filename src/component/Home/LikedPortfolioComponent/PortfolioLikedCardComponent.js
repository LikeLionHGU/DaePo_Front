import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  border: 1px solid #ccc;
  margin-right: 20px;
  width: 231px;
  height: 254px;
  border-radius: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  //
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6b2fb0;
  color: white;
`;
const Title = styled.p`
  font-family: "AUTHENTICSans90";
  font-size: 24px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  width: 100%;
  height: 100%;
`;

function PortfolioLikedCardComponent({ data }) {
  console.log("image check", data.images[0]);
  return (
    <StyledLink to={`/DaePo/PostPage/${data.id}`} state={{ post: data }}>
      <Card>
        {/* <Image src={data.images.imageURL} alt={data.title} /> */}
        <Title>{data.title}</Title>
      </Card>
    </StyledLink>
  );
}

export default PortfolioLikedCardComponent;
