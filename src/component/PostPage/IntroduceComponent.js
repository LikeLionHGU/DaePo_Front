import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import duck1 from "../../img/duck1.png";
import emailimg from "../../img/email.png";
import coffechatimg from "../../img/coffechat.png";
import commentimg from "../../img/comment.png";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
const BT = styled.div`
  display: flex;
  align-items: center; /* Added this to align items in the center */
`;
const LikeBT = styled.button`
  width: 80px;
  height: 38px;
  padding-left: 0px;
  border-radius: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 80px;
  display: flex; /* Added this to use flexbox */
  align-items: center; /* Align items vertically */
  justify-content: center; /* Align items horizontally */
`;

const ChatBT = styled.button`
  width: 60px;
  height: 18px;
  margin-left: 10px;
  background-color: black;
  color: white;
  font-size: 10px;
  border-radius: 5px;
`;

const TopSection = styled.div`
  display: flex;
  position: relative;
  border-top: 3px solid black;
  padding: 20px;
  width: 97%;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: #e0e0e0;
  margin-left: -20px;
`;

const TextContainer = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
`;

const Designer = styled.h2`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
`;

const Contact = styled.h2`
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Explain = styled.h2`
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Adress = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Email = styled.a`
  margin-left: 15px;
  margin-bottom: 0px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const Behance = styled.a`
  margin-top: 0px;
  margin-left: 83px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const RightSection = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 100px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
`;

const PostDescription = styled.div`
  font-size: 14px;
  line-height: 1.5;
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px;
  width: 358px;
  height: 230px;
  position: absolute;
  left: 550px;
`;

const Tags = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 25px;
  width: 100%;
`;

const Tag = styled.span`
  margin-right: 30px;
  font-weight: bold;
`;

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const WritingArea = styled.div`
  width: 800px;
  margin-top: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const Button = styled.button``;

const SinglecommentWrapper = styled.div`
  .comment {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: relative;
  }
  .writer {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .date {
    font-size: 12px;
    color: #888;
    margin-bottom: 5px;
  }
  .content {
    font-size: 16px;
  }
  .edit-textarea {
    width: calc(100% - 20px);
    margin-bottom: 10px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

function CommentComponent() {
  const [comment, setComment] = useState([
    {
      uuid: 1,
      writer: "김하영",
      date: "2024-04-08",
      content: "대포",
    },
    {
      uuid: 2,
      writer: "이한나",
      date: "2024-04-12",
      content: "렛츠고!",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [editingComment, setEditingComment] = useState(null);
  const [editContent, setEditContent] = useState("");

  const addComment = () => {
    const value = document.querySelector("#new-comment-content").value;
    setComment([
      ...comment,
      {
        uuid: comment.length + 1,
        writer: "김하영",
        date: new Date().toISOString().slice(0, 10),
        content: value,
      },
    ]);
  };

  const deleteComment = () => {
    const updatedComments = comment.filter(
      (c) => c.uuid !== selectedComment.uuid
    );
    setComment(updatedComments);
    setShowModal(false);
  };

  const openModal = (selected) => {
    setSelectedComment(selected);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const editComment = (selected) => {
    setEditingComment(selected.uuid);
    setEditContent(selected.content);
  };

  const saveEditComment = () => {
    const updatedComments = comment.map((c) =>
      c.uuid === editingComment ? { ...c, content: editContent } : c
    );
    setComment(updatedComments);
    setEditingComment(null);
    setEditContent("");
  };

  return (
    <Root id="root">
      <div>
        <div>작성자: 김하영</div>
        <WritingArea id="writing-area">
          <Textarea id="new-comment-content"></Textarea>
          <Button id="submit-new-comment" onClick={addComment}>
            게시
          </Button>
        </WritingArea>
        <ul id="comment">
          <SinglecommentWrapper>
            {comment.map((c) => (
              <div className="comment" key={c.uuid}>
                <div className="writer">{c.writer}</div>
                <div className="date">{c.date}</div>
                {editingComment === c.uuid ? (
                  <Textarea
                    className="edit-textarea"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  ></Textarea>
                ) : (
                  <div className="content">{c.content}</div>
                )}
                {editingComment === c.uuid ? (
                  <>
                    <Button onClick={saveEditComment}>저장</Button>
                    <Button onClick={() => setEditingComment(null)}>
                      취소
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => editComment(c)}>수정</Button>
                )}
                <Button onClick={() => openModal(c)}>삭제</Button>
              </div>
            ))}
          </SinglecommentWrapper>
        </ul>
      </div>
      {showModal && (
        <Modal>
          <div>삭제하시겠습니까?</div>
          <Button onClick={deleteComment}>삭제</Button>
          <Button onClick={closeModal}>취소</Button>
        </Modal>
      )}
    </Root>
  );
}

function IntroduceComponent({}) {
  const [heart, setHeart] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    fetch("https://api.example.com/likes")
      .then((response) => response.json())
      .then((data) => setLikeCount(data.likeCount))
      .catch((error) => console.error("Error fetching like count:", error));

    fetch("https://api.example.com/comments/count")
      .then((response) => response.json())
      .then((data) => setCommentCount(data.commentCount))
      .catch((error) => console.error("Error fetching comment count:", error));
  }, []);

  const scrollToComments = () => {
    document
      .getElementById("comment-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleHeart = () => {
    const newHeartValue = !heart;
    setHeart(newHeartValue);
    if (newHeartValue) {
      setLikeCount(likeCount + 1);
      fetch("https://api.example.com/likes", {
        method: "POST",
        body: JSON.stringify({ like: true }),
      }).catch((error) => console.error("Error updating like count:", error));
    } else {
      setLikeCount(likeCount - 1);
      fetch("https://api.example.com/likes", {
        method: "POST",
        body: JSON.stringify({ like: false }),
      }).catch((error) => console.error("Error updating like count:", error));
    }
  };

  return (
    <Wrapper>
      <BT>
        <LikeBT onClick={handleHeart}>
          {heart ? (
            <AiFillHeart style={{ color: "#F8CA99", fontSize: "30px" }} />
          ) : (
            <AiOutlineHeart style={{ color: "#dddddd", fontSize: "30px" }} />
          )}
          <span style={{ marginLeft: "10px" }}>{likeCount}</span>
        </LikeBT>
        <LikeBT onClick={scrollToComments}>
          <img
            src={commentimg}
            alt="comment"
            style={{ width: "23px", height: "23px" }}
          />
          <span style={{ marginLeft: "10px" }}>{commentCount}</span>
        </LikeBT>
      </BT>
      <TopSection>
        <Link to="/DaePo/Profile/:id">
          <ProfileImage src={duck1} alt="Profile Image" />
        </Link>
        <TextContainer>
          <Title>제목</Title>
          <Designer>디자이너</Designer>
          <Adress>
            <ContactRow>
              <Contact>Contact</Contact>
              <Email href="mailto:22200000@gmail.com">
                <img
                  src={emailimg}
                  alt="Email Icon"
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                />
                22200000@gmail.com
                <ChatBT>커피챗</ChatBT>
              </Email>
            </ContactRow>
            <Behance href="http://www.behance.net" target="_blank">
              <img
                src={coffechatimg}
                alt="Behance Icon"
                style={{ width: "18px", height: "18px", marginRight: "5px" }}
              />
              www.behance.net
            </Behance>
          </Adress>
        </TextContainer>
        <PostDescription>
          <Explain>작품 설명</Explain>이 작품은 가상현실과 현실세계의 모호함을
          나타냈으며 그 사이의 괴리감을 풀어내기 위한 어쩌구 저쩌구로서 너무
          줄리네요. 다음 확인할 때 늦지 않게 디자인 바꿔서 정말 정말 죄송합니다.
          프론트엔드 너무 잘하세요. 어쩌구 그렇게 다들 예쁜말만 해주시느지 이번
          학기에도 화이팅하고 행복하세요.. 다들 학기 마무리 잘하시길 기도할게용
        </PostDescription>
      </TopSection>
      <RightSection>
        <Tags>
          <Tag># 서비스 디자인</Tag>
          <Tag># Figma</Tag>
          <Tag># illustrator</Tag>
        </Tags>
      </RightSection>
    </Wrapper>
  );
}

export default IntroduceComponent;
