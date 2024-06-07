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
`;

function PortfolioLikedCardComponent({ data }) {
  console.log("image check", data.images[0]);
  return (
    <Link to={`/DaePo/PostPage/${data.id}`} state={{ post: data }}>
      <Card>
        {/* <p>작품명: {data.title}</p> */}
        <img src={data.images.imageURL} />
      </Card>
    </Link>
  );
}

export default PortfolioLikedCardComponent;
