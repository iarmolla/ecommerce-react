import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import '../styles/productDescription.css'
import { Link } from 'react-router-dom'
import Footer from "../components/Footer";
import stars from '../assets/stars.svg'
import ModalImage from '../components/ModaImage'

function ProductDescription({ ...props }) {
  const [modalShow, setModalShow] = useState(false);
  const params = useParams();
  const [count, updateCount] = useState(1);
  const [image, updateImage] = useState("product-image");
  const notify = () => toast.success("Producto agregado al carrito");

  useEffect(() => {
    let products = [0, 1]
    products = Object.values(props.getProduct)
    if (products.length <= 0) {
      props.loadProducts()
    }
    products.map((product) => {
      if (params.id == product.id) {
        if (product.stock == 0) {
          updateCount(0)
        }
      }
    })

  }, [count]);
  let products = [0, 1]
  products = Object.values(props.getProduct)
  let product = products.find(product => product.id == params.id)

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
          <div className="container-product" id="container-product">
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
              <ModalImage
                show={modalShow}
                image={product.image}
                names={image}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div>
              <img className={image} src={product?.image} alt="product" onClick={() => setModalShow(true)} />
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
                      src={stars}
                      alt="stars"
                    />
                    <span className="card-text-rate">
                      {product.rating.rate}
                    </span>
                  </div>
                  <div className="card-price">
                    <span className="price">
                      ${product.originalPrice.toLocaleString("es")}
                    </span>
                    <i className="bx bxs-truck"></i>
                    <span className="card-send">Llega gratis el sabado</span>
                  </div>
                  <span>
                    Compra Protegida con Mercado Pago Recibí el producto que
                    esperabas o te devolvemos tu dinero
                  </span>
                  <span>Garantia: 12 meses</span>
                  <span className={`${count == 0 ? 'text-danger' : 'text-success'}`}>Stock {count > 0 ? 'Disponible' : 'Agotado'}</span>
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
                        if (count < product.stock) {
                          updateCount(count + 1)
                        }
                      }}
                    ></i>
                  </div>
                  <div className="card-buttons">
                    <Link to="/cart" className="card-link card-button w-100" onClick={() => {
                      if (count != 0) {
                        props.addProduct(product, count)
                      }
                    }}>Comprar</Link>
                    <button
                      className="card-button card-button-- w-100"
                      onClick={() => {
                        if (product.stock > 0) {
                          notify()
                          props.modifyProducts(product, count)
                          props.addProduct(product, count)
                          updateCount(1)
                        }
                        if (product.stock == 0) {
                          updateCount(0)
                        }
                      }}>
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
