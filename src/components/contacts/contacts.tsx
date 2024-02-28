import styles from '@/UI/sass/container.module.scss';
import { AppRoutes } from '@/common/routes';
import MapComponent from '@/components/map/map';

const Contacts = () => {
  return (
    <>
      <section id={`${AppRoutes.CONTACTS.slice(1)}`} className=' bg-red-100'>
        <div className={`${styles.container}`}>
          <div className='mb-6 mt-10 text-center text-base font-semibold uppercase leading-6 tracking-widest text-slate-500'>
            Контакты
          </div>
          <MapComponent />
        </div>
      </section>
    </>
  );
};

export default Contacts;
