import React from "react";
import "./footer.css";
import insta from "../../assest/insta.png";
import face from "../../assest/face.png";
import you from "../../assest/you.png";
const Footer = () => {
  return (
    <div className="fooCon">
      <div className="links">
        <a href="https://instagram.com/syncininkbysupriya">
          <img src={insta} />
        </a>
        <a href="https://m.facebook.com/Syncndink?mibextid=ZbWKwL">
          <img src={face} />
        </a>
        <a href="https://www.youtube.com/channel/UCzYA-WFeIGgct1vW6I_bTWg">
          <img src={you} />
        </a>
      </div>
      <p>© All rights reserved</p>
    </div>
  );
};

export default Footer;
