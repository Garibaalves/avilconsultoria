import React from 'react';
import './PurposeValues.css';
import { Target, TrendingUp, Users, Leaf, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const valuesData = [
    { id: 1, title: "Excelência em Soluções", icon: <Award />, text: "Atuação pautada em soluções personalizadas, alinhadas ao perfil, à realidade e às necessidades de cada cliente." },
    { id: 2, title: "Cultura Organizacional", icon: <Users />, text: "Fortalecimento da cultura organizacional em consonância com as estratégias, valores e objetivos do negócio." },
    { id: 3, title: "Impacto Sustentável", icon: <Leaf />, text: "Desenvolvimento de lideranças e equipes preparadas para gerar resultados consistentes, sustentáveis e duradouros ao longo do tempo." },
    { id: 4, title: "Desenvolvimento Contínuo", icon: <TrendingUp />, text: "Valorização do aprendizado constante e do crescimento sustentável de pessoas e organizações." },
    { id: 5, title: "Empoderamento", icon: <Target />, text: "Apoio ao desenvolvimento pessoal e profissional, promovendo autonomia, clareza e responsabilidade para a tomada de decisões e alcance de objetivos." }
];

const PurposeValues = () => {
    return (
        <section id="purpose" className="purpose-vals-section">
            <div className="container">

                <div className="purpose-block">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Nosso Propósito
                    </motion.h2>
                    <motion.blockquote
                        className="purpose-quote"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        "Transformar organizações e capacitar indivíduos por meio de soluções estratégicas e personalizadas que promovem o crescimento, o desenvolvimento contínuo e o alinhamento com uma cultura organizacional robusta e sustentável."
                    </motion.blockquote>
                </div>

                <div className="values-block">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Nossos Valores
                    </motion.h2>
                    <div className="values-grid">
                        {valuesData.map((val, i) => (
                            <motion.div
                                key={val.id}
                                className="value-item"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="value-icon">{val.icon}</div>
                                <div className="value-content">
                                    <h4>{val.title}</h4>
                                    <p>{val.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PurposeValues;
