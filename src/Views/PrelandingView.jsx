import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import "../styles/productCard.css";
import "../styles/prelanding.css";
import Footer from '../components/Footer'
import airmax from '../assets/shoes.png'

const PrelandingView = ({ ...props }) => {
  useEffect(() => {
    props.loadProducts()
  }, []);
  let products = [0, 1]
  products = Object.values(props.getProducts)
  return (
    <div>
      <div>
        <h3 className="men-title">30% de descuento pagando en efectivo!</h3>
      </div>
      <main className="text-dark m-5">
        <Carousel></Carousel>
        <section className="container shoes container-shoes">
          <div className="row justify-content-center align-items-center p-5">
            <h1 className="container-title">
              Mejores marcas en zapatillas ropa accesorios y pc
            </h1>
            <Link to="/men" className="btn btn-primary w-75 m-2 container-btn">
              Ver mas
            </Link>
          </div>
          <img
            src={airmax}
            alt="airmax"
            className="rounded container-img container-image-animate"
          />
        </section>
      </main>
      <div>
        <section className="section-new">
          <h3 className="section-news">Novedades</h3>
        </section>
      </div>
      <div className="product-description">
        <div className="mb-5 container-products">
          {products?.map((e) => {
            return <ProductCard product={e} key={e.id}></ProductCard>;
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PrelandingView;
