'use client';
import Slider from 'react-slick';
import items from './itensCarrousel';
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Importa os ícones das setas
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="next-slide-right" onClick={onClick}>
      <MdKeyboardDoubleArrowLeft
        style={{ width: '30px', height: 'auto' }}
        color="white"
      />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="next-slide-left " onClick={onClick}>
      <MdKeyboardDoubleArrowRight
        style={{ width: '30px', height: 'auto' }}
        color="white"
      />
    </div>
  );
};
interface CarouselItem {
  title: string;
  text: string;
  image: StaticImageData;
  button: string;
  link: string;
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
                  <Link href={item.link} className="default-btn active-btn">
                    {item.button}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
