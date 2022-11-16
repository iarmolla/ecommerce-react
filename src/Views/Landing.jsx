import React from 'react'
import '../styles/landing.css'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'

function Landing() {
    return (
        <>
            <div className='landing'>
                <section className='landing-section'>
                    <h1 className='landing-title'>Mejores productos al alcance de tus manos</h1>
                    <p className='landing-text'>Ultimos modelos actualizados con los precios mas bajos</p>
                    <div className='landing-buttons'>
                        <Link to='/' className='card-button landing-button'>Mas productos</Link>
                        <div className='landing-links'>
                            <Link to='/login' className='landing-link'>Acceder</Link>
                            <box-icon name='chevron-right'></box-icon>
                        </div>
                    </div>
                </section>
                <section>
                    <img className='landing-image' src="https://images.samsung.com/is/image/samsung/assets/ar/2203/galaxy-a-series/02_Showroom_kv_asset_product.png?$ORIGIN_PNG$" alt="" />
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Landing