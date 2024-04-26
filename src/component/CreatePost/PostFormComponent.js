import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function PostFormComponent() {
  const [studentNum, setStudentNum] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [tools, setTools] = useState("");
  const [field, setField] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");

  //ToDo: 폼을 제출 시 함수
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      studentNum: studentNum,
      email: email,
      title: title,
      year: year,
      tools: tools,
      field: field,
      description: description,
      video: video,
    };
    console.log("CreatePost : ", formData);
  };
  return (
    <Div>
      <h2>포트폴리오 작성하기</h2>
      <form onSubmit={handleSubmit}>
        <label>
          학번
          <input
            type="text"
            value={studentNum}
            onChange={(e) => setStudentNum(e.target.value)}
          />
        </label>
        <br />
        <label>
          이메일
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          작품명:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          제작 연도:
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <br />
        <label>
          사용 툴:
          <input
            type="text"
            value={tools}
            onChange={(e) => setTools(e.target.value)}
          />
        </label>
        <br />
        <label>
          분야:
          <input
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
        </label>
        <br />
        <label>
          디그리 설명:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          미디어:
          <input
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">제출</button>
      </form>
    </Div>
  );
}

export default PostFormComponent;
