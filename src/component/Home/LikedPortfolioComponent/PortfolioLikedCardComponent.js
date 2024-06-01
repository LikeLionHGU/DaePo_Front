import styled from "styled-components";

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
  return (
    <Card>
      <p>담당 교수님: {data.professor}</p>
      <p>사용 툴: {data.tools}</p>
      <p>제작 연도: {data.year}</p>
      <p>분야: {data.field}</p>
      <p>작품명: {data.title}</p>
      <p>디그리 설명: {data.description}</p>
    </Card>
  );
}

export default PortfolioLikedCardComponent;
