import styles from '@/UI/sass/container.module.scss';
import { AppRoutes } from '@/common/routes';
import stylesServices from './services.module.scss';

const Services = () => {
  return (
    <>
      <section
        id={`${AppRoutes.SERVICES.slice(1)}`}
        className={`min-h-[100vh] bg-blue-100 ${stylesServices.services || ''}`}
      >
        <div className={` ${styles.container}`}>Services</div>
      </section>
    </>
  );
};

export default Services;
