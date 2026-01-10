import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Sobre a AVIL
                </motion.h2>

                <motion.p
                    className="about-intro"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Consultoria em Recursos Humanos com atuação estratégica, construída a partir de experiência prática e compromisso com o desenvolvimento de pessoas e organizações.
                </motion.p>

                <div className="about-container">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Quem conduz a AVIL</h3>
                        <p>
                            Fernanda Ávila é fundadora e consultora da AVIL Consultoria, com mais de 20 anos de experiência em Recursos Humanos. Atua de forma estratégica no desenvolvimento organizacional e de pessoas, apoiando empresas e profissionais na construção de relações de trabalho mais estruturadas, conscientes e sustentáveis.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/fernanda-avila.jpg"
                            alt="Fernanda Ávila - Fundadora da AVIL Consultoria"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
