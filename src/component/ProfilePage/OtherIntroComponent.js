import React from "react";

import styled from "styled-components";
import { NoCenterVertical, themeColors } from "../../styles/StyledComponents";

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

const OtherIntroComponent = ({ MyInfo }) => {
  return (
    <NoCenterVertical
      style={{ marginLeft: "100px", marginTop: "200px", marginRight: "100px" }}
    >
      <Text>이름</Text>
      <TextInput type="text" name="name" value={MyInfo.username} />
      <br />
      <Text>이메일</Text>
      <TextInput
        type="email"
        name="email"
        value={MyInfo.contact}
        width="400px"
      />
      <br />
      <Text>자기소개</Text>
      <TextInput name="intro" value={MyInfo.info} width="400px" />
      <br />
      <Text>기타 사이트</Text>
      <TextInput name="otherSite" value={MyInfo.contribution} width="400px" />
    </NoCenterVertical>
  );
};

export default OtherIntroComponent;
