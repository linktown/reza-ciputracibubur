import React from "react";
import "./footer.scss";
import logo from "../../Media//Ciputra.png";

const footer = () => {
  return (
    <div className="container-footer">
      <div className="container-atas">
        <div className="container-logo">
          <img className="gambar-logo" src={logo} alt="logo-Parkspring" />
        </div>
        <div className="container-deskripsi">
          <div className="alamat">
            <h1>Marketing Gallery</h1>
            <h2>Ciputra Cibubur</h2>
            <h3>
              Jl. Alternatif Cibubur No.5, RT.001/RW.001, Jatirangga, Kec.
              Jatisampurna, Kota Bks, Jawa Barat 17434
            </h3>
            <h4>Contact us : +6281325283186</h4>
          </div>
          <div className="privasi"></div>
        </div>
      </div>
      <div className="container-bawah">
        © Ciputra Cibubur
        <hr />
        <div className="powered">Powered by Linktown</div>
      </div>
    </div>
  );
};

export default footer;
