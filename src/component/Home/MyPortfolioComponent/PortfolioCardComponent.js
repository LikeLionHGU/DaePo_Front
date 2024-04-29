import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
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
      <p>제작 연도: {data.year}</p>
      <p>분야: {data.field}</p>
      <p>작품명: {data.title}</p>
      <p>디그리 설명: {data.description}</p>
      <Button onClick={handleEditClick}>수정</Button>
      <Button onClick={handleDeleteClick}>삭제</Button>
    </Card>
  );
}

export default PortfolioCardComponent;
