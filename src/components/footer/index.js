import React from "react";
import ArrowRight from "../../assets/images/page-1/path-copy-2.png";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <h5>
          GOT JOKES? GET PAID
          <br />
          FOR SUBMITTING
        </h5>
        <button className="submit-joke-btn">
          <span className="inner-text">Submit Joke</span>
          <img src={ArrowRight} alt="arrow" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
