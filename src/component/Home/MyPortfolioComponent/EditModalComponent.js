import React, { useState } from "react";

import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 415px;
  height: 300px;
`;
const InputText = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-family: AUTHENTICSans90;
  font-size: 15px;
  width: 80%;
  outline: none;
`;

const Textarea = styled.textarea`
  border: none;
  border-bottom: 1px solid black;
  font-family: AUTHENTICSans90;
  font-size: 15px;
  width: 80%;
  outline: none;
`;
const SelectBox = styled.select`
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  width: 80%;
  padding: 5px;
  font-size: 15px;
`;
const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 80px;
`;
const Title = styled.div`
  font-family: "AUTHENTICSans150";
  font-size: 24px;
  margin-top: -20px;
  margin-left: -10px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;
const Div1 = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  width: 100px;
`;

const SubmitButton = styled.button`
  margin: 20px;
  cursor: pointer;
  position: absolute;
  border: none;
  background-color: white;
  width: 100px;
  left: 380px;
  bottom: 10px;
  color: #ee7b00;
  font-family: "AUTHENTICSans150";
`;

const CancelButton = styled.button`
  margin: 20px;
  cursor: pointer;
  position: absolute;
  border: none;
  background-color: white;
  width: 100px;
  bottom: 10px;
  left: 300px;
  font-family: "AUTHENTICSans150";
`;

function EditModalComponent({ data, onClose }) {
  const [formData, setFormData] = useState(data);

  const [error, setError] = useState(false);
  const [video, setVideo] = useState("");
  const [tools, setTools] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const youtubePattern =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    if (!youtubePattern.test(video)) {
      setError(true);
    } else {
      setError(false);
      const formData = {
        title: title,
        year: year,
        tools: tools,
        description: description,
        video: video,
      };
    }
    console.log("CreatePost : ", formData);
    onClose();
  };

  return (
    <Modal>
      <Title>포트폴리오 정보 수정</Title>
      <form onSubmit={handleSubmit}>
        <label>
          <Div1>
            <Name>작품명</Name>

            <InputText
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Div1>
        </label>
        <br />
        <label>
          <Div>
            <Name>제작 연도</Name>
            <InputText
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Div>
        </label>
        <br />
        <label>
          <Div>
            <Name>사용 툴</Name>
            <SelectBox value={tools} onChange={(e) => setTools(e.target.value)}>
              <option value="" disabled>
                사용 툴
              </option>
              <option value="포토샵">포토샵</option>
              <option value="일러스트">일러스트</option>
              <option value="인디자인">인디자인</option>
              <option value="블렌더">블렌더</option>
              <option value="라이노">라이노</option>
              <option value="스케치">스케치</option>
              <option value="프리미엄프로">프리미엄프로</option>
              <option value="에프터이팩트">에프터이팩트</option>
              <option value="피그마">피그마</option>
            </SelectBox>
          </Div>
        </label>
        <br />
        <label>
          <Div>
            <Name>작품 설명</Name>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Div>
        </label>
        <br />
        <label>
          <Div>
            <Name>영상 링크</Name>
            <InputText
              type="text"
              name="field"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
            {error && <ErrorText>유튜브 영상링크만 업로드해주세요</ErrorText>}
          </Div>
        </label>
        <br />
        <SubmitButton type="submit">수정</SubmitButton>
        <CancelButton type="button" onClick={onClose}>
          취소
        </CancelButton>
      </form>
    </Modal>
  );
}

export default EditModalComponent;
