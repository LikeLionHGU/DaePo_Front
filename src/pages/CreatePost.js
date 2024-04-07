import React, { useState } from "react";

function CreatePost() {
  const [professor, setProfessor] = useState("");
  const [tools, setTools] = useState("");
  const [year, setYear] = useState("");
  const [field, setField] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //ToDo: 폼을 제출 시 함수
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      professor: professor,
      tools: tools,
      year: year,
      field: field,
      title: title,
      description: description,
    };
    console.log("CreatePost : ", formData);
  };
  return (
    <div>
      <h2>포트폴리오 작성하기</h2>
      <form onSubmit={handleSubmit}>
        <label>
          담당 교수님:
          <input
            type="text"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
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
          제작 연도:
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
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
          작품명:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default CreatePost;
