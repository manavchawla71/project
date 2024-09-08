import React from "react";
import { useState } from "react";
import More from "./../assets/Price.svg";
import Small from "./../assets/Price (1).svg";
import Large from "./../assets/Price (2).svg";
const ConfigureContainer = () => {
  const [port, setPort] = useState("");
  const [error, setError] = useState("");
  const handleclick = () => {
    if (!port) {
      setError("Port and price configuration are required.");
    } else {
      setError("");
      alert("Sucessfully deployed");
    }
  };
  const [selectedOption, setSelectedOption] = useState("");
  const priceOptions = [
    { id: 1, name: "Basic", price: "$50" },
    { id: 2, name: "Premium", price: "$100" },
  ];
  return (
    <div style={{ marginLeft: "7pc" }}>
      <h1 className="text-3xl m-7" style={{ color: "white" }}>
        Configure Deployment (Optional)
      </h1>
      <h3 style={{ color: "grey", marginLeft: "2pc", marginTop: "0pc" }}>
        Please follow the steps to configure your project and Deploy it.
      </h3>
      <div className="mt-5">
        <label className="mt-5" style={{ color: "grey", marginLeft: "2pc" }}>
          Port:
        </label>
        <br />
        <input
          value={port}
          onChange={(e) => setPort(e.target.value)}
          type="text"
          placeholder="8080"
          className="rounded text-gray-500  p-2 border-2 border-gray-500"
          style={{ marginLeft: "2pc", width: "100%", color: "white" }}
        />
        <br />
        <label className="mt-8" style={{ color: "grey", marginLeft: "2pc" }}>
          Command:
        </label>
        <br />
        <input
          type="text"
          placeholder="My-Deployment"
          className="rounded text-gray-500  p-2 border-2 border-gray-500"
          style={{ marginLeft: "2pc", width: "100%", color: "white" }}
        />
        <br />
        <label className="mt-5" style={{ color: "grey", marginLeft: "2pc" }}>
          Argument:
        </label>
        <br />
        <input
          type="text"
          placeholder="My-Deployment"
          className="rounded text-gray-500  p-2 border-2 border-gray-500"
          style={{ marginLeft: "2pc", width: "100%", color: "white" }}
        />
        <br />
        <label style={{ color: "grey", marginLeft: "2pc" }}>
          Environment Variables
        </label>
        <br />
        <input
          type="text"
          placeholder="ENV-ENV"
          className="rounded  border-2 border-gray-500 p-2"
          style={{ marginLeft: "2pc", width: "100%", color: "white" }}
        />
        <br />
        <br />
        <label
          className="mt-5"
          style={{ color: "grey", marginLeft: "2pc", marginTop: "7pc" }}
        >
          Pricing Configuration
        </label>
        <div className="grid grid-cols-12 ml-7">
          <img src={More} alt=" no image" className="col-span-4" />
          <img src={Small} alt=" no image" className="col-span-4" />
          <img src={Large} alt=" no image" className="col-span-4" />
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleclick}
        className="h-[50px] rounded border-2 border-red-500 mt-7"
        style={{ color: "white", width: "100%" }}
      >
        Deploy
      </button>
    </div>
  );
};

export default ConfigureContainer;
