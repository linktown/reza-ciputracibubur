import React, {useState} from "react";
import "./navbar.scss";
import Logo from "../../Media/Ciputra.png";
import {HashLink} from "react-router-hash-link";
import {FaBars} from "react-icons/fa";
import {RiCloseLine} from "react-icons/ri";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className={isOpen ? "menus active" : "menus"}>
          <ul>
            <li>
              <HashLink className="link" smooth to="#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink className="link" smooth to="#promo">
                Promo
              </HashLink>
            </li>
            <li>
              <HashLink className="link" smooth to="#rumah">
                Residentials
              </HashLink>
            </li>
            <li>
              <HashLink className="link" smooth to="#ruko">
                Commercials
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="icons" onClick={toggleMenu}>
          <FaBars className={isOpen ? "bars active" : "bars"} />
          <RiCloseLine className={isOpen ? "close active" : "close"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
