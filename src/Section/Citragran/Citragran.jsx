import React from "react";
import "./Citragran.scss";
import Produk1 from "./Produk1/Produk1.jsx";
import logoviola from "../../Media/Logo Ciputra/Citragrand Cibubur.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Glenviewimages from "./citragran.js";
import ViolaLimages from "./ViolaL.js";
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
    <div id="citragran" className="rumah">
      <div className="logo-viola">
        <img src={logoviola} alt="logo-viola" />
      </div>
      <div className="heroviola">
        <div className="slider-viola">
          <Slider {...settings1}>
            {ViolaLimages.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
        </div>
        <div className="desk-viola">
          CitraGran Cibubur adalah sebuah kawasan hunian modern yang
          dikembangkan oleh Grup Ciputra di lokasi strategis Jalan Alternatif
          Cibubur KM 4. Citragran Cibubur memiliki cluster terbaru yaitu Cluster
          Glenview. Desain rumah di CitraGran Cibubur memiliki tampilan yang
          elegan dan modern, menawarkan kenyamanan dan privasi bagi penghuninya.
          Dilengkapi dengan sistem keamanan yang lengkap, termasuk gerbang
          sendiri, CCTV, dan pelayanan keamanan 24 jam.
        </div>
      </div>
      <div className="cluster">
        <div className="devider-cluster">
          <div className="judul-cluster">Cluster in Citragran Cibubur</div>
          <div className="carousel-logocluster">
            <Slider {...settings1}>
              {Glenviewimages.map((image, index) => (
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
