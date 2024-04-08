import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function LikeComponent() {
  const [heart, setHeart] = useState(false);

  const handleHeart = () => {
    const newHeartValue = !heart;
    setHeart(newHeartValue);
    if (newHeartValue) {
      console.log("저장됨");
    } else {
      console.log("취소됨");
    }
  };
  return (
    <div onClick={handleHeart}>
      {heart ? (
        <AiFillHeart style={{ color: "red", fontSize: "30px" }} />
      ) : (
        <AiOutlineHeart style={{ fontSize: "30px" }} />
      )}
    </div>
  );
}

export default LikeComponent;
