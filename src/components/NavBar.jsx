import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../assets/logo.jpg'

function NavBar({ ...props }) {
  const [user, setUser] = useState(false)
  const [userName, setUserName] = useState()
  useEffect(() => {    
    let aux = window.localStorage.getItem("loggedUser");
    if (aux) {
      aux = JSON.parse(aux)
      setUser(true)
      setUserName(aux.email)
    }
    else {
      Object.values(props.getUsers).map((user) => {
        if (user?.logged) {
          setUser(true)
          setUserName(user.email)
        }
      })
    }
  }, [props.getUsers])
  const logout = () => {
    setUser(false)
    setUserName()
    let aux = window.localStorage.getItem("loggedUser");
    aux = window.localStorage.clear()
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" id="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img
              src={logo}
              alt="logo"
              className="logo"
            />
          </Link>
          <motion.button
            className="navbar-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.9 }}
          >
            <span className="navbar-toggler-icon"></span>
          </motion.button>
          <div className="collapse navbar-collapse navbar-items" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-categories navbar-collapse">
              <motion.div
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/men" className="navbar-categories-link">
                  Hombres
                </Link>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.9 }}>
                <Link to="/women" className="navbar-categories-link">
                  Mujeres
                </Link>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.9 }}>
                <Link to="/electronics" className="navbar-categories-link">
                  Tecnologia
                </Link>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.9 }}>
                <Link to="/jewelery" className="navbar-categories-link">
                  Joyeria
                </Link>
              </motion.div>
              {user ?
                <div className="navbar-icons--">
                  <div className="dropdown">
                    <button
                      className="btn btn-light men-order-button dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {userName}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <span className="dropdown-item" onClick={() => logout()}>Cerrar sesion</span>
                      </li>
                    </ul>
                  </div>
                  <motion.div
                    whileTap={{ scale: 0.9 }}>
                    <Link to="/cart">
                      <box-icon name="cart"></box-icon>
                    </Link>
                  </motion.div>
                </div>
                : <>
                  <div className="navbar-icons--">
                    <motion.div
                      whileTap={{ scale: 0.9 }}>
                      <Link to="/login">
                        <box-icon name="user"></box-icon>
                      </Link>
                    </motion.div>
                    <motion.div
                      whileTap={{ scale: 0.9 }}>
                      <Link to="/cart">
                        <box-icon name="cart"></box-icon>
                      </Link>
                    </motion.div>
                  </div>
                </>}
            </div>
            <div className="navbar-icons">
              {
                user ? <div className="navbar-icons">
                  <div className="dropdown">
                    <button
                      className="btn btn-light men-order-button dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {userName}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <span className="dropdown-item text-justify" onClick={() => logout()}>Cerrar sesion</span>
                      </li>
                    </ul>
                  </div>
                  <motion.div className="navbar-icons"
                    whileTap={{ scale: 0.9 }}>
                    <Link to="/cart" className="navbar-icons">
                      <box-icon name="cart" className="navbar-icons"></box-icon>
                    </Link>
                  </motion.div>
                </div>
                  : <>
                    <motion.div
                      whileTap={{ scale: 0.9 }}>
                      <Link to="/login">
                        <div className="navbar-icons">
                          <box-icon name="user"></box-icon>
                        </div>
                      </Link>
                    </motion.div>
                    <motion.div
                      whileTap={{ scale: 0.9 }}>
                      <Link to="/cart" >
                        <div className="navbar-icons">
                          <box-icon name="cart"></box-icon>
                        </div>
                      </Link>
                    </motion.div>
                  </>
              }
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

export default NavBar