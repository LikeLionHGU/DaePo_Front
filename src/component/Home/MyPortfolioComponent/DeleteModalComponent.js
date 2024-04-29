import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 300px;
  height: 150px;
`;
const Button = styled.button`
  margin: 20px;
  cursor: pointer;
`;

function DeleteModalComponent({ onClose }) {
  const handleDelete = () => {
    console.log("포트폴리오 삭제");
    onClose();
  };

  return (
    <Modal>
      <h2>포트폴리오 삭제</h2>
      <p>정말로 삭제하시겠습니까?</p>
      <Button onClick={handleDelete}>삭제</Button>
      <Button onClick={onClose}>취소</Button>
    </Modal>
  );
}

export default DeleteModalComponent;
