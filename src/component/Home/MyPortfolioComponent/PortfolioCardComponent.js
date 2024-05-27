import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  margin-left: 10px;
  width: 231px;
  height: 254px;
  border-radius: 24px;
  cursor: pointer;
`;

const Button = styled.button`
  margin-right: 10px;
  cursor: pointer;
`;

function PortfolioCardComponent({ data, onEdit, onDelete }) {
  const handleEditClick = () => {
    onEdit(data);
  };
  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <Card>
      <p>담당 교수님: {data.professor}</p>
      <p>사용 툴: {data.tools}</p>
      {/* <p>제작 연도: {data.year}</p>
      <p>분야: {data.field}</p> */}
      <p>작품명: {data.title}</p>
      <p>디그리 설명: {data.description}</p>
      <Button onClick={handleEditClick}>수정</Button>
      <Button onClick={handleDeleteClick}>삭제</Button>
    </Card>
  );
}

export default PortfolioCardComponent;
