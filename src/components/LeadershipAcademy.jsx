import React from 'react';
import './LeadershipAcademy.css';
import { Layers, Monitor, BarChart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const LeadershipAcademy = () => {
    return (
        <section id="academy" className="academy-section">
            <div className="container">
                <div className="academy-header">
                    <motion.h2
                        className="section-title academy-title"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Jornada de Líderes
                    </motion.h2>
                    <motion.p
                        className="academy-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Programa estruturado de desenvolvimento de lideranças, com metodologia própria, acompanhamento contínuo e foco na aplicação prática no contexto organizacional.
                    </motion.p>
                </div>

                <div className="academy-content">
                    <div className="academy-features">
                        {[
                            { icon: <Layers size={40} />, title: "Ensino Modular", desc: "Jornada de aprendizado dividida em módulos estratégicos." },
                            { icon: <Monitor size={40} />, title: "Plataforma Web", desc: "Ambiente exclusivo para gestão de desafios." },
                            { icon: <BarChart size={40} />, title: "Indicadores", desc: "Acompanhamento detalhado de engajamento e evolução." },
                            { icon: <CheckCircle size={40} />, title: "Gestão Completa", desc: "Gerenciamento total do projeto pela nossa equipe." }
                        ].map((feature, index) => (
                            <motion.div
                                className="feature-item"
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="academy-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a href="https://wa.me/5531988893909?text=Tenho%20interesse%20na%20Jornada%20de%20L%C3%ADderes" target="_blank" className="btn btn-primary">
                        Conheça o Programa
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadershipAcademy;
