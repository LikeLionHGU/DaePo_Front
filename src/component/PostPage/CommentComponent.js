import React, { useState } from "react";
import styled from "styled-components";

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
`;

const CommentComponent = () => {
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
            {comment.map((comment) => (
              <div className="comment" key={comment.uuid}>
                <div className="writer">{comment.writer}</div>
                <div className="date">{comment.date}</div>
                <div className="content">{comment.content}</div>
              </div>
            ))}
          </SinglecommentWrapper>
        </ul>
      </div>
    </Root>
  );
};

export default CommentComponent;
