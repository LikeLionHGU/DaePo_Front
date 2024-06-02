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
};

export default CommentComponent;
