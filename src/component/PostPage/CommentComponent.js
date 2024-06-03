import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  const [showDropdown, setShowDropdown] = useState(null);
  const [commentCount, setCommentCount] = useState(comment.length);

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
    setCommentCount(commentCount + 1); // Update the comment count
  };

  const deleteComment = () => {
    const updatedComments = comment.filter(
      (c) => c.uuid !== selectedComment.uuid
    );
    setComment(updatedComments);
    setCommentCount(commentCount - 1); // Update the comment count
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
    setShowDropdown(null); // Close dropdown when editing
  };

  const saveEditComment = () => {
    const updatedComments = comment.map((c) =>
      c.uuid === editingComment ? { ...c, content: editContent } : c
    );
    setComment(updatedComments);
    setEditingComment(null);
    setEditContent("");
  };

  const toggleDropdown = (uuid) => {
    if (showDropdown === uuid) {
      setShowDropdown(null);
    } else {
      setShowDropdown(uuid);
    }
  };

  // Fetch the comment count from an API
  useEffect(() => {
    const fetchCommentCount = async () => {
      // Replace with your API call
      // const response = await fetch('https://api.example.com/comments/count');
      // const data = await response.json();
      // setCommentCount(data.count);

      // For demonstration, using the length of comment array
      setCommentCount(comment.length);
    };

    fetchCommentCount();
  }, [comment]);

  return (
    <Root id="root">
      <div>
        <WritingArea id="writing-area">
          <TextareaWrapper>
            <Textarea id="new-comment-content"></Textarea>
            <Button id="submit-new-comment" onClick={addComment}>
              등록
            </Button>
          </TextareaWrapper>
          <CommentTitle>
            <span>댓글 {commentCount}</span>
          </CommentTitle>
        </WritingArea>
        <ul id="comment">
          <SinglecommentWrapper>
            {comment.map((c) => (
              <Savecomment key={c.uuid}>
                {!editingComment && (
                  <MoreButton onClick={() => toggleDropdown(c.uuid)}>
                    ■ ■ ■
                  </MoreButton>
                )}
                {showDropdown === c.uuid && (
                  <Dropdown>
                    <DropdownItem onClick={() => editComment(c)}>
                      수정
                    </DropdownItem>
                    <DropdownItem onClick={() => openModal(c)}>
                      삭제
                    </DropdownItem>
                  </Dropdown>
                )}
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
                {editingComment === c.uuid ? (
                  <>
                    <SaveButton onClick={saveEditComment}>완료</SaveButton>
                    <CancelButton onClick={() => setEditingComment(null)}>
                      취소
                    </CancelButton>
                  </>
                ) : null}
              </Savecomment>
            ))}
          </SinglecommentWrapper>
        </ul>
      </div>
      {showModal && (
        <Modal>
          <div>삭제하시겠습니까?</div>
          <Deletebutton onClick={deleteComment}>삭제</Deletebutton>
          <Cancelbutton onClick={closeModal}>취소</Cancelbutton>
        </Modal>
      )}
    </Root>
  );
};

export default CommentComponent;
