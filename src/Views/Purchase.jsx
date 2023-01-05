import React, { useEffect, useState } from "react";
import "../styles/purchase.css";
import check from '../assets/check.svg'
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import getProducts from '../selectors/cartProducts'
import actions from '../actions/products'

function Purchase({ ...props }) {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  return (
    <div className="container-purchase" onLoad={() => {
      const product = props.getProducts
      if (product[0]?.id > 0) {
        setShow(true)
        setTimeout(() => {
          props.purchasedProducts()
          navigate("/")
        }, 5000)
      } else {
        setShow(false)
        navigate("/")
      }
    }}>
      <div className={`purchase  ${!show ? 'purchase-hide' : ''}`}>
        <img
          src={check}
          className="container-check"
          alt="check"
        />
        <h1>Gracias por tu compra!</h1>
        <p className="purchase-text">
          En breve recibiras un mail con la factura
        </p>
        <div className="purchase-spinner m-0">
          <div className="spinner-border p-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addProduct: (product, count) => dispatch(actions.addProduct(product, count)),
    purchasedProducts: () => dispatch(actions.purchasedProducts())
  }
}
const mapStateToProps = state => {
  return {
    getProducts: getProducts(state)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Purchase)
