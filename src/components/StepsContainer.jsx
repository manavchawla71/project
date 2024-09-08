import React from "react";
import { useNavigate } from "react-router-dom";
import backbotton from "./../assets/back.svg";
import Githubicon from "./../assets/abc.svg";
import configureicon from "./../assets/def.svg";
const StepsContainer = () => {
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/");
  };
  return (
    <div style={{ marginLeft: "8pc" }} className="mt-5  ">
      <img
        src={backbotton}
        alt="no image"
        className="h-[50px] cursor-pointer"
        onClick={handleback}
      />
      <img src={Githubicon} alt="no image" className="h-[100px] w-[351px]" />
      <h1 className="text-2xl mt-6" style={{ color: "white" }}>
        You're almost
      </h1>
      <h3 style={{ color: "grey" }}>
        Please follow the steps to configure the project
      </h3>
      <h3 style={{ color: "grey" }}>and deploy it.</h3>
      <img src={configureicon} alt="no image" className="mt-7" />
    </div>
  );
};

export default StepsContainer;
