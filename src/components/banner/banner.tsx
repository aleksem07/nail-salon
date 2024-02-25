'use client';
import { ParallaxBanner } from 'react-scroll-parallax';

const Banner = ({img, size = 'aspect-[3/1]', speed = -20}: {img: string, size?: string, speed?: number}) => {
  return (
    <ParallaxBanner
      layers={[{ image: img, speed: speed }]}
      className={size}
    />
  );
};

export default Banner;
