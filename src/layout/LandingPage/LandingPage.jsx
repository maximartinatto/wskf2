import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/logo.jpeg";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };

  return (
    <div className="landing-page container-fluid d-flex justify-content-center align-items-center bg-light">

      <div className="landing-content text-center">

        <img
          src={img}
          alt="Logo de WSKF Argentina"
          className="landing-logo img-fluid rounded mb-4"
        />

        <h1 className="h3 mb-4">WSKF Argentina</h1>

        <button
          type="button"
          className="btn btn-dark btn-lg"
          onClick={handleButtonClick}
        >
          Bienvenidos
        </button>

      </div>

    </div>
  );
};

export default LandingPage;
