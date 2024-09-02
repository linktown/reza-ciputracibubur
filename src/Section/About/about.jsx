import React from "react";
import "./about.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logosumban from "../../Media/Ciputra.png";

const aboutsumban = () => {
  const aboutwa = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo%20Reza,%20Saya%C2%A0bisa%20minta%20detail%20Katalog,%20Simulasi%20dan%20Promo%20terbaru%20Rumah%20https://ciputra-cibubur/%20()&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };

  return (
    <div id="about" className="about-sumban">
      <div className="containerlogo">
        <div className="logosumban">
          <img className="gambarsumban" src={logosumban} alt="logo sumban" />
        </div>
      </div>
      <div className="containerdesk">
        <div className="judul1">
          <h1>Beautiful Life, Beautiful Living</h1>
        </div>
        <div className="desk">
          Ciputra Cibubur merujuk pada beberapa proyek yang dikembangkan oleh
          Grup Ciputra di kawasan Cibubur. Diluncurkan pada Mei 2017, Ciputra
          Cibubur memiliki konsep "Festive Urban Living" memiliki kawasan seluas
          220 hektar dan terdiri dari beberapa cluster, termasuk fasilitas
          komersial, mall, perkantoran, pusat kebugaran, dan lain-lain.
        </div>
      </div>
    </div>
  );
};

export default aboutsumban;
