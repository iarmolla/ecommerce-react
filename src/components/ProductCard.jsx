import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/productCard.css";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  const notify = () => toast.success("Producto agregado al carrito");
  const productPrice = product.price * 300;
  const images = (number) => {
    if (number > 0) {
      const image =
        "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/misc/stars-active.svg";
      return image;
    }
  };
  return (
    <>
      <motion.div className="card"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
      >
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body w-100">
          <div>
            <h5 className="card-text">{product.title}</h5>

          </div>
          <div className="card-section">
            <div className="card-section card-section--">
              <img src={images(product.rating.rate)} className="stars-image" alt="" />
              <span className="card-text--">{product.rating.rate}</span>
            </div>
          </div>
          <div className="card-price">
            <p className="card-title">${productPrice.toLocaleString("es")}</p>
          </div>
          <div>
            <Link
              to={`/description/${product.id}`}
              className="card-button card-button--"
            >
              Ver mas
            </Link>
            <button className="m-1 card-button" onClick={notify}>
              Agregar al carrito
            </button>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </motion.div>
    </>
  );
}

export default ProductCard;
