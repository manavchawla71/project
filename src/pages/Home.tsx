import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link to="/services/new">
        <button className="bg-blue-500 text-white p-4 rounded">
          Go to Services
        </button>
      </Link>
    </div>
  );
};

export default Home;
