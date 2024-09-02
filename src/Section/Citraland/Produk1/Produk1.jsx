import React from "react";
import "./Produk1.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Montanaimages from "./Montana.js";
import Moenterreyimages from "./Moneterrey.js";
import Montaverdeimages from "./Monataverde.js";
import Avenueimages from "./Avenue.js";
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

  const Monteverdewa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo+Reza%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Monteverde)%20https://www.ciputra-cibubur.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  const Montanawa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo+Reza%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Montana)%20https://www.ciputra-cibubur.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  const Cynthiawa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo+Reza%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Monterrey)%20https://www.ciputra-cibubur.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  const Gavina9 = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo+Ray%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20rumah%20ini%20(Regia%208)%20https://marketing-crowngading.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };

  return (
    <div className="container-regia">
      <div className="containercard3">
        <div className="card">
          <Slider {...settings}>
            {Montaverdeimages.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
          <div className="container-rumah">
            <div className="nama-rumah">Monteverde</div>
            <div className="gridmap">
              <FontAwesomeIcon className="icon" color="grey" icon={faMedal} />
              <div className="namalokasi">Tanpa DP</div>
            </div>
          </div>
          <div className="containercicilan">
            <div className="judulkartu">
              <div className="startfrom">Start From</div>
            </div>
            <div className="cicilansumban">
              <div className="angka">3</div>
              <div className="ket">Juta/Bulan</div>
            </div>
          </div>
          <div className="gridspek">
            <FontAwesomeIcon color="#2b2b2b" icon={faArrowsUpDownLeftRight} />
            <span> 66m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faHouse} />
            <span> 77m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faBed} />
            <span> 4</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faShower} />
            <span> 2</span>
          </div>
          <div className="containerwhatsapp">
            <button onClick={Monteverdewa} className="whatsappsumban">
              <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </button>
          </div>
        </div>
        <div className="card">
          <Slider {...settings}>
            {Montanaimages.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
          <div className="container-rumah">
            <div className="nama-rumah">Montana</div>
            <div className="gridmap">
              <FontAwesomeIcon className="icon" color="grey" icon={faMedal} />
              <div className="namalokasi">Tanpa DP</div>
            </div>
          </div>
          <div className="containercicilan">
            <div className="judulkartu">
              <div className="startfrom">Start From</div>
            </div>
            <div className="cicilansumban">
              <div className="angka">3</div>
              <div className="ket">Juta/Bulan</div>
            </div>
          </div>
          <div className="gridspek">
            <FontAwesomeIcon color="#2b2b2b" icon={faArrowsUpDownLeftRight} />
            <span> 120m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faHouse} />
            <span> 88m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faBed} />
            <span> 3</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faShower} />
            <span> 2</span>
          </div>
          <div className="containerwhatsapp">
            <button onClick={Montanawa} className="whatsappsumban">
              <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
            </button>
          </div>
        </div>
        <div className="card">
          <Slider {...settings}>
            {Moenterreyimages.map((image, index) => (
              <img className="imagecard" key={index} src={image} />
            ))}
          </Slider>
          <div className="container-rumah">
            <div className="nama-rumah">Monterrey</div>
            <div className="gridmap">
              <FontAwesomeIcon className="icon" color="grey" icon={faMedal} />
              <div className="namalokasi">Tanpa DP</div>
            </div>
          </div>
          <div className="containercicilan">
            <div className="judulkartu">
              <div className="startfrom">Start From</div>
            </div>
            <div className="cicilansumban">
              <div className="angka">3</div>
              <div className="ket">Juta/Bulan</div>
            </div>
          </div>
          <div className="gridspek">
            <FontAwesomeIcon color="#2b2b2b" icon={faArrowsUpDownLeftRight} />
            <span> 77m²</span>
            <FontAwesomeIcon color="#2b2b2b" icon={faHouse} />
            <span> 93m²</span>
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
