'use client';
import { ParallaxBanner } from 'react-scroll-parallax';

const Banner = () => {
  return (
    <ParallaxBanner
      layers={[{ image: '/banner/promo-1.jpg', speed: -20 }]}
      className="aspect-[3/1]"
    />
  );
};

export default Banner;