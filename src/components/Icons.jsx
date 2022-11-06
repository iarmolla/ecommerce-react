import React from "react";
import "../styles/Icons.css";
import { motion } from "framer-motion";

function Icons({ updateGrid }) {
  return (
    <div>
      <div className="men-icons">
        <div className="dropdown">
          <button
            className="btn btn-light men-order-button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ordenar por
          </button>
          <ul className="dropdown-menu">
            <li>
              <span className="dropdown-item">Nombre</span>
            </li>
            <li>
              <span className="dropdown-item">Precio ascendente</span>
            </li>
            <li>
              <span className="dropdown-item">Precio descendente</span>
            </li>
          </ul>
        </div>
        <div className="men-icons">
          <motion.button
            className="men-icon-grid"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => updateGrid("container-products--")}
          >
            <box-icon name="grid-alt"></box-icon>
          </motion.button>
          <motion.button
            className="men-icon-grid"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => updateGrid("container-products")}
          >
            <box-icon name="grid"></box-icon>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Icons;
