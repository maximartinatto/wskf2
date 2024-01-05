import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from "../LandingPage/LandingPage.module.css";
import img from "../../assets/logo.jpeg";

const LandingPage = () => {
  
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  };

  return (
    <div className={style.main_container}>
      <div className={`${style.main_left_container}`}>
        <img src={img} className={style.img} alt='img'/>
        <h3>WSKF Argentina</h3>
        <div className={`${style.left_paragraph}`}>
          <p>Ver texto...</p>
        </div>
        
        <button className={style.button_home} onClick={handleButtonClick}>Bienvenidos</button>
        
      </div>
     
    </div>
  );
};

export default LandingPage;
