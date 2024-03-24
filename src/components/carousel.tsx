'use client';
import Slider from 'react-slick';
import items from './itensCarrousel';
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';

interface CarouselItem {
  title: string;
  text: string;
  image: StaticImageData;
  button: string;
}

export default function Carousel({ locale }: { locale: 'en' | 'pt' | 'fr' }) {
  const [itens, setItens] = useState<CarouselItem[]>([]);

  useEffect(() => {
    items({ locale }).then(res => setItens(res));
  }, [locale]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    waitForAnimate: true,
    fade: true,
  };

  return (
    <div>
      <Slider className="slider-carrousel" {...settings}>
        {itens.map((item, index) => {
          return (
            <div className="image-carrousel" key={index}>
              <Image src={item.image} alt="hotelaria" />
              <div className="home-text">
                <h1>{item.title}</h1>
                <p>{item.text}</p>

                <div className="theme-button">
                  <a href="about.html" className="default-btn active-btn">
                    {item.button}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
