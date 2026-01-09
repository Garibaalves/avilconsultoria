import React, { useState } from 'react';
import './Navbar.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <a href="#">AVIL <span>CONSULTORIA</span></a>
            </div>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#hero" onClick={() => setIsOpen(false)}>Início</a></li>
                <li><a href="#services" onClick={() => setIsOpen(false)}>Serviços</a></li>
                <li><a href="#purpose" onClick={() => setIsOpen(false)}>Propósito & Valores</a></li>
                <li><a href="#academy" onClick={() => setIsOpen(false)}>Jornada de Líderes</a></li>
                <li><a href="#gallery" onClick={() => setIsOpen(false)}>Galeria</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contato</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
