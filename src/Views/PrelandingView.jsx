import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import "../styles/productCard.css";
import "../styles/prelanding.css";

const PrelandingView = ({ ...props }) => {
  const [products, updateProducts] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((response) => updateProducts(response));
  }, []);

  return (
    <div>
       <div>
        <h3 className="men-title">30% de descuento pagando en efectivo!</h3>
      </div>
      <main className="text-dark m-5">
        <Carousel></Carousel>
        <section className="container shoes">
          <div className="row justify-content-center align-items-center p-5">
            <h1 className="container-title">
              Mejores marcas en zapatillas ropa accesorios y pc
            </h1>
            <Link to="/men" className="btn btn-primary w-75 m-2 container-btn">
              Ver mas
            </Link>
          </div>
          <img
            src="https://media.revistagq.com/photos/617a5f36ad20b0acf7594c69/master/pass/nikeairmax2021.jpg"
            alt=""
            className="rounded container-img"
          />
        </section>
        <section className="container mt-5 shoes-section">
          <div className="w-25 m-5 ">
            <h2 className="container-title">
              Corré con comodidad en cualquier superficie
            </h2>
          </div>
          <img
            className="container-img container-img--"
            src="https://www.streetprorunning.com/blog/wp-content/uploads/2019/06/portada-ultra-bosst-19-para-blog-streetprorunning-2018-2019.jpg"
            alt=""
          />
        </section>
      </main>
      <div>
        <section className="">
          <h3 className="section-news">Novedades</h3>
        </section>
      </div>
      <div  className="product-description">
        <div className="mb-5 container-products">
          {products?.map((e) => {
            return <ProductCard product={e} key={e.id}></ProductCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PrelandingView;
