import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselController = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (eventKey: number) => {
    setIndex(eventKey);
  };

  const slide_1 = require("../../assets/img/slide/slide_1.jpg");
  const slide_2 = require("../../assets/img/slide/slide_2.jpg");
  const slide_3 = require("../../assets/img/slide/slide_3.jpg");

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100 home__slide__img" src={slide_1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 home__slide__img" src={slide_2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 home__slide__img" src={slide_3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselController;
