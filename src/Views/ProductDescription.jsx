import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/productDescription.css";
import toast, { Toaster } from "react-hot-toast";
import '../styles/productDescription.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import Footer from "../components/Footer";

function ProductDescription({ ...props }) {
  const params = useParams();
  const [count, updateCount] = useState(1);
  const [image, updateImage] = useState("product-image");
  const notify = () => toast.success("Producto agregado al carrito");
  useEffect(() => {
    
  }, []);
  let products = [0, 1]
  products = Object.values(props.getProduct)
  let product = products.find(product => product.id == params.id)
  const productPrice = product?.price * 350;
  return (
    <>
      {products.length == 0 ? (
        <div className="spinner">
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="container-product">
            <div className="card-carousel">
              <img
                src={product?.image}
                className="carousel-image"
                name="product-image"
                onClick={(e) => {
                  updateImage(e.target.name);
                }}
              />
              <img
                src={product?.image}
                className="carousel-image carousel-image-2"
                name="product-image-2"
                onClick={(e) => {
                  updateImage(e.target.name);
                }}
              />
              <img
                src={product?.image}
                className="carousel-image carousel-image-3"
                name="product-image-3"
                onClick={(e) => {
                  updateImage(e.target.name);
                }}
              />
            </div>
            <div>
              <img className={image} src={product?.image} alt="" />
            </div>
            <div className="card--">
              <div className="card-body">
                <div className="card-items">
                  <h2 className="card-title">{product?.title}</h2>
                  <h5 className="card-subtitle mb-2 text-muted">
                    {product?.category}
                  </h5>
                  <div className="card-stars">
                    <img
                      className="stars-image"
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/misc/stars-active.svg"
                      alt=""
                    />
                    <span className="card-text-rate">
                      {product.rating.rate}
                    </span>
                  </div>
                  <div className="card-price">
                    <span className="price">
                      ${productPrice.toLocaleString("es")}
                    </span>
                    <i className="bx bxs-truck"></i>
                    <span className="card-send">Llega gratis el sabado</span>
                  </div>
                  <span>
                    Compra Protegida con Mercado Pago Recibí el producto que
                    esperabas o te devolvemos tu dinero
                  </span>
                  <span>Garantia: 12 meses</span>
                  <span>Stock disponible</span>
                  <span>Color: blanco</span>
                  <div className="card-count mb-3">
                    <span>Cantidad</span>
                    <i
                      className="bi bi-dash"
                      onClick={() => {
                        count > 1 ? updateCount(count - 1) : updateCount(count)
                      }}
                    ></i>
                    <span>{count}</span>
                    <i
                      className="bi bi-plus-lg"
                      onClick={() => {
                        count >= 1 ? updateCount(count + 1) : updateCount(count)
                      }}
                    ></i>
                  </div>
                  <div className="card-buttons">
                    <Link to="/cart" className="card-link card-button w-100">Comprar</Link>
                    <button
                      className="card-button card-button-- w-100"
                      onClick={notify}
                    >
                      Agregar al carrito
                    </button>
                    <Toaster position="top-center" reverseOrder={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <h3 className="footer-title">Descripcion del producto</h3>
            <p className="card-text card-text-description">
              {product?.description}
            </p>
          </div>
          <Footer></Footer>
        </div>
      )}
    </>
  );
}


export default ProductDescription
