import React from 'react'
import { Link } from "react-router-dom";
import  '../styles/error.css'

function Error() {
    return (
        <div className="container-errors--">
            <p className="container-error--">404</p>
            <h2 className="container-error-text--">
                Parece que has encontrado la puerta a la gran nada
            </h2>
            <p className="container-paragraph-error">¡Lo siento por eso! Visite la página de inicio para llegar a donde necesita ir.</p>
            <Link to={'/'} className="container-link--">Volver!</Link>
        </div>
    )
}

export default Error