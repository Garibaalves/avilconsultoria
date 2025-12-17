import React from 'react';
import './Hero.css';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const whatsappNumber = "55988893909";
    const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a Avil Consultoria.");

    return (
        <section id="hero" className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Inovação em <br />
                        <span>Gestão de Pessoas</span>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Consultoria estratégica em RH para transformar organizações e potencializar talentos.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                        >
                            Fale Conosco <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="visual-circle">
                        <img src="/logomarca.png" alt="Avil Consultoria Logo" className="hero-logo-floating" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
