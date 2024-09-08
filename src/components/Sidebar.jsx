import React from "react";
import navbarlogo from "./../assets/Logomark.svg";
import icons from "./../assets/Navigation.svg";
import footericons from "./../assets/footericons.svg";
const Sidebar = () => {
  return (
    <div>
      <img src={navbarlogo} alt="no image" className="m-9" />
      <img src={icons} alt="no image" className="m-5" />
      <img
        src={footericons}
        alt="no image"
        className="absolute bottom-0 left-0 m-9"
      />
    </div>
  );
};

export default Sidebar;
