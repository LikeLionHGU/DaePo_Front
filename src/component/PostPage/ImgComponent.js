import styled from "styled-components";

const Img = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 700px;
  margin-top: 20px;
`;
function ImgComponent({ post }) {
  console.log("post", post);
  if (!post || !post.imageURLs || post.imageURLs.length === 0) {
    return <div>이미지를 불러올 수 없습니다.</div>;
  }

  return (
    <div>
      {post.imageURLs.map((img, index) => (
        <Img src={img.imageURL} alt={index} />
      ))}
    </div>
  );
}

export default ImgComponent;
