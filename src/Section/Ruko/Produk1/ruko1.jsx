import React from "react";
import "./ruko1.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Avenueimages from "./Avenue.js";
import Marquetteimages from "./Marquette.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDownLeftRight,
  faLayerGroup,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faShower} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const ruko1 = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Avenuewa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo%20Reza,%20Saya%20bisa%20minta%20detail%20Katalog,%20Simulasi,%20dan%20Promo%20terbaru%20Ciputra%20Cibubur%20(Ruko%20Avenue%203)%20https://ciputra-cibubur.com//&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  const Marquettewa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo%20Reza,%20Saya%20bisa%20minta%20detail%20Katalog,%20Simulasi,%20dan%20Promo%20terbaru%20Ciputra%20Cibubur%20(Marquette%20Shophouse)%20https://ciputra-cibubur.com//&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };

  return (
    <div className="container">
      <div className="containercard2">
        <div className="card">
          <Slider {...settings}>
            {Avenueimages.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
          <div className="container-rumah">
            <div className="nama-rumah">Ruko Avenue 3</div>
            <div className="gridmap">
              <FontAwesomeIcon
                className="icon"
                color="Grey"
                icon={faLocationDot}
              />
              <div className="namalokasi">Cibubur</div>
            </div>
          </div>
          <div className="containercicilan">
            <div className="judulkartu">
              <div className="startfrom">Start From</div>
            </div>
            <div className="cicilansumban">
              <div className="angka">6</div>
              <div className="ket">Juta/Bulan</div>
            </div>
          </div>
          <div className="gridspek">
            <FontAwesomeIcon color="#2b2b2b" icon={faArrowsUpDownLeftRight} />
            <span> 98m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faHouse} />
            <span> 129m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faLayerGroup} />
            <span> 2</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faShower} />
            <span> 2</span>
          </div>
          <div className="containerwhatsapp">
            <button onClick={Avenuewa} className="whatsappsumban">
              <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </button>
          </div>
        </div>
        <div className="card">
          <Slider {...settings}>
            {Marquetteimages.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
          <div className="container-rumah">
            <div className="nama-rumah">Marquette Shophouse</div>
            <div className="gridmap">
              <FontAwesomeIcon
                className="icon"
                color="Grey"
                icon={faLocationDot}
              />
              <div className="namalokasi">Cibubur</div>
            </div>
          </div>
          <div className="containercicilan">
            <div className="judulkartu">
              <div className="startfrom">Start From</div>
            </div>
            <div className="cicilansumban">
              <div className="angka">17</div>
              <div className="ket">Juta/Bulan</div>
            </div>
          </div>
          <div className="gridspek">
            <FontAwesomeIcon color="#2b2b2b" icon={faArrowsUpDownLeftRight} />
            <span> 67m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faHouse} />
            <span> 197m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faLayerGroup} />
            <span> 3</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faShower} />
            <span> 3</span>
          </div>
          <div className="containerwhatsapp">
            <button onClick={Marquettewa} className="whatsappsumban">
              <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ruko1;
