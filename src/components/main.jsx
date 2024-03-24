import React from "react";

import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://footballjersey.shop/cdn/shop/files/Sale_Banner_football_jersey.jpg?v=1676659119&width=1500"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://resources.evertonfc.com/photo-resources/2024/03/08/a8be5f3c-3156-431d-8703-2ff36e109bd1/Splash_Page.png?width=2000&height=1125"
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://storage.pixteller.com/designs/designs-images/2020-12-21/05/sport-shoes-sale-banner-1-5fe0bc1f11c83.png"
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;