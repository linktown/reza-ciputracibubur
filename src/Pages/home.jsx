import React from "react";
import "./home.scss";
import Navbar from "../Section/Navbar/navbar.jsx";
import Banner from "../Section/Banner/banner.jsx";
import About from "../Section/About/about.jsx";
import Promo from "../Section/Promo/promo.jsx";
import Citragran from "../Section/Citragran/Citragran.jsx";
import Citraland from "../Section/Citraland/Citraland.jsx";
import CBD from "../Section/CBD/CBD.jsx";
import Lokasi from "../Section/Lokasi/lokasi.jsx";
import Surrounding from "../Section/Surrounding Area/surrounding.jsx";
import Footer from "../Section/Footer/footer.jsx";
import Ruko from "../Section/Ruko/ruko.jsx";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import tombol from "../Media/tombol.webp";
import ScrollToHashElement from "./ScrollToHashElement.js";

const home = () => {
  const fungsiganteng = () => {
    const whatsappLink =
      "https://api.whatsapp.com/send/?phone=6281325283186&text=Halo%20Reza,%20Saya%20bisa%20minta%20detail%20Katalog,%20Simulasi,%20dan%20Promo%20terbaru%20Produk%20Ciputra%20Cibubur%20https://www.ciputra-cibubur.com//&type=phone_number&app_absent=0";
    window.location.href = whatsappLink;
  };
  return (
    <div className="home">
      <ScrollToHashElement />
      <Navbar />
      <Banner />
      <About />
      <Promo />
      <Citraland />
      <CBD />
      <Citragran />
      <Ruko />
      <Surrounding />
      <Lokasi />
      <Footer />
      <img
        onClick={fungsiganteng}
        src={tombol}
        className="tombolwa"
        alt="Hubungi Sekarang!"
      />
      <div className="wamobile">
        <button onClick={fungsiganteng} className="mobile">
          <div>
            <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp Sekarang
          </div>
        </button>
      </div>
    </div>
  );
};

export default home;
