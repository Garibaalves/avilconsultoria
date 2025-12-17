import React, { useState } from 'react';
import './Services.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2,
    User,
    Settings,
    Users,
    Presentation,
    HeartHandshake,
    DollarSign,
    TrendingUp,
    Search,
    Compass,
    FileText,
} from 'lucide-react';

const servicesData = {
    companies: [
        { title: "Mapeamento de Processos", icon: <Settings size={32} />, desc: "Consultoria em Mapeamento e Revisão de processos de RH." },
        { title: "Desenvolvimento de Liderança", icon: <Users size={32} />, desc: "Programa completo para capacitação de líderes." },
        { title: "Palestras e Workshops", icon: <Presentation size={32} />, desc: "Treinamentos customizados, presenciais ou remotos." },
        { title: "Clima e Cultura", icon: <HeartHandshake size={32} />, desc: "Gestão de clima e fortalecimento da cultura organizacional." },
        { title: "Remuneração", icon: <DollarSign size={32} />, desc: "Estratégias de remuneração e benefícios." },
        { title: "Plano de Carreira", icon: <TrendingUp size={32} />, desc: "Estruturação de planos de carreira e sucessão." },
        { title: "Recrutamento Estratégico", icon: <Search size={32} />, desc: "Seleção especializada para cargos estratégicos." }
    ],
    individuals: [
        { title: "Coaching de Carreira", icon: <Compass size={32} />, desc: "Apoio para transição e crescimento profissional." },
        { title: "Mapeamento de Perfil", icon: <User size={32} />, desc: "Análise comportamental profunda." },
        { title: "Orientação Vocacional", icon: <TrendingUp size={32} />, desc: "Direcionamento de carreira para jovens." },
        { title: "Currículo e Entrevista", icon: <FileText size={32} />, desc: "Elaboração de currículo e preparação para entrevistas." }
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

                <div className="services-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'companies' ? 'active' : ''}`}
                        onClick={() => setActiveTab('companies')}
                    >
                        <Building2 size={20} /> Para Empresas
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'individuals' ? 'active' : ''}`}
                        onClick={() => setActiveTab('individuals')}
                    >
                        <User size={20} /> Para Pessoas
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
