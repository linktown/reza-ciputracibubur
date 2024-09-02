import React from "react";
import "./CBD.scss";
import Produk1 from "./Produk1/Produk1.jsx";
import logoviola from "../../Media/Logo Ciputra/Citragrand Cibubur CBD.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import JasmiaLimages from "./JasmiaL.js";
import cbdimages from "./CBD.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckDouble} from "@fortawesome/free-solid-svg-icons";

const rumah = () => {
  const settings1 = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const items = [
    "Clubhouse",
    "Swimming Pool",
    "Children Playground",
    "Multifunction Room",
    "Communal Park",
    "Face Recognition System Gate",
    "Security 24 Hours",
  ];
  return (
    <div id="cbd" className="rumahjasmia">
      <div className="logo-jasmia">
        <img src={logoviola} alt="logo-jasmia" />
      </div>
      <div className="herojasmia">
        <div className="slider-jasmia">
          <Slider {...settings1}>
            {JasmiaLimages.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
        </div>
        <div className="desk-jasmia">
          CitraGrand Cibubur CBD adalah sebuah proyek perumahan dan bisnis
          terpadu yang dikembangkan oleh Ciputra Group di kawasan Cibubur.
          "Redefined Modern Living" yang menawarkan integrasi antara hunian
          berkualitas dan fasilitas bisnis modern. Kawasan ini terbagi menjadi
          40% area residensial dan 60% area bisnis. Termasuk lifestyle center,
          education center, health & wellness center, serta berbagai fasilitas
          lain seperti clubhouse dengan gym dan kolam renang, jogging track,
          masjid, ATM center, dan Universitas Ciputra.
        </div>
      </div>
      <div className="cluster">
        <div className="devider-cluster">
          <div className="judul-cluster">Cluster in Citragrand CBD</div>
          <div className="carousel-logocluster">
            <Slider {...settings1}>
              {cbdimages.map((image, index) => (
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
        <div className="rumah-card">
          <Produk1 />
        </div>
      </div>
    </div>
  );
};

export default rumah;
