import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import { Link } from "react-router-dom";
import ModalCart from "../components/ModalCart";
import Footer from '../components/Footer'

function Cart() {
  const [product, updateProduct] = useState([]);
  const [spinner, updateSpinner] = useState();
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        updateProduct(json);
        updateSpinner(true);
      });
  }, []);
  return (
    <>
      {!spinner ? (
        <div className="spinner">
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="table-products w-100 mb-5">
          <h1 className="table-title">Carrito de compras</h1>
          <table>
            <thead>
              <tr >
                <th>Productos</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {product.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <div className="table-product">
                        <img
                          src={product?.image}
                          className="cart-image"
                          alt=""
                        />
                        <span className="table-product-title">{product?.title}</span>
                      </div>
                    </td>
                    <td>
                      <div className="table-product-price">
                        ${product.price * 300?.toLocaleString("es")}
                      </div>
                    </td>
                    <td>
                      <select className="form-select" name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </td>
                    <td>
                      <div className="table-product-price">
                        <box-icon name="x" onClick={() => {
                          setModalShow(true)
                        }}></box-icon>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Link to="/purchase" className="btn btn-primary">
            Finalizar compra
          </Link>
          <ModalCart
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default Cart;
