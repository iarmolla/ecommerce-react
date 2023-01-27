import React, { useEffect, useState } from "react";
import "../styles/cart.css";
import ModalCart from "../components/ModalCart";
import Footer from '../components/Footer'
import ModalLogin from '../components/ModalLogin'
import { Link, useNavigate } from "react-router-dom";

function Cart({ ...props }) {
  const [modalShow, setModalShow] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [total, setTotal] = useState([])
  const [id, setId] = useState()
  const [userLogged, setUserLogged] = useState(false)
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  let product = [0, 1]
  product = Object.values(props.getCart)
  const [aux, setAux] = useState(product)
  useEffect(() => {
    let aux = [0]    
    product.map((e) => {      
      aux.push(e.price)
    })
    let total = aux.reduce((a, b) => a + b, 0);
    setTotal(total)
    let localStorage = window.localStorage.getItem("loggedUser");
    localStorage = JSON.parse(localStorage)
    if (localStorage?.logged) {
      setUserLogged(true)
    }
  }, [count,product])
  const changeAmount = (product) => {
    let options = [
      <option key={product.title} value={product.title} disabled selected>{`Seleccionado: ${product.repeated} Unidades`}</option>
    ]
    for (let x = 1; x <= product.rating.count; x++) {
      options.push(<option key={x} value={x}>{`Cantidad: ${x} Unidades`}</option>)
    }
    return options
  }
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
                        <div className="table-product-title">
                          <span className="">{product?.title}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="table-product-price">
                        ${product.price.toLocaleString("es")}
                      </div>
                    </td>
                    <td>
                      <select className="form-select" onChange={(e) => {  
                        const newProduct = product
                        newProduct.modify = parseInt(e.target.value) 
                        product = newProduct               
                        props.modifyProduct(newProduct)
                        props.modifyStock(newProduct)
                        setCount(count + 1)
                      }}>
                        {
                          changeAmount(product)
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
                          test={aux}
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          delete={props.deleteProduct}
                          modify={props.modifyStock}
                          stock={product}
                          product={id}
                          price={product.price}
                          total={total}
                          set={setTotal}
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
          {userLogged ? <Link to="/purchase" className="btn btn-primary">Finalizar compra</Link> : <button className="btn btn-primary" onClick={() => {
            setModalLogin(true)
            if (userLogged) {
              navigate("/purchase")
            }
          }}>Finalizar compra</button>}
          {
            !userLogged ? <ModalLogin show={modalLogin}
              onHide={() => setModalLogin(false)}></ModalLogin> : <></>
          }
          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default Cart;
