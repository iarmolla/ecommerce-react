import React, { useEffect } from 'react'
import '../styles/landing.css'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import samsung from '../assets/samsung.jpg'

function Landing() {
    useEffect(() => {
        const element = document.getElementById('landing-title')
        element?.scrollIntoView()
    }, [])
    return (
        <>
            <div className='landing'>
                <section className='landing-section'>
                    <h1 className='landing-title' id="landing-title">Mejores productos al alcance de tus manos</h1>
                    <p className='landing-text'>Ultimos modelos actualizados con los precios mas bajos</p>
                    <div className='landing-buttons'>
                        <Link to='/' className='card-button landing-button'>Más productos</Link>
                        <div className='landing-links'>
                            <Link to='/login' className='landing-link'>Acceder</Link>
                            <box-icon name='chevron-right'></box-icon>
                        </div>
                    </div>
                </section>
                <section>
                    <img className='landing-image' src={samsung} alt="samsung" />
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Landing