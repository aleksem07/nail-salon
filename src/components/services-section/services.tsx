import styles from '@/UI/sass/container.module.scss';
import { AppRoutes } from '@/common/routes';

const Services = () => {
  return (
    <>
      <section
        id={`${AppRoutes.SERVICES.slice(1)}`}
        className='min-h-[100vh] bg-slate-100'
      >
        <div className={` ${styles.container}`}>Services</div>
      </section>
    </>
  );
};

export default Services;
