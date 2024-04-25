import React, { useState } from "react";

const MyInfo = {
  name: "이한나",
  email: "22100595@handong.ac.kr",
  intro: "멋쟁이 아기사자 웹파트 이한나입니다.",
  image:
    "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
};

function EditInfoComponent() {
  const [formData, setFormData] = useState(MyInfo);
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevState) => ({
        ...prevState,
        image: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("수정된 정보:", formData);
    console.log("수정된 이미지:", imageFile);
  };

  return (
    <div>
      <h2>학생 프로필</h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <img
            src={formData.image}
            alt="프로필 이미지"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
          <br></br>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              이름:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              이메일:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              소개:
              <textarea
                name="intro"
                value={formData.intro}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">정보 수정</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditInfoComponent;
