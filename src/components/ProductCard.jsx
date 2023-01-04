import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/productCard.css";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { connect } from 'react-redux'
import actions from '../actions/products'
import stars from '../assets/stars.svg'

function ProductCard({ product, addProduct }) {
  const [count, updateCount] = useState(1);
  const notify = () => toast.success("Producto agregado al carrito");
  const images = () => {
    return stars;
  };
  return (
    <>
      <motion.div className="card "
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
      >
        <img src={product.image} className="card-img-top card-image" alt={product.title} />
        <div className="card-body w-100">
          <div>
            <h5 className="card-text">{product.title}</h5>
          </div>
          <div className="card-section">
            <div className="card-section card-section--">
              <img src={images()} className="stars-image" alt={product.rating.rate} />
              <span className="card-text--">{product.rating.rate}</span>
            </div>
          </div>
          <div className="card-price">
            <p className="card-title">${product.originalPrice.toLocaleString("es")}</p>
          </div>
          <div>
            <Link
              to={`/description/${product.id}`}
              className="card-button card-button--"
            >
              Ver mas
            </Link>
            <button className="m-1 card-button" onClick={() => {
              notify()              
              addProduct(product,count)
            }}>
              Agregar al carrito
            </button>
          </div>
          <Toaster position="top-center" reverseOrder={false} toastOptions={{
            style: {              
              boxShadow:'none',
              border:'1px solid rgba(0, 0, 0, 0.175)'
            },
          }}
          />
        </div>
      </motion.div>
    </>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addProduct: (product) => dispatch(actions.addProduct(product))
  }
}
export default connect(null, mapDispatchToProps)(ProductCard)
