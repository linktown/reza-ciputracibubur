import React from "react";
import "./lokasi.scss";
import lokasiimages from "../../Media/maps.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckDouble} from "@fortawesome/free-solid-svg-icons";

const lokasi = () => {
  const handleConsultationClick = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo%20Reza,%20Saya%20bisa%20minta%20detail%20Katalog,%20Simulasi,%20dan%20Promo%20terbaru%20Ciputra%20Cibubur%20(Lokasi)%20https://www.ciputra-cibubur.com//&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  return (
    <div id="lokasi" className="container-lokasi">
      <div className="container-judul">
        <div className="judul-lokasi">
          <h1>Lokasi </h1>
          <h2>Ciputra </h2>
          <h3>Cibubur</h3>
          <div className="deskripsi">
            <h4>Lokasi yang ideal</h4>
            <h5>untuk tinggal dan berbisnis</h5>
            <h6>dengan banyak infrastruktur</h6>
          </div>
        </div>
        <div className="button-penawaran">
          <button className="buttonpenawaran" onClick={handleConsultationClick}>
            Learn More
          </button>
        </div>
      </div>
      <div id="lokasi" className="lokasi">
        <img
          className="lokasi-tallasa"
          src={lokasiimages}
          alt="hardsell-summarecon-serpong"
        />
      </div>
    </div>
  );
};

export default lokasi;
