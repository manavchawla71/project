import React from "react";
import Githubicon from "./../assets/abc.svg";
import backbotton from "./../assets/back.svg";
import configureicon from "./../assets/def.svg";
import ConfigureContainer from "./ConfigureContainer";
import StepsContainer from "./StepsContainer";
const FrameContainer = () => {
  return (
    <div className="flex m-5">
      <StepsContainer />

      <ConfigureContainer />
    </div>
  );
};

export default FrameContainer;
