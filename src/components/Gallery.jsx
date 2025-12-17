import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", // Meeting/Consulting
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", // Team work
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", // Workshop
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"  // Corporate office
];

const Gallery = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % photos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % photos.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <h2 className="section-title">Galeria</h2>
                <div className="gallery-carousel">
                    <div className="gallery-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                        {photos.map((photo, index) => (
                            <div className="gallery-slide" key={index}>
                                <img src={photo} alt={`Galeria Avil ${index + 1}`} />
                                <div className="slide-overlay"></div>
                            </div>
                        ))}
                    </div>

                    <button className="slider-btn prev" onClick={prevSlide}><ChevronLeft size={30} /></button>
                    <button className="slider-btn next" onClick={nextSlide}><ChevronRight size={30} /></button>

                    <div className="slider-dots">
                        {photos.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === current ? 'active' : ''}`}
                                onClick={() => setCurrent(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
