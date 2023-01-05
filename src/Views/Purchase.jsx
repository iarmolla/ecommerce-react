import React, { useState, useEffect } from "react";
import "../styles/purchase.css";
import check from '../assets/check.svg'
import { useNavigate } from "react-router-dom";

function Purchase() {
  const navigate = useNavigate()
  return (
    <div className="container-purchase" onLoad={()=> {
      // setTimeout(()=> {
      //   navigate("/")
      // },3000)
    }}>
      <div className="purchase">
        <img
          src={check}
          className="container-check"
          alt="check"
        />
        <h1>Gracias por tu compra!</h1>
        <p className="purchase-text">
          En breve recibiras un mail con la factura          
        </p>
        <div className="purchase-spinner m-0">
          <div className="spinner-border p-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>         
        </div>
      </div>
    </div>
  );
}

export default Purchase;
