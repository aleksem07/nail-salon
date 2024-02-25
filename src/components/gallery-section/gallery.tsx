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
          <ImageGallery
            items={imagesGallery}
            showPlayButton={true}
            thumbnailPosition={'bottom'}
            showIndex={true}
            autoPlay={true}
            slideDuration={1000}
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
