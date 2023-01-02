import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Icons from "../components/Icons";
import "../styles/men.css";
import { motion, AnimatePresence } from "framer-motion";
import Footer from '../components/Footer'

function Men({ ...props }) {
  const [grid, updateGrid] = useState("container-products");
  useEffect(() => {
    props.loadMen()
  }, []);
  let products = [0, 1]
  products = Object.values(props.getMen)
  return (
    <div>
      <div>
        <h3 className="men-title">30% de descuento pagando en efectivo!</h3>
      </div>
      {products.length == 0 ? (
        <div className="spinner">
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="men-order">
          <Icons updateGrid={updateGrid}></Icons>
          <div className="mt-5 mb-5 product-description">
            <AnimatePresence>
              <motion.div layout className={grid}>
                {products?.map((e) => {
                  return <ProductCard product={e} key={e.id}></ProductCard>
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

export default Men;
