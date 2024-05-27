import React, { useState } from "react";

import styled from "styled-components";
import {
  NoCenterVertical,
  themeColors,
} from "../../../styles/StyledComponents";

const Text = styled.p`
  font-family: "AUTHENTICSans90";
  color: ${themeColors.MAINCOLOR.color};
  font-size: 24px;
`;
const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid ${themeColors.ARROWCOLOR.color};
  background-color: none;
  width: ${(props) => props.width || "300px"};
`;
const UpdateBT = styled.button`
  font-family: "AUTHENTICSans90";
  margin-left: 30px;
`;

const EditInfoComponent = ({ MyInfo }) => {
  const [formData, setFormData] = useState(MyInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("수정된 정보:", formData);
  };

  return (
    <NoCenterVertical style={{ marginLeft: "100px", marginTop: "200px" }}>
      <form onSubmit={handleSubmit}>
        <Text>이름</Text>
        <TextInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <Text>이메일</Text>
        <TextInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          width="400px"
        />
        <br />
        <Text>자기소개</Text>
        <TextInput
          name="intro"
          value={formData.intro}
          onChange={handleChange}
          width="400px"
        />
        <UpdateBT type="submit">정보 수정</UpdateBT>
      </form>
    </NoCenterVertical>
  );
};

export default EditInfoComponent;
