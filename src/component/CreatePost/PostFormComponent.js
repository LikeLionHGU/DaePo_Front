import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  NoCenterVertical,
  themeColors,
  Horizontal,
} from "../../styles/StyledComponents";

const TitleText = styled.div`
  border: none;
  border-left: 5px solid ${themeColors.MAINCOLOR.color};
  font-weight: bold;
  font-size: 32px;
  padding-left: 12px;
  margin-top: 100px;
  margin-bottom: 80px;
`;

const InfoText = styled.p`
  border: none;
  font-family: AUTHENTICSans130;
  font-size: 36px;
  width: 200px;
  margin-bottom: 50px;
`;

const InputText = styled.input`
  border: none;
  border-bottom: 1px solid ${themeColors.ARROWCOLOR.color};
  font-family: AUTHENTICSans90;
  font-size: 32px;
  margin-left: 80px;
  width: 90%;
  outline: none;
`;

const FileUploadRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const UpdateBT = styled.button`
  font-family: "AUTHENTICSans90";
  font-size: 22px;
  width: 200px;
  height: 65px;
  border: none;
  border-radius: 20px;
  background-color: ${themeColors.BTBOLOR.color};
  margin-top: 50px;
  cursor: pointer;
  margin-left: 40%;
  margin-bottom: 100px;
`;

const Textarea = styled.textarea`
  border: none;
  border-bottom: 1px solid ${themeColors.ARROWCOLOR.color};
  font-family: AUTHENTICSans90;
  font-size: 32px;
  margin-left: 80px;
  width: 90%;
  outline: none;
`;

const CustomFileInput = styled.label`
  background-color: #f0f0f0;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
`;

const FileName = styled.span`
  margin-left: 10px;
  font-family: AUTHENTICSans90;
`;

const FilePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 10px;
  width: 1000px;
  max-height: 800px;
  margin-top: 20px;
`;

const FilePreview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  height: 300px;
  position: relative; // 부모 컨테이너를 relative로 설정
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoPreview = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  position: absolute; // 절대 위치
  top: 20px;
  right: 20px;
`;

function PostFormComponent() {
  const [major, setMajor] = useState("");
  const [studentNum, setStudentNum] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [tools, setTools] = useState("");
  const [field, setField] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleFileChange = useCallback((event) => {
    const newFiles = Array.from(event.target.files).map((file) => ({
      id: uuidv4(),
      data: file,
      preview: URL.createObjectURL(file),
    }));
    setFiles((prev) => [...prev, ...newFiles]);
    setFileName(event.target.files.length ? event.target.files[0].name : "");
  }, []);

  const handleDeleteFile = useCallback(
    (fileId) => {
      const updatedFiles = files.filter((file) => file.id !== fileId);
      setFiles(updatedFiles);
      if (updatedFiles.length === 0) setFileName("");
      URL.revokeObjectURL(files.find((file) => file.id === fileId).preview);
    },
    [files]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      major: major,
      studentNum: studentNum,
      email: email,
      title: title,
      year: year,
      tools: tools,
      field: field,
      description: description,
      video: video,
      fileList: files,
    };
    console.log("CreatePost : ", formData);
  };

  return (
    <NoCenterVertical style={{ width: "80%" }}>
      <TitleText>학생 정보</TitleText>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        <Horizontal>
          <InfoText>전공</InfoText>
          <InputText
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </Horizontal>
        <Horizontal>
          <InfoText>학번</InfoText>
          <InputText
            type="text"
            value={studentNum}
            onChange={(e) => setStudentNum(e.target.value)}
          />
        </Horizontal>
        <Horizontal>
          <InfoText>이메일</InfoText>
          <InputText
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Horizontal>
        <Horizontal>
          <InfoText>작품명</InfoText>
          <InputText
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Horizontal>
        <TitleText style={{ marginBottom: "80px" }}>프로젝트 정보</TitleText>
        <Horizontal>
          <InfoText>제작 연도</InfoText>
          <InputText
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Horizontal>
        <Horizontal>
          <InfoText>사용 툴</InfoText>
          <InputText
            type="text"
            value={tools}
            onChange={(e) => setTools(e.target.value)}
          />
        </Horizontal>
        <Horizontal>
          <InfoText>분야</InfoText>
          <InputText
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
        </Horizontal>
        <Horizontal>
          <InfoText>작품 설명</InfoText>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Horizontal>
        <Horizontal>
          <InfoText>영상 링크</InfoText>
          <InputText
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </Horizontal>
        <Horizontal>
          <FileUploadRow>
            <InfoText>작품 파일</InfoText>

            <FilePreviewContainer>
              <div>
                <CustomFileInput htmlFor="file-input">
                  파일 선택
                  <input
                    id="file-input"
                    type="file"
                    multiple
                    accept="image/*, video/*"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </CustomFileInput>
                <FileName>{fileName}</FileName>
              </div>
              {files.map((file) => (
                <FilePreview key={file.id}>
                  {file.data.type.startsWith("image") ? (
                    <ImagePreview src={file.preview} alt="Image preview" />
                  ) : (
                    <VideoPreview controls src={file.preview} />
                  )}
                  <DeleteButton onClick={() => handleDeleteFile(file.id)}>
                    Delete
                  </DeleteButton>
                </FilePreview>
              ))}
            </FilePreviewContainer>
          </FileUploadRow>
        </Horizontal>
        <UpdateBT type="submit">작품 업로드</UpdateBT>
      </form>
    </NoCenterVertical>
  );
}

export default PostFormComponent;
