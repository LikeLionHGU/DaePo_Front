import React from "react";

const MyInfo = {
  name: "이한나",
  email: "22100595@handong.ac.kr",
  intro: "멋쟁이 아기사자 웹파트 이한나입니다.",
  image:
    "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
};

function IntroduceComponent() {
  return (
    <div>
      <h2>학생 프로필</h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <img
            src={MyInfo.image}
            alt="프로필 이미지"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
          <br></br>
          <input type="file" accept="image/*" />
        </div>
        <div>
          <label>
            이름:
            <input type="text" name="name" value={MyInfo.name} />
          </label>
          <br />
          <label>
            이메일:
            <input type="email" name="email" value={MyInfo.email} />
          </label>
          <br />
          <label>
            소개:
            <textarea name="intro" value={MyInfo.intro} />
          </label>
          <br />
        </div>
      </div>
    </div>
  );
}

export default IntroduceComponent;
