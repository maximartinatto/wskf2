import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/logo.jpeg";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">

      <div className="text-center col-12 col-md-6 col-lg-4">

        <img
          src={img}
          alt="logo"
          className="img-fluid rounded mb-4"
          style={{ maxWidth: "200px" }}
        />

        <h3 className="mb-3">WSKF Argentina</h3>

        <p className="text-muted mb-4"></p>

        <button
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
