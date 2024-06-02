import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  NoCenterVertical,
  themeColors,
  Horizontal,
} from "../../styles/StyledComponents";
import { LuUpload } from "react-icons/lu";

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
const ImageBT = styled.button`
  font-family: "AUTHENTICSans90";
  font-size: 22px;
  width: 20%;
  height: 80px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 100px;
  margin-top: 80px;
`;
const UploaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  .file-container {
    width: 600px;
    height: 400px;
    padding: 16px;
    margin: 32px 0;
    border: 1px solid slateblue;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto; /* 세로 스크롤 */
    max-height: 800px; /* 최대 높이 설정, 필요에 따라 조정 */
    gap: 10px; /* 파일 간의 간격 추가 */

    .file-wrapper {
      position: relative;
      flex-shrink: 0;
      width: 100%;
      height: 400px;
      margin: 10px 0;

      &:hover {
        .delete-button {
          opacity: 1;
          z-index: 1;
        }
      }

      img,
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .delete-button {
        color: red;
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
        opacity: 0;
        z-index: 0;
      }
    }
  }
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
  const [fileList, setFileList] = useState([]);
  let inputRef;

  const ImageWithDeleteButton = ({ item, onDelete }) => {
    return (
      <div className="file-wrapper" key={item.id}>
        {
          //item.type === "image" ? (
          <img src={item.preview_URL} alt="Preview" />
          // ) : (
          // <video src={item.preview_URL} autoPlay={false} controls={true} />
          // )
        }
        <div className="delete-button" onClick={() => onDelete(item.id)}>
          Delete
        </div>
      </div>
    );
  };

  const saveImage = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (files) {
      const newFileList = [];
      for (let i = 0; i < files.length; i++) {
        const preview_URL = URL.createObjectURL(files[i]);
        const fileType = files[i].type.split("/")[0];
        // UUID로 고유한 ID 생성
        const id = uuidv4();
        newFileList.push({
          id: id,
          fileObject: files[i],
          preview_URL: preview_URL,
          type: fileType,
        });
      }
      setFileList((prevFileList) => [...prevFileList, ...newFileList]);
    }
  };
  const deleteImage = (id) => {
    setFileList((prevFileList) => {
      const updatedFileList = prevFileList.filter((item) => item.id !== id);
      const deletedItem = prevFileList.find((item) => item.id === id);
      URL.revokeObjectURL(deletedItem.preview_URL);
      return updatedFileList;
    });
  };

  useEffect(() => {
    return () => {
      fileList?.forEach((item) => {
        URL.revokeObjectURL(item.preview_URL);
      });
    };
  }, [fileList]);

  //ToDo: 폼을 제출 시 함수
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
      fileList: fileList,
    };
    console.log("CreatePost : ", formData);
  };
  return (
    <NoCenterVertical style={{ width: "80%" }}>
      <TitleText>학생 정보</TitleText>
      <form onSubmit={handleSubmit}>
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
        <UploaderWrapper>
          <InfoText>작품 업로드</InfoText>
          <ImageBT
            className="img-button"
            variant="contained"
            onClick={() => inputRef.click()}
          >
            <LuUpload />
          </ImageBT>
          <input
            type="file"
            multiple={true}
            accept="video/*, image/*"
            onChange={saveImage}
            onClick={(e) => (e.target.value = null)}
            ref={(refParam) => (inputRef = refParam)}
            style={{ display: "none" }}
          />
          <div className="file-container">
            {fileList?.map((item) => (
              <ImageWithDeleteButton
                key={item.id}
                item={item}
                onDelete={deleteImage}
              />
            ))}
          </div>
        </UploaderWrapper>
        <UpdateBT type="submit">작품 업로드</UpdateBT>
      </form>
    </NoCenterVertical>
  );
}

export default PostFormComponent;
