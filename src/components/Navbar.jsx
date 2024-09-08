import React from "react";
import creditbutton from "./../assets/Button.svg";
const Navbar = () => {
  return (
    <div style={{ display: "flex" }}>
      <h1 className="text-3xl mt-7 " style={{ color: "white" }}>
        Welcome , Manav
      </h1>
      <div className="grid grid-cols-2 mt-5" style={{ marginLeft: "122pc" }}>
        <img
          src={creditbutton}
          alt="no image"
          className="col-span-1 h-[100px]"
        />
        <h3 style={{ color: "white" }} className="mt-9 col-span-1 h-[50px]">
          Docs
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
