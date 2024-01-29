'use client';
import { Component } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { SLIDES } from '@/common/slides';

interface SimpleSliderProps {
  className?: string;
}

export default class SimpleSlider extends Component<SimpleSliderProps> {
  constructor(props: SimpleSliderProps) {
    super(props);
  }
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings} className={`${this.props.className}`}>
        {SLIDES.map((slide, index) => (
          <div key={`${slide.image} ${index}`} className='h-[100vh] text-end'>
            <Image
              className='h-full object-cover'
              src={slide.image}
              alt='promo background'
              width={800}
              height={600}
              loading='lazy'
            />
          </div>
        ))}
      </Slider>
    );
  }
}
