import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  return (
    <div className={"wrapper"}>
      <p>Ocurrio un Error!</p>
      <button className="buttonsearch2" onClick={refreshPage}>
        Refrescar la página
      </button>
    </div>
  );
};

export default Error;
