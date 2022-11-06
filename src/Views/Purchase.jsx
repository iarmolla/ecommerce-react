import React, { useState, useEffect } from "react";
import "../styles/purchase.css";

function Purchase() {
  return (
    <div className="container">
      <div className="purchase">
        <img
          src="http://ali.edu.uy/img/icons/icon-check-green.svg"
          className="container-check"
          alt=""
        />
        <h1>Gracias por tu compra!</h1>
        <p className="purchase-text">
          En breve recibiras un mail con la factura
        </p>
        <div className="purchase-spinner m-0">
          <div className="spinner-border p-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div>
            <span>
              En 5 segundos volveras al inicio
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
