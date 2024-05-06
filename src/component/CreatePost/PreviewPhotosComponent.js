import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid"; // UUID 라이브러리 가져오기

const UploaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    overflow: auto;

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

const ImageWithDeleteButton = ({ item, onDelete }) => {
  return (
    <div className="file-wrapper" key={item.id}>
      {item.type === "image" ? (
        <img src={item.preview_URL} alt="Preview" />
      ) : (
        <video src={item.preview_URL} autoPlay={false} controls={true} />
      )}
      <div className="delete-button" onClick={() => onDelete(item.id)}>
        Delete
      </div>
    </div>
  );
};

const PreviewPhotosComponent = () => {
  const [fileList, setFileList] = useState([]);
  let inputRef;

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

  return (
    <UploaderWrapper>
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
      <div className="upload-button">
        <button variant="contained" onClick={() => inputRef.click()}>
          Upload
        </button>
      </div>
    </UploaderWrapper>
  );
};

export default PreviewPhotosComponent;
