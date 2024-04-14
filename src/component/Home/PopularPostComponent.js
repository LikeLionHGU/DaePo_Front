import React, { useState } from "react";
import styled from "styled-components";
import duck1 from "../../img/duck1.png";
import duck2 from "../../img/duck2.png";
import duck3 from "../../img/duck3.png";
import duck4 from "../../img/duck4.png";
import duck5 from "../../img/duck5.png";
import duck6 from "../../img/duck6.png";
import duck7 from "../../img/duck7.png";
import duck8 from "../../img/duck8.png";

const LRButton = styled.button`
  background-color: white;
  border: white;
  font-size: 80px;
`;
const Container = styled.div``;
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CarouselImage = styled.img`
  width: ${(props) => (props.isCenter ? "250px" : "220px")};
  height: ${(props) => (props.isCenter ? "250px" : "220px")};
  margin: 0 10px;
`;
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = [];
  for (let i = 0; i < 4; i++) {
    visibleImages.push(images[(currentIndex + i) % images.length]);
  }

  const leftSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const rightSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <ImageContainer>
        <LRButton onClick={leftSlide}>{"<"}</LRButton>
        <CarouselContainer>
          {visibleImages.map((image, index) => (
            <CarouselImage
              key={index}
              src={image}
              alt={`Images ${index}`}
              className="slide"
              isCenter={index === 1 || index === 2} // 중간 이미지는 크게 표시
            />
          ))}
        </CarouselContainer>
        <LRButton onClick={rightSlide}>{">"}</LRButton>
      </ImageContainer>
    </div>
  );
};

const PopularPostComponent = () => {
  const images = [duck1, duck2, duck3, duck4, duck5, duck6, duck7, duck8];

  return (
    <Container>
      <Carousel images={images} />
    </Container>
  );
};

export default PopularPostComponent;
