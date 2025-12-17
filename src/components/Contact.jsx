import React, { useState } from 'react';
import './Contact.css';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        type: 'Pessoa Jurídica',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, type, phone, email } = formData;

        const message = `Olá! Me chamo *${name}*.\nSou *${type}*.\nMeu contato: ${phone}\nEmail: ${email}\n\nGostaria de mais informações sobre os serviços da Avil Consultoria.`;

        const whatsappUrl = `https://wa.me/55988893909?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Fale Conosco
                </motion.h2>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Entre em contato</h3>
                        <p>Estamos prontos para transformar o futuro da sua carreira ou da sua empresa.</p>

                        <div className="info-item">
                            <Phone className="icon" />
                            <span>(98) 98893-9090</span>
                        </div>
                        <div className="info-item">
                            <Mail className="icon" />
                            <span>contato@avilconsultoria.com.br</span>
                        </div>
                        <div className="info-item">
                            <MapPin className="icon" />
                            <span>Em breve endereço físico</span>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="form-group">
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu nome"
                            />
                        </div>

                        <div className="form-group">
                            <label>Você é:</label>
                            <select name="type" value={formData.type} onChange={handleChange}>
                                <option value="Pessoa Jurídica">Empresa (Pessoa Jurídica)</option>
                                <option value="Pessoa Física">Pessoa Física</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Telefone / WhatsApp</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000"
                            />
                        </div>

                        <div className="form-group">
                            <label>E-mail</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="btn btn-primary submit-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Enviar para WhatsApp <Send size={18} />
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
