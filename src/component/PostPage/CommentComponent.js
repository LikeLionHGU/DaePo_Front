import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WritingArea = styled.div`
  width: 800px;
  margin-top: 20px;
  border-top: 3px solid black;
  position: relative;
`;

const TextareaWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 3px solid black;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SaveTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 3px solid black;
  padding: 10px;
  box-sizing: border-box;
  border: none !important;
  outline: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentTitle = styled.div`
  width: 92.5%;
  margin-left: 40px;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #999898;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  position: absolute;
  bottom: 25px;
  right: 15px;
  background-color: white;
  color: black;
  border: none !important;
  outline: none !important;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;

const MoreButton = styled.button`
  background-color: white;
  color: black;
  border: none !important;
  outline: none !important;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
  position: absolute;
  top: 2px;
  right: 2px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  z-index: 1;
  width: 80px;
  height: 20px;
`;

const DropdownItem = styled.button`
  border-bottom: 1px solid white;
  background-color: black;
  color: white;
  outline: none !important;
  cursor: pointer;
  font-size: 13px;
  width: 100%;
  height: 100%;
  font-size: 10px;
  text-align: center;
`;

const SaveButton = styled.button`
  position: absolute;
  bottom: 45px;
  right: 90px;
  background-color: white;
  color: black;
  border: none !important;
  outline: none !important;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
`;

const CancelButton = styled.button`
  position: absolute;
  bottom: 45px;
  right: 52px;
  background-color: white;
  color: black;
  border: none !important;
  outline: none !important;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
`;

const Deletebutton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 55px;
  background-color: white;
  color: black;
  border: none !important;
  outline: none !important;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
`;

const Cancelbutton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: white;
  color: black;
  border: none !important;
  outline: none !important;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
`;

const Savecomment = styled.div`
  width: 98%;
  padding-bottom: 20px;
  margin-bottom: 20px;
  position: relative;
  border-bottom: 1px solid #999898;
`;

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
  transform: translate(-50%, 0%);
  background-color: #e5e5e5;
  padding: 20px;
  border-radius: 5px;
  border: 1.5px solid black;
  height: 70px;
  width: 250px;
`;

const CommentComponent = () => {
  const { id } = useParams();
  const [comment, setComment] = useState([]);

  const [editingComment, setEditingComment] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [commentCount, setCommentCount] = useState(comment.length);
  const [commentsLength, setCommentsLength] = useState(0); // 상태로 변경

  //댓글 작성 api 연결
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/comment/add/${id}`,
        {
          content: value,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        window.location.reload();
        console.log("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Fetch the comment count from an API
  useEffect(() => {
    const fetchCommentCount = async () => {
      // Replace with your API call
      // const response = await fetch('https://api.example.com/comments/count');
      // const data = await response.json();
      // setCommentCount(data.count);

      // For demonstration, using the length of comment array
      // 댓글 불러오기
      fetch(`${process.env.REACT_APP_BASE_URL}/comment/byPost/${id}`, {
        method: "GET",
        // mode: "no-cors",
        credentials: "include",
      })
        .then((response) => response.text()) // 응답 본문만 읽을 수 있음
        .then((data) => {
          const parsedData = typeof data === "string" ? JSON.parse(data) : data;
          setComment(parsedData.comments);
          setCommentsLength(parsedData.comments.length); // 상태 업데이트
          console.log("정보 확인해서 postId로 댓글 불러오기", parsedData);
        })
        .catch((error) => console.error(error));
      setCommentCount(comment.length);
    };

    fetchCommentCount();
  }, []);

  return (
    <Root id="root">
      <div>
        <WritingArea id="writing-area">
          <TextareaWrapper>
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <Textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Write your comment..."
              ></Textarea>
              <Button type="submit">등록</Button>
            </form>
          </TextareaWrapper>
          <CommentTitle>
            <span>댓글 {commentsLength}</span>
          </CommentTitle>
        </WritingArea>
        <ul id="comment">
          <SinglecommentWrapper>
            {comment.map((c) => (
              <Savecomment key={c.uuid}>
                <div className="writer">{c.writer}</div>
                {/* <div className="date">{c.date}</div> */}
                {editingComment === c.uuid ? (
                  <SaveTextarea
                    className="edit-textarea"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                  ></SaveTextarea>
                ) : (
                  <div className="content">{c.content}</div>
                )}
              </Savecomment>
            ))}
          </SinglecommentWrapper>
        </ul>
      </div>
    </Root>
  );
};

export default CommentComponent;
