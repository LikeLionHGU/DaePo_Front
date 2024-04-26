import styled from "styled-components";

const postDetail = [
  {
    postId: 1,
    likedNum: 10,
    commentNum: 2,
  },
  {
    postId: 2,
    likedNum: 100,
    commentNum: 28,
  },
  {
    postId: 3,
    likedNum: 60,
    commentNum: 10,
  },
];
function TitleComponent() {
  const Text = styled.p`
    color: black;
    font-size: 24px;
  `;
  return <Text>Duck</Text>;
}

export default TitleComponent;
