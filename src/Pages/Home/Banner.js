/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import item1 from '../../images/cam6.png';  // Replace with your image paths
import item2 from '../../images/cam7.png';
import item3 from '../../images/cam8.png';
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            id: 1,
            image: item1,
            next: 2,
            prev: 3
        },
        {
            id: 2,
            image: item2,
            next: 3,
            prev: 1
        },
        {
            id: 3,
            image: item3,
            next: 1,
            prev: 2
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(current => (current === 0 ? slides.length - 1 : current - 1));
    };

    return (
        <div className="carousel w-full">
            {slides.map((slide, index) => (
                <div key={slide.id} id={`slide${slide.id}`} className={`carousel-item relative w-full ${index === currentSlide ? '' : 'hidden'}`}>
                    <img src={slide.image} className="w-full" alt={`Slide ${slide.id}`} />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${slide.prev}`} className="btn btn-circle" onClick={prevSlide}>❮</a>
                        <a href={`#slide${slide.next}`} className="btn btn-circle" onClick={nextSlide}>❯</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
