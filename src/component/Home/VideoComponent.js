import styled from "styled-components";
import ReactPlayer from "react-player";

// const Video = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   background-color: #d9d9d9;
//   width: 1074px;
//   height: 559px;
//   border-radius: 64px;
//   margin-top: 80px;
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  font-family: "AUTHENTICSans";
  font-weight: 130;
  font-size: 18px;
  color: gray;
`;

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const ArrowBar = styled.div`
  width: 2px;
  height: 20px;
  background-color: #ee7b00;
`;

const ArrowTip = styled.div`
  width: 12px;
  height: 12px;
  border-left: 2px solid #ee7b00;
  border-bottom: 2px solid #ee7b00;
  transform: rotate(-45deg);
  margin-top: -15px;
`;

function VideoComponent() {
  return (
    <Container>
      {/* <Video /> */}
      <ReactPlayer
        className="player"
        url={"https://youtu.be/AJ0QYT8NGow?feature=shared"}
        width="1074px"
        height="559px"
        playing={true}
        muted={true}
        controls={true}
        style={{ marginTop: "80px" }}
      />
      <Text>아래로 스크롤 하세요</Text>
      <ArrowContainer>
        <ArrowBar />
        <ArrowTip />
      </ArrowContainer>
    </Container>
  );
}

export default VideoComponent;
