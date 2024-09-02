import React from "react";
import "./ruko.scss";
import Ruko1 from "./Produk1/ruko1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import commercialsimages from "./commercial";

const settings1 = {
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ruko = () => {
  return (
    <div id="ruko" className="ruko">
      <div className="cluster">
        <div className="devider-cluster">
          <div className="judul-cluster">Commercial's in Ciputra Cibubur</div>
          <div className="carousel-logocluster">
            <Slider {...settings1}>
              {commercialsimages.map((image, index) => (
                <img
                  className="kartugambar12"
                  key={index}
                  src={image}
                  alt="logo"
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div>
        <div className="Judul"></div>
        <div className="ruko-card">
          <Ruko1 />
        </div>
      </div>
    </div>
  );
};

export default ruko;
