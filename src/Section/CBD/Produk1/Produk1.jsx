import React from "react";
import "./Produk1.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Brunneraimages from "./Brunnera.js";
import Calatheaimages from "./Calathea.js";
import Greenburyimages from "./Greenbury.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDownLeftRight,
  faLocationDot,
  faM,
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
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo+Reza,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Brunerra)%20https://www.ciputra-cibubur.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  const Amandawa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo+Reza,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Calathea)%20https://www.ciputra-cibubur.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  const Cynthiawa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo+Reza,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Granbury)%20https://www.ciputra-cibubur.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  const Gavina9 = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6285212809191&text=Halo+Ray%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Jasmia%2012%20Attic)%20https://marketing-crowngading.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };

  return (
    <div className="container-jasmia">
      <div className="containercard3">
        <div className="card">
          <Slider {...settings}>
            {Brunneraimages.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
          <div className="container-rumah">
            <div className="nama-rumah">Brunnera</div>
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
              <div className="angka">6</div>
              <div className="ket">Juta/Bulan</div>
            </div>
          </div>
          <div className="gridspek">
            <FontAwesomeIcon color="#2b2b2b" icon={faArrowsUpDownLeftRight} />
            <span> 135m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faHouse} />
            <span> 166m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faBed} />
            <span> 4+1</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faShower} />
            <span> 3+1</span>
          </div>
          <div className="containerwhatsapp">
            <button onClick={Dayanawa} className="whatsappsumban">
              <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </button>
          </div>
        </div>
        <div className="card">
          <Slider {...settings}>
            {Calatheaimages.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
          <div className="container-rumah">
            <div className="nama-rumah">Calathea</div>
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
            <span> 150m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faHouse} />
            <span> 183m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faBed} />
            <span> 4+1</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faShower} />
            <span> 3+1</span>
          </div>
          <div className="containerwhatsapp">
            <button onClick={Amandawa} className="whatsappsumban">
              <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </button>
          </div>
        </div>
        <div className="card">
          <Slider {...settings}>
            {Greenburyimages.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
          <div className="container-rumah">
            <div className="nama-rumah">Granbury</div>
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
              <div className="angka">11</div>
              <div className="ket">Juta/Bulan</div>
            </div>
          </div>
          <div className="gridspek">
            <FontAwesomeIcon color="#2b2b2b" icon={faArrowsUpDownLeftRight} />
            <span> 119m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faHouse} />
            <span> 90m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faBed} />
            <span> 3+1</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faShower} />
            <span> 3+1</span>
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
