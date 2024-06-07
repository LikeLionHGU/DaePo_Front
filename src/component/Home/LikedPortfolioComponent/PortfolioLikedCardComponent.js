import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  console.log("image check", data);
  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate("/DaePo/PostPage/" + data.id);
  };
  return (
    <Card onClick={onClickLogin}>
      <p>작품명: {data.title}</p>
    </Card>
  );
}

export default PortfolioLikedCardComponent;
