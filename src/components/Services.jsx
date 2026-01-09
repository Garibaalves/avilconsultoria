import React, { useState } from 'react';
import './Services.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2,
    User,
    Settings,
    Users,
    Presentation,
    TrendingUp,
    Compass,
    GraduationCap,
    ClipboardCheck,
    UserPlus
} from 'lucide-react';

const servicesData = {
    companies: [
        { title: "Mapeamento de Processos", icon: <Settings size={32} />, desc: "Consultoria em mapeamento, revisão e aprimoramento dos processos de Recursos Humanos, com foco em eficiência, clareza e alinhamento estratégico." },
        { title: "Desenvolvimento de Liderança", icon: <Users size={32} />, desc: "Programas estruturados para o desenvolvimento e amadurecimento de lideranças, alinhados à cultura organizacional e aos objetivos do negócio." },
        { title: "Palestras e Workshops", icon: <Presentation size={32} />, desc: "Treinamentos customizados, presenciais ou remotos, com foco em aplicação prática e desenvolvimento contínuo." },
        { title: "Cursos e Mentorias para Times de RH", icon: <GraduationCap size={32} />, desc: "Capacitação técnica e estratégica para profissionais de Recursos Humanos, por meio de cursos e mentorias voltados ao fortalecimento do papel do RH nas organizações." }
    ],
    individuals: [
        { title: "Avaliação de Carreira", icon: <ClipboardCheck size={32} />, desc: "Análise estruturada de trajetória profissional, perfil comportamental e objetivos, apoiando decisões mais conscientes e alinhadas ao momento de carreira." },
        { title: "Orientação Vocacional", icon: <Compass size={32} />, desc: "Processo de orientação para jovens, considerando interesses, aptidões e possibilidades reais de formação e atuação profissional." },
        { title: "Coaching de Carreira", icon: <TrendingUp size={32} />, desc: "Processo estruturado de desenvolvimento profissional, com foco em autoconhecimento, definição de objetivos e planejamento de carreira, apoiando transições e tomadas de decisão com maior clareza e segurança." },
        { title: "Mentoria Individual", icon: <UserPlus size={32} />, desc: "Acompanhamento personalizado para desenvolvimento profissional, tomada de decisão e fortalecimento de competências." }
    ]
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
    const [activeTab, setActiveTab] = useState('companies');

    return (
        <section id="services" className="services-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Nossos Serviços
                </motion.h2>

                <motion.p
                    className="services-intro"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem', color: '#555' }}
                >
                    Acreditamos que organizações são formadas por pessoas.
                    Por isso, nossas soluções atuam tanto no nível organizacional quanto no desenvolvimento individual, sempre de forma integrada e complementar.
                </motion.p>

                <div className="services-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'companies' ? 'active' : ''}`}
                        onClick={() => setActiveTab('companies')}
                    >
                        <Building2 size={20} /> Atuação Organizacional
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'individuals' ? 'active' : ''}`}
                        onClick={() => setActiveTab('individuals')}
                    >
                        <User size={20} /> Atuação Individual
                    </button>
                </div>

                <motion.div
                    className="services-grid"
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence mode='wait'>
                        {servicesData[activeTab].map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="service-card"
                                variants={itemVariants}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            >
                                <div className="card-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
