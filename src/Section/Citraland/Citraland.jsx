import React from "react";
import "./Citraland.scss";
import Produk1 from "./Produk1/Produk1.jsx";
import logoviola from "../../Media/Logo Ciputra/Citraland Cibubur.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RegiaLimages from "./RegiaL.js";
import citralandimages from "./citraland.js";
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
    <div id="citraland" className="rumahregia">
      <div className="logo-regia">
        <img src={logoviola} alt="logo-regia" />
      </div>
      <div className="heroregia">
        <div className="slider-regia">
          <Slider {...settings1}>
            {RegiaLimages.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
        </div>
        <div className="desk-regia">
          CitraLand Cibubur adalah sebuah perumahan kelas premium yang
          dikembangkan oleh Ciputra Group di kawasan Cibubur. Kawasan ini
          memiliki luas lahan 220 HA, dengan 200 HA untuk Landed House dan 20 HA
          untuk Pusat Commercial Area (CBD). CitraLand Cibubur terdiri dari
          beberapa cluster seperti, Cluster Montana, Cluster Monterrey, Cluster
          Monteverde. CitraLand Cibubur memiliki konsep "Festive Urban Living"
          yang menawarkan kawasan hunian eksklusif dengan atmosfer hijau dan
          modern.
        </div>
      </div>
      <div className="cluster">
        <div className="devider-cluster">
          <div className="judul-cluster">Cluster in Citraland Cibubur</div>
          <div className="carousel-logocluster">
            <Slider {...settings1}>
              {citralandimages.map((image, index) => (
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
