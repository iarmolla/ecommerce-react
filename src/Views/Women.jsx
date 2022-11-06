import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Icons from "../components/Icons";
import { motion, AnimatePresence } from "framer-motion";
import Footer from '../components/Footer'

function Women() {
  const [products, updateProducts] = useState();
  const [spinner, updateSpinner] = useState(false);
  const [grid, updateGrid] = useState("container-products");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((res) => {
        updateSpinner(true);
        updateProducts(res);
      });
  }, []);

  return (
    <div>
      <div>
        <h3 className="men-title">30% de descuento pagando en efectivo!</h3>
      </div>
      {!spinner ? (
        <div className="spinner">
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <Icons updateGrid={updateGrid}></Icons>
          <div className="mt-5 mb-5 product-description">
            <AnimatePresence>
              <motion.div layout className={grid}>
                {products?.map((e) => {
                  return <ProductCard product={e} key={e.id}></ProductCard>;
                })}
              </motion.div>
            </AnimatePresence>
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
}

export default Women;
