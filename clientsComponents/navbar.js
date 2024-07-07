import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        const links = document.querySelectorAll('.nav-link');

        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.color = '#D5B56E'; // Cambia esto al color dorado
            });
            link.addEventListener('mouseout', () => {
                link.style.color = activeLink === link.textContent ? '#D5B56E' : '#FFFFFF';  // Cambia esto al color original de tus enlaces
            });
            link.addEventListener('click', () => {
                setActiveLink(link.textContent);
            });
        });
    }, []);

    useEffect(() => {
        const links = document.querySelectorAll('.nav-link');

        links.forEach(link => {
            link.style.color = activeLink === link.textContent ? '#D5B56E' : '#FFFFFF';
        });
    }, [activeLink]);
    useEffect(() => {
        const links = document.querySelectorAll('.nav-link-esp');

        links.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.color = '#D5B56E'; // Cambia esto al color dorado
            });
            link.addEventListener('mouseout', () => {
                link.style.color = activeLink === link.textContent ? '#D5B56E' : '#FFFFFF';  // Cambia esto al color original de tus enlaces
            });
            link.addEventListener('click', () => {
                setActiveLink(link.textContent);
            });
        });
    }, []);

    useEffect(() => {
        const links = document.querySelectorAll('.nav-link-esp');

        links.forEach(link => {
            link.style.color = activeLink === link.textContent ? '#D5B56E' : '#FFFFFF';
        });
    }, [activeLink]);

    const [showProductsMenu, setShowProductsMenu] = useState(false);

    return (
        <nav className="nav">
            <div className="home-nav-logo">
                <div className={`navbar-links-container ${isOpen && "open"}`}>
                    <ul className="ul-nav">
                        <Link href="/nosotros" className="nav-link">Nosotros</Link>
                        <Link href="/carta" className="nav-link">Carta</Link>
                        <li className="nav-link-esp" onClick={() => setShowProductsMenu(!showProductsMenu)}>Productos ▾
                        {showProductsMenu && (
    <ul className="sub-menu">
        <li className="nav-link-esp">
            <Link href="/bodegas" className="nav-link">Comida</Link>
        </li>
        <li className="nav-link-esp">
            <Link href="/embutidos" className="nav-link">Bebidas</Link>
        </li>
    </ul>)}
                    </li>
                        <Link href="/tarjeta-regalo" className="nav-link">Tarjeta de regalo</Link>
                    </ul>
                    <Link href="/">
                        <Image src="/assets/logo-ppal-jabu.png" alt="Descripción de la imagen" width={150} height={100} className='logo-mediaq' />
                    </Link>
                    <ul className="ul-nav-redes">
                        <Link href="/reservas" className="nav-link">Reservas</Link>
                        <Link href="/evento" className="nav-link">Eventos</Link>
                        <Link href="/contacto" className="nav-link">Contacto</Link>
                        <div className='redes-media'>
                        <Link href="/instagram">
                            <Image src="/assets/instagram-jabu.png" alt="Descripción de la imagen" width={20} height={20} />
                        </Link>
                        <Link href="/facebook">
                            <Image src="/assets/fb-jabu.png" alt="Descripción de la imagen" width={20} height={20} />
                        </Link>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="logo-toggle">
            <Link href="/">
                <Image src="/assets/logo-ppal-jabu.png" alt="Descripción de la imagen" width={140} height={70} style={{ marginTop: 30 }} className='logo-img'/>
            </Link>
                <div className={`toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span className="span-nav"></span>
                    <span className="span-nav"></span>
                    <span className="span-nav"></span>
                    <body className={isOpen ? 'overlay' : ''}></body>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;


















