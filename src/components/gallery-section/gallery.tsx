'use client';
import { AppRoutes } from '@/common/routes';
import stylesWrapper from '@/UI/sass/container.module.scss';
import ImageGallery from 'react-image-gallery';
import { imagesGallery } from '@/common/gallery';
const Gallery = () => {
  return (
    <>
      <section id={`${AppRoutes.GALLERY.slice(1)}`} className={''}>
        <div className={` ${stylesWrapper.container}`}>
          <div className='max-md:mt-10 mb-6 mt-24 text-center text-base font-semibold uppercase leading-6 tracking-widest text-slate-500'>
            Галерея
          </div>
          <ImageGallery
            items={imagesGallery}
            showPlayButton={true}
            thumbnailPosition={'bottom'}
            showIndex={true}
            autoPlay={false}
            slideDuration={1000}
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
