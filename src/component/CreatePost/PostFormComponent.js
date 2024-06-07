import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  NoCenterVertical,
  themeColors,
  Horizontal,
} from "../../styles/StyledComponents";
import { LuLink } from "react-icons/lu";
import upload from "../../img/upload.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  font-size: 28px;
  width: 200px;
  margin-bottom: 50px;
`;

const InputText = styled.input`
  border: none;
  border-bottom: 1px solid ${themeColors.ARROWCOLOR.color};
  font-family: AUTHENTICSans90;
  font-size: 24px;
  margin-left: 80px;
  width: 90%;
  outline: none;
`;
const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 80px;
`;
const SelectBox = styled.select`
  border: none;
  border-bottom: 1px solid ${themeColors.ARROWCOLOR.color};
  outline: none;
  margin-left: 80px;
  width: 90%;
  padding: 5px;
  font-size: 24px;
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
  margin-left: 45%;
  margin-bottom: 100px;
`;

const Textarea = styled.textarea`
  border: none;
  border-bottom: 1px solid ${themeColors.ARROWCOLOR.color};
  font-family: AUTHENTICSans90;
  font-size: 24px;
  margin-left: 80px;
  width: 90%;
  outline: none;
`;

const CustomFileInput = styled.label`
  background-color: white;

  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
`;

const FileName = styled.span`
  margin-left: 10px;
  font-family: AUTHENTICSans90;
  color: white;
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
  width: 90%;
  margin-left: 80px;
  max-height: 800px;
`;

const FilePreview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  height: 300px;
  position: relative;
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
  const navigate = useNavigate();

  const [major, setMajor] = useState("");
  const [studentNum, setStudentNum] = useState("");
  const [contact, setContact] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [tools, setTools] = useState("");
  const [field, setField] = useState("");
  const [content, setContent] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [error, setError] = useState(false);
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
    const youtubePattern =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    if (!youtubePattern.test(videoURL)) {
      setError(true);
    } else {
      setError(false);
      // 업로드 로직 추가
      const formData = new FormData();
      formData.append("major", major);
      formData.append("studentNum", studentNum);
      formData.append("contact", contact);
      formData.append("title", title);
      formData.append("year", year);
      formData.append("tools", tools);
      formData.append("field", field);
      formData.append("content", content);
      formData.append("videoURL", videoURL);
      files.forEach((file) => {
        formData.append("image", file.data); // 파일 배열을 추가하는 경우
      });

      for (let pair of formData.entries()) {
        if (pair[1] instanceof File) {
          console.log(
            `${pair[0]}: ${pair[1].name}, size: ${pair[1].size} bytes`
          );
        } else {
          console.log(`${pair[0]}: ${pair[1]}`);
        }
      }
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/posts`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
          maxRedirects: 0,
        })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log("Request successful");
          console.log("Response data:", response.data);
          navigate("/DaePo/PortFolio");
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });
    }
  };

  return (
    <NoCenterVertical style={{ width: "65%" }}>
      <TitleText>학생 정보</TitleText>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        <Horizontal>
          <InfoText>전공</InfoText>
          <SelectBox value={major} onChange={(e) => setMajor(e.target.value)}>
            <option value="" disabled>
              전공 선택
            </option>
            <option value="시각디자인">시각디자인</option>
            <option value="제품디자인">제품디자인</option>
          </SelectBox>
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
            value={contact}
            onChange={(e) => setContact(e.target.value)}
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
          <SelectBox value={tools} onChange={(e) => setTools(e.target.value)}>
            <option value="" disabled>
              사용 툴
            </option>
            <option value="포토샵">포토샵</option>
            <option value="일러스트">일러스트</option>
            <option value="인디자인">인디자인</option>
            <option value="블렌더">블렌더</option>
            <option value="라이노">라이노</option>
            <option value="스케치">스케치</option>
            <option value="프리미엄프로">프리미엄프로</option>
            <option value="에프터이팩트">에프터이팩트</option>
            <option value="피그마">피그마</option>
          </SelectBox>
        </Horizontal>
        {/* <Horizontal>
          <InfoText>분야</InfoText>
          <InputText
            type="text"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
        </Horizontal> */}
        <Horizontal>
          <InfoText>작품 설명</InfoText>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Horizontal>
        <Horizontal>
          <InfoText>영상 링크</InfoText>
          <NoCenterVertical>
            <InputText
              type="text"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
            />
            {error && <ErrorText>유튜브 영상링크만 업로드해주세요</ErrorText>}
          </NoCenterVertical>
          <LuLink style={{ fontSize: "25px" }} />
        </Horizontal>

        <Horizontal>
          <FileUploadRow>
            <InfoText>작품 파일</InfoText>
            <FilePreviewContainer>
              <div>
                <CustomFileInput htmlFor="file-input">
                  <img src={upload} alt="upload" style={{ width: 70 }} />
                  <input
                    id="file-input"
                    type="file"
                    multiple
                    accept="image/*, video/*"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </CustomFileInput>
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
