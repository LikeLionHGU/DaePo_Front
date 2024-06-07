import React, { useState, useEffect } from "react";
import styled from "styled-components";
import duck1 from "../../img/Rectangle 565.png";
import duck2 from "../../img/Rectangle 566.png";
import duck3 from "../../img/Rectangle 567.png";
import duck4 from "../../img/Rectangle 568.png";
import duck5 from "../../img/Rectangle 569.png";

const StartButton = styled.button`
  background-color: #ffffff;
  border: 2.3px solid #ee7b00;
  border-radius: 50%;
  color: #ee7b00;
  font-size: 22px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const CarouselBarContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-top: 10px;
  border: 2px solid white;
  border-radius: 200px;
  background-color: white;
  width: 250px;
  height: 51px;
  margin-top: 40px;
`;

const CarouselBarDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#ee7b00" : "#ffffff")};
  border: 2.3px solid #ee7b00;
  margin-top: 10px;
  margin-right: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to left, #ff9532, #ffebd9);
  width: 100%;
  height: 600px;
  padding-bottom: 200px;
  margin-bottom: 80px;
`;
const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 150px;
  margin-bottom: 50px;
  font-family: "AUTHENTICSans150";
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
const SubTitle = styled.div`
  padding-top: 27px;
  margin-bottom: 50px;
  font-family: "AUTHENTICSans90";
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Text = styled.div`
  font-family: "AUTHENTICSans";
  font-weight: 130;
  font-size: 18px;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  margin-right: 40px;
`;
const CarouselImage = styled.img`
  width: ${(props) =>
    props.isSmallest
      ? "190px"
      : props.isSmall
      ? "250px"
      : props.isCenter
      ? "330px"
      : "240px"};
  height: ${(props) =>
    props.isSmallest
      ? "190px"
      : props.isSmall
      ? "250px"
      : props.isCenter
      ? "330px"
      : "240px"};
  margin: 0 10px;
  transition: transform 0.5s ease-out;
  opacity: ${(props) => (props.isCenter ? "1" : "0.7")};

  border-radius: 24px;
  border: 6px solid rgba(255, 255, 255, 0.5);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const visibleImages = [];
  for (let i = 0; i < 5; i++) {
    visibleImages.push(images[(currentIndex + i) % images.length]);
  }

  const rightSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let intervalId;
    if (autoRotate) {
      intervalId = setInterval(rightSlide, 1500);
    }
    return () => clearInterval(intervalId);
  }, [autoRotate]);

  const toggleAutoRotate = () => {
    setAutoRotate((prev) => !prev);
  };

  const CarouselBar = ({ currentIndex, totalImages }) => {
    return (
      <CarouselBarContainer>
        {Array.from({ length: totalImages }, (_, index) => (
          <CarouselBarDot key={index} isActive={index === currentIndex} />
        )).reverse()}
        <StartButton onClick={toggleAutoRotate}>
          {autoRotate ? "∥" : "▷"}
        </StartButton>
      </CarouselBarContainer>
    );
  };

  return (
    <div className="carousel">
      <Title>BEST PROJECT</Title>
      {/* <SubTitle>
        이곳은 영상 설명이 간략하게 들어가는 공간입니다
        <br /> 2-3문장이면 좋을 것 같아요.
      </SubTitle> */}
      <ImageContainer>
        <CarouselContainer>
          {visibleImages.map((image, index) => (
            <CarouselImage
              key={index}
              src={image}
              alt={`Images ${index}`}
              className="slide"
              isSmallest={index === 0 || index === 4}
              isSmall={index === 1 || index === 3}
              isCenter={index === 2}
              isLarge={index === 2}
            />
          ))}
        </CarouselContainer>
      </ImageContainer>

      <CarouselBar currentIndex={currentIndex} totalImages={images.length} />
      {/* <Text>프로젝트 더 보러가기 {`>>`} </Text> */}
    </div>
  );
};

const CarouselComponent = () => {
  const images = [duck1, duck2, duck3, duck4, duck5];

  return (
    <Container>
      <Carousel images={images} />
    </Container>
  );
};

export default CarouselComponent;
