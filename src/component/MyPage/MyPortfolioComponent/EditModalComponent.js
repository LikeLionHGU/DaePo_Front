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
  width: 20%;
  height: 25%;
`;

const Button = styled.button`
  margin: 20px;
  cursor: pointer;
`;

function EditModalComponent({ data, onClose }) {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("수정된 정보:", formData);
    onClose();
  };
  return (
    <Modal>
      <h2>포트폴리오 정보 수정</h2>
      <form onSubmit={handleSubmit}>
        <label>
          담당 교수님:
          <input
            type="text"
            name="professor"
            value={formData.professor}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          사용 툴:
          <input
            type="text"
            name="tools"
            value={formData.tools}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          제작 연도:
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          분야:
          <input
            type="text"
            name="field"
            value={formData.field}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          작품명:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          디그리 설명:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            cols={50}
            style={{ resize: "none" }}
          />
        </label>
        <br />
        <Button type="submit">제출</Button>
        <Button type="button" onClick={onClose}>
          취소
        </Button>
      </form>
    </Modal>
  );
}

export default EditModalComponent;
