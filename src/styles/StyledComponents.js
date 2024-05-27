import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Horizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const NoCenterHorizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Vertical = styled.div`
  //세로 정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const NoCenterVertical = styled.div`
  //세로 정렬
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Box = styled.div`
  margin: ${(props) => props.margin || "100px"};
`;

export const themeColors = {
  MAINCOLOR: {
    color: "#EE7B00",
  },
  MAPCOLOR: {
    color: "#FE0100",
  },
  ARROWCOLOR: {
    color: "#D9D9D9",
  },
  TEXTCOLOR: {
    color: "#000000",
  },
  FILTERCOLOR: {
    color: "#FE0100",
  },
  IMAGEHOVERCOLOR: {
    color: "#FA2501",
  },
};
