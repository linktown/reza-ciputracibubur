import React from "react";
import "./Produk1.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Viola5images from "./Viola5.js";
import Viola6images from "./Viola6.js";
import Viola7images from "./Viola7.js";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDownLeftRight,
  faLocationDot,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faBed} from "@fortawesome/free-solid-svg-icons";
import {faShower} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const Produk1 = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Dayanawa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo+Reza,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Glenview%205)%20https://ciputra-cibubur.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  const Amandawa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo+Reza,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Glenview%208)%20https://ciputra-cibubur.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  const Cynthiawa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo+Reza,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Glenview%10)%20https://ciputra-cibubur.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };

  return (
    <div className="container-viola">
      <div className="containercard3">
        <div className="card">
          <Slider {...settings}>
            {Viola5images.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
          <div className="container-rumah">
            <div className="nama-rumah">Glenview 5</div>
            <div className="gridmap">
              <FontAwesomeIcon className="icon" color="grey" icon={faMedal} />
              <div className="namalokasi">Free Biaya-biaya</div>
            </div>
          </div>
          <div className="containercicilan">
            <div className="judulkartu">
              <div className="startfrom">Start From</div>
            </div>
            <div className="cicilansumban">
              <div className="angka">7</div>
              <div className="ket">Juta/Bulan</div>
            </div>
          </div>
          <div className="gridspek">
            <FontAwesomeIcon color="#2b2b2b" icon={faArrowsUpDownLeftRight} />
            <span> 90m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faHouse} />
            <span> 81m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faBed} />
            <span> 3</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faShower} />
            <span> 3</span>
          </div>
          <div className="containerwhatsapp">
            <button onClick={Dayanawa} className="whatsappsumban">
              <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </button>
          </div>
        </div>
        <div className="card">
          <Slider {...settings}>
            {Viola6images.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
          <div className="container-rumah">
            <div className="nama-rumah">Glenview 8</div>
            <div className="gridmap">
              <FontAwesomeIcon className="icon" color="grey" icon={faMedal} />
              <div className="namalokasi">Free Biaya-biaya</div>
            </div>
          </div>
          <div className="containercicilan">
            <div className="judulkartu">
              <div className="startfrom">Start From</div>
            </div>
            <div className="cicilansumban">
              <div className="angka">13</div>
              <div className="ket">Juta/Bulan</div>
            </div>
          </div>
          <div className="gridspek">
            <FontAwesomeIcon color="#2b2b2b" icon={faArrowsUpDownLeftRight} />
            <span> 120m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faHouse} />
            <span> 160m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faBed} />
            <span> 3</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faShower} />
            <span> 3</span>
          </div>
          <div className="containerwhatsapp">
            <button onClick={Amandawa} className="whatsappsumban">
              <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </button>
          </div>
        </div>
        <div className="card">
          <Slider {...settings}>
            {Viola7images.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
          <div className="container-rumah">
            <div className="nama-rumah">Glenview 10</div>
            <div className="gridmap">
              <FontAwesomeIcon className="icon" color="grey" icon={faMedal} />
              <div className="namalokasi">Free Biaya-biaya</div>
            </div>
          </div>
          <div className="containercicilan">
            <div className="judulkartu">
              <div className="startfrom">Start From</div>
            </div>
            <div className="cicilansumban">
              <div className="angka">19</div>
              <div className="ket">Juta/Bulan</div>
            </div>
          </div>
          <div className="gridspek">
            <FontAwesomeIcon color="#2b2b2b" icon={faArrowsUpDownLeftRight} />
            <span> 170m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faHouse} />
            <span> 230m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faBed} />
            <span> 4+1</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faShower} />
            <span> 6+1</span>
          </div>
          <div className="containerwhatsapp">
            <button onClick={Cynthiawa} className="whatsappsumban">
              <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Produk1;
