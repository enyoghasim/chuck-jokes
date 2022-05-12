import React from "react";
import arrowDown from "../../assets/images/page-1/path_2.png";
import userIcon from "../../assets/images/page-1/shape.png";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="nav-inner">
        <div className="nav-left">
          <ul>
            <li className="nav-item">
              <a href="#">SO FUNKTIONIERT'S</a>
            </li>
            <li className="nav-item">
              {" "}
              <a href="#">SONDERANGEBOTE</a>
            </li>
            <li className="nav-item">
              <button>
                <img src={userIcon} alt="user-icon" />
                MEIN BEREICH
                <img src={arrowDown} alt="arrow-down" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
