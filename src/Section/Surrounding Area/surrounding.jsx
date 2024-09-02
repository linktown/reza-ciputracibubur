import React from "react";
import "./surrounding.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Surroundingimages from "./surrounding.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faGraduationCap,
  faHouse,
  faMapPin,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";

const lokasi = () => {
  const settings = {
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
  return (
    <div id="surroundingarea" className="surroundingarea">
      <div className="container-surrounding">
        <div id="surrounding" className="judul-surrounding">
          <h1>Surrounding Area</h1>
        </div>
        <div className="container-card">
          <div className="kartu">
            <Slider {...settings}>
              {Surroundingimages.map((image, index) => (
                <div>
                  <img
                    className="kartugambar1"
                    key={index}
                    src={image}
                    alt="athena"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="surroundinglist">
        <div className="benefit-container">
          <div className="benefit-point">
            <div className="benefit-title">
              <FontAwesomeIcon icon={faGraduationCap} /> &nbsp;Education
            </div>
            <div className="benefit">
              <div className="point">
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;Citra Berkat School
                <br />
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;Labschool Cibubur
                <br />
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;Global Mandiri School
                <br />
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;Sekolah Pilar Indonesia
              </div>
            </div>
          </div>
          <div className="benefit-point">
            <div className="benefit-title">
              <FontAwesomeIcon icon={faHouse} /> &nbsp;Health Care
            </div>
            <div className="benefit">
              <div className="point">
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp; Eka Hospital Cibubur
                <br />
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;Mitra Keluarga Hospital Cibubur
                <br />
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;Permata Hospital Cibubur
                <br />
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;Meilia Hospital Cibubur
              </div>
            </div>
          </div>
          <div className="benefit-point">
            <div className="benefit-title">
              <FontAwesomeIcon icon={faRoad} /> &nbsp;Accessibility
            </div>
            <div className="benefit">
              <div className="point">
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;15 Menit ke Pintu Tol Narogong
                <br />
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;1 Menit ke Pintu Tol Jatikarya Cibubur
                <br />
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;Living World Mall
                <br />
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;AEON Mall
                <br />
                <FontAwesomeIcon icon={faMapPin} />
                &nbsp;&nbsp;Mall Ciputra Cibubur
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default lokasi;
