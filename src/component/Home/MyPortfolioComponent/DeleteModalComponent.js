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
  width: 415px;
  height: 212px;
`;
const CancleButton = styled.button`
  padding-top: 25px;
  cursor: pointer;
  background-color: white;
  border: none;
  position: absolute;
  left: 320px;
  font-family: "AUTHENTICSans150";
  bottom: 40px;
`;

const DeleteButton = styled.button`
  padding-top: 25px;
  cursor: pointer;
  background-color: white;
  border: none;
  position: absolute;
  left: 380px;
  bottom: 40px;
  font-family: "AUTHENTICSans150";
  color: #ee7b00;
`;
const Title = styled.div`
  margin-top: 40px;
  margin-left: 37px;
  font-family: "AUTHENTICSans150";
  font-size: 24px;
`;
const SubTitle = styled.div`
  margin-top: 20px;
  margin-left: 37px;
  font-family: "AUTHENTICSans90";
  font-size: 20px;
`;
function DeleteModalComponent({ onClose, myPortfoilo }) {
  console.log("포트폴리오 삭제", myPortfoilo);
  const handleDelete = () => {
    // delete
    fetch(`${process.env.REACT_APP_BASE_URL}/posts/${myPortfoilo.id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("profile data", data);
        // window.location.reload();
      })
      .catch((error) => console.error(error));
    onClose();
  };

  return (
    <Modal>
      <Title>포트폴리오 삭제</Title>
      <SubTitle>포트폴리오를 정말 삭제하시겠습니까?</SubTitle>
      <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      <CancleButton onClick={onClose}>취소</CancleButton>
    </Modal>
  );
}

export default DeleteModalComponent;
