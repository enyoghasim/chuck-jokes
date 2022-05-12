import React from "react";
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
              <button>MEIN BEREICH</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
