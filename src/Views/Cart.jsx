import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import { Link } from "react-router-dom";
import ModalCart from "../components/ModalCart";
import Footer from '../components/Footer'

function Cart({ ...props }) {
  const [modalShow, setModalShow] = useState(false);
  const [total, setTotal] = useState([])
  const [id, setId] = useState()
  let product = [0, 1]
  product = Object.values(props.getCart)
  useEffect(() => {
    let aux = [0]
    product.map((e) => {
      aux.push(e.price)
    })
    let total = aux.reduce((a, b) => a + b, 0);
    setTotal(total)
  }, [])
  return (
    <>
      {product.length == 0 ? (
        <div>
          <div className="m-5 justify-content-center align-items-center d-flex flex-column">
            <h1 className="table-title">Carrito de compras</h1>
            <span className="text-justify">No hay productos en el carrito.</span>
          </div>
        </div>
      ) : (
        <div className="table-products w-100 mb-5">
          <h1 className="table-title">Carrito de compras</h1>
          <table>
            <thead>
              <tr>           
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
                          alt={product.title}
                        />
                        <span className="table-product-title">{product?.title}</span>
                      </div>
                    </td>
                    <td>
                      <div className="table-product-price">
                        ${product.price.toLocaleString("es")}
                      </div>
                    </td>
                    <td>
                      <select className="form-select">
                        {
                          product.repeated == 1 ? <option value="2">{product.repeated}</option> : <option value="2">{product.repeated}</option>
                        }
                      </select>
                    </td>
                    <td>
                      <div className="table-product-price">
                        <box-icon name="x" onClick={() => {
                          setModalShow(true)
                          setId(product.id)
                        }}></box-icon>
                        <ModalCart
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            deleteProduct={props.deleteProduct}
                            product={id}
                            price={product.price}
                            total={total}
                            setTotal={setTotal}
                          />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <h1 className="h3">Total: <span>${total.toLocaleString("es")}</span></h1>
          </div>
          <Link to="/purchase" className="btn btn-primary">
            Finalizar compra
          </Link>

          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default Cart;
