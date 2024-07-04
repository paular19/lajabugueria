import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image'

const Footer = () => {
    const [showProductsMenu, setShowProductsMenu] = useState(false);


    return (
        <nav className="nav">
                <div className= "navbar-links-container-foo">
                <Link href="/nosotros" className='margin-footer'>
                        <Image src="/assets/logo-footer-jabu.png" alt="Descripción de la imagen" width={150} height={100} />
                    </Link>
                    <ul className="ul-nav-foo">
                        <Link href="/nosotros" className="nav-link">Nosotros</Link>
                        <Link href="/carta" className="nav-link">Carta</Link>
                        <Link href="/productos" className="nav-link">Embutidos</Link>
                        <Link href="/productos" className="nav-link">Bodega</Link>
                        <Link href="/tarjeta-regalo" className="nav-link">Regalo</Link>
                    </ul>
                    <ul className="ul-nav-redes-foo">
                        <Link href="/reservas" className="nav-link">Reservas</Link>
                        <Link href="/eventos" className="nav-link">Eventos</Link>
                        <Link href="/contacto" className="nav-link">Contacto</Link>
                    </ul>
                    <div className='redes-footer'>
                    <Link href="/instagram">
                            <Image src="/assets/instagram-jabu.png" alt="Descripción de la imagen" width={20} height={20} />
                        </Link>
                        <Link href="/facebook">
                            <Image src="/assets/fb-jabu.png" alt="Descripción de la imagen" width={20} height={20} />
                        </Link>
                    </div>
                </div>
         
        </nav>
    )
}

export default Footer;
