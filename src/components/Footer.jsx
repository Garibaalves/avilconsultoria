import React from 'react';
import './Footer.css';
import { Linkedin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>AVIL <span>CONSULTORIA</span></h3>
                        <p>Transformando organizações e pessoas para um futuro próspero.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><a href="#hero">Início</a></li>
                            <li><a href="#services">Serviços</a></li>
                            <li><a href="#purpose">Propósito</a></li>
                            <li><a href="#academy">Jornada de Líderes</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contato</h4>
                        <ul className="footer-contact-list" style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.8rem', color: '#aaa', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Phone size={18} /> (31) 98889-3909
                            </li>
                            <li style={{ marginBottom: '0.8rem', color: '#aaa', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Mail size={18} /> avilconsultoriarh@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Redes Sociais</h4>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/fernanda-avilconsultoria" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Avil Consultoria. Todos os direitos reservados. | Desenvolvido por: <a href="https://www.codenow.com.br/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>Codenow Soluções digitais LTDA</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
