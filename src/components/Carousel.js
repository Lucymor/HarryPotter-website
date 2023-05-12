import { useEffect, useState } from 'react';
import 'boxicons';
import '../style/Carousel.scss';
import { Slides } from './Items';
import { Link } from 'react-router-dom';
export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = Slides.length;



    const autoScroll = true;
    let slideInterval;
    let intervalTime = 10000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? currentSlide - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return()=> clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className='slider'>
            <button className='arrow prev' onClick={prevSlide}><box-icon name='chevron-left' color='rgb(226, 220, 200)' size='lg'></box-icon></button>
            <button className='arrow next' onClick={nextSlide}><box-icon name='chevron-right' color='rgb(226, 220, 200)' size='lg'></box-icon></button>

            {Slides.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <div>
                                <img src={slide.image} alt="slide" />
                                <div className='content'>
                                    
                                    <h2>{slide.title}</h2>
                                    <p>{slide.text}</p>
                                    <Link to={slide.link}>
                                    <button className='btn'>{slide.button}</button>
                                    </Link>
                                </div>

                            </div>
                        )}

                    </div>
                )
            })}


        </div>
    )
}