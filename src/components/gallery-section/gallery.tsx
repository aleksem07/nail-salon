import { AppRoutes } from '@/common/routes';
import stylesWrapper from '@/UI/sass/container.module.scss';
import styles from './styles.module.scss';

const Gallery = () => {
  return (
    <>
      <section
        id={`${AppRoutes.GALLERY.slice(1)}`}
        className={`min-h-[100vh] bg-pink-100 `}
      >
        <div className={` ${stylesWrapper.container}`}>GALLERY</div>
      </section>
    </>
  );
};

export default Gallery;
