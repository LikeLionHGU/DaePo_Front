import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

function CardComponent({ data }) {
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

export default CardComponent;
