import React from "react";
import "./promo.scss";
import penawaran from "../../Media/hardsell_ciputra.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckDouble, faMedal} from "@fortawesome/free-solid-svg-icons";

const Penawaran = () => {
  const handleConsultationClick = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo+Reza,%20Saya%C2%A0bisa%20minta%20detail%20Promo%20terbaru%20rumah%20Ciputra%20Cibubur%20(Promo)+https://www.ciputra-cibubur.com/&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyload: true,
  };
  return (
    <div className="judulpromo">
      <div id="promo" className="judul">
        <h1>OUR PROMO</h1>
      </div>
      <div id="promo" className=" containerPenawaran">
        <div className="containercontent">
          <div className="pointpenawaran">
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>&nbsp;&nbsp;Tanpa DP</span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>&nbsp;&nbsp;Spesial Discount</span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>&nbsp;&nbsp;Free Biaya-biaya</span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>&nbsp;&nbsp;Free Biaya KPR</span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>
                &nbsp;&nbsp;Subsidi Asuransi Jiwa
              </span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>&nbsp;&nbsp;Free AC</span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>&nbsp;&nbsp;Free CCTV</span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>&nbsp;&nbsp;Free Canopy</span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>
                &nbsp;&nbsp;Free Smartdoor Lock
              </span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>
                &nbsp;&nbsp;Free Smarthome System
              </span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>
                &nbsp;&nbsp;Free IPL 12 Bulan
              </span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>
                &nbsp;&nbsp;Free Motor Listrik*
              </span>
            </div>
            <div className="penawaranpoin">
              <FontAwesomeIcon icon={faMedal} />
              <span style={{color: "white"}}>
                &nbsp;&nbsp;Free Voucher 10 Juta
              </span>
            </div>
          </div>
          <div className="disclaimer">*Disclaimer</div>
          <button className="buttonpenawaran" onClick={handleConsultationClick}>
            Learn More
          </button>
        </div>
        <div className="containergambar">
          <img className="penawarangambar" src={penawaran} />
        </div>
      </div>
    </div>
  );
};

export default Penawaran;
